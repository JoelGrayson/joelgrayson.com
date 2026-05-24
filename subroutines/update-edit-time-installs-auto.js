#!/usr/bin/env node

// Automated replacement for update-edit-time-installs.js.
//
// Pulls per-day download counts for Edit Time directly from the App Store
// Connect Sales Reports API and back-fills Stats.editTimeUsers. No browser,
// no CSV download.
//
// Modes:
//   (default)    Incremental. Fills any null row in the last ~360 days using
//                yesterday-or-earlier's populated value as the cumulative
//                anchor + per-day deltas from the API. Safe to run daily.
//   --bootstrap  One-shot. Computes lifetime cumulative downloads as of today
//                (YEARLY reports for complete past years + DAILY for the
//                current year) and writes it to today's Stats row. Run this
//                once when starting fresh or after a long gap.
//   --dry-run    Print what would change without writing.
//
// Constants below: APP_LAUNCH_YEAR is the first year Edit Time shipped (2023).
//
// Env (already in .env):
//   APP_STORE_CONNECT_ISSUER_ID
//   APP_STORE_CONNECT_API_KEY_ID
//   APP_STORE_CONNECT_KEY            (PEM with literal `$` in place of \n)
//   APP_STORE_CONNECT_VENDOR_NUMBER

const path=require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { PrismaClient }=require('@prisma/client');
const jwt=require('jsonwebtoken');
const { gunzipSync }=require('zlib');

const prisma=new PrismaClient();

const SKU='com.joelgrayson.Edit-Time';
const APP_LAUNCH_YEAR=2023;
const DAILY_RETENTION_DAYS=360; // Apple keeps DAILY for 365; keep a buffer.

const BOOTSTRAP=process.argv.includes('--bootstrap');
const DRY_RUN=process.argv.includes('--dry-run');

function iso(date) {
    const y=date.getUTCFullYear();
    const m=String(date.getUTCMonth()+1).padStart(2, '0');
    const d=String(date.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function addDays(date, n) {
    const d=new Date(date);
    d.setUTCDate(d.getUTCDate()+n);
    return d;
}

function makeToken() {
    const now=Math.floor(Date.now()/1000);
    const payload={
        iss: process.env.APP_STORE_CONNECT_ISSUER_ID,
        iat: now,
        exp: now+60*19, // ASC requires <= 20 min
        aud: 'appstoreconnect-v1',
        bid: SKU,
    };
    const privateKey=process.env.APP_STORE_CONNECT_KEY.replaceAll('$', '\n');
    return jwt.sign(payload, privateKey, {
        algorithm: 'ES256',
        header: {
            alg: 'ES256',
            kid: process.env.APP_STORE_CONNECT_API_KEY_ID,
            typ: 'JWT',
        },
    });
}

// Returns:
//   { status: 'ok', units: N }
//   { status: 'not_ready' }   - 404, report not yet published (~24-48h lag)
//   { status: 'gone' }        - 410, outside retention window
//   { status: 'error', code } - other failure
async function fetchUnits(token, frequency, reportDate) {
    const url=new URL('https://api.appstoreconnect.apple.com/v1/salesReports');
    url.searchParams.append('filter[frequency]', frequency);
    url.searchParams.append('filter[reportDate]', reportDate);
    url.searchParams.append('filter[reportSubType]', 'SUMMARY');
    url.searchParams.append('filter[reportType]', 'SALES');
    url.searchParams.append('filter[vendorNumber]', process.env.APP_STORE_CONNECT_VENDOR_NUMBER);

    const res=await fetch(url.href, { headers: { Authorization: `Bearer ${token}` } });
    if (res.status===404) return { status: 'not_ready' };
    if (res.status===410) return { status: 'gone' };
    if (!res.ok) {
        console.warn(`ASC ${frequency} ${reportDate}: HTTP ${res.status} - ${await res.text()}`);
        return { status: 'error', code: res.status };
    }

    const tsv=gunzipSync(Buffer.from(await res.arrayBuffer())).toString('utf-8');
    const lines=tsv.trim().split('\n');
    if (lines.length<2) return { status: 'ok', units: 0 };
    const headers=lines[0].split('\t');
    const skuIdx=headers.indexOf('SKU');
    const typeIdx=headers.indexOf('Product Type Identifier');
    const unitsIdx=headers.indexOf('Units');
    const units=lines.slice(1).reduce((sum, line)=>{
        const v=line.split('\t');
        // F1 = free iOS app install. Mirrors getEditTimeSales.ts.
        if (v[skuIdx]===SKU && v[typeIdx]==='F1')
            return sum+parseInt(v[unitsIdx]||'0', 10);
        return sum;
    }, 0);
    return { status: 'ok', units };
}

async function bootstrap(token) {
    const now=new Date();
    const currentYear=now.getUTCFullYear();

    let total=0;
    for (let year=APP_LAUNCH_YEAR; year<currentYear; year++) {
        const r=await fetchUnits(token, 'YEARLY', String(year));
        if (r.status!=='ok') throw new Error(`YEARLY ${year}: ${r.status}`);
        console.log(`YEARLY ${year}: +${r.units}`);
        total+=r.units;
    }

    // DAILY for Jan 1 → today (inclusive) of the current year. Reports lag
    // ~24-48h, so the last day or two will likely be not_ready and skipped.
    let d=new Date(Date.UTC(currentYear, 0, 1));
    while (d<=now) {
        const r=await fetchUnits(token, 'DAILY', iso(d));
        if (r.status==='ok') {
            if (r.units>0) console.log(`DAILY ${iso(d)}: +${r.units}`);
            total+=r.units;
        } else if (r.status==='not_ready') {
            console.log(`DAILY ${iso(d)}: not ready yet — stopping bootstrap here`);
            break;
        } else {
            throw new Error(`DAILY ${iso(d)}: ${r.status}`);
        }
        d=addDays(d, 1);
    }

    // Write to the most recent Stats row dated <= today.
    const row=await prisma.stats.findFirst({
        where: { date: { lte: now } },
        orderBy: { date: 'desc' },
    });
    if (!row) throw new Error('No Stats row found to write bootstrap value to');

    console.log(`\nBootstrap cumulative as of ${iso(row.date)}: ${total}`);
    if (!DRY_RUN) {
        await prisma.stats.update({
            where: { id: row.id },
            data: { editTimeUsers: total },
        });
        console.log('Wrote.');
    } else {
        console.log('(dry-run, not written)');
    }
}

async function incremental(token) {
    const oldestAllowed=addDays(new Date(), -DAILY_RETENTION_DAYS);

    const rows=await prisma.stats.findMany({
        where: { editTimeUsers: null, date: { gte: oldestAllowed } },
        select: { id: true, date: true },
        orderBy: { date: 'asc' },
    });

    if (rows.length===0) {
        console.log('Nothing to update.');
        return;
    }

    const anchor=await prisma.stats.findFirst({
        where: {
            date: { lt: rows[0].date, gte: oldestAllowed },
            editTimeUsers: { not: null },
        },
        orderBy: { date: 'desc' },
        select: { editTimeUsers: true, date: true },
    });
    if (!anchor) {
        console.warn(
            `No populated anchor row in the last ${DAILY_RETENTION_DAYS} days.\n`+
            `Run with --bootstrap once to seed the cumulative count.`
        );
        return;
    }

    let cumulative=anchor.editTimeUsers;
    console.log(`Anchor: ${iso(anchor.date)} = ${cumulative}`);
    console.log(`Targeting ${rows.length} row(s)`);

    // Sum dailies from (anchor + 1) up to each null row, inclusive, in order.
    let cursor=addDays(anchor.date, 1);
    for (const row of rows) {
        // Cover any gap days between cursor and this row.
        while (cursor<row.date) {
            const r=await fetchUnits(token, 'DAILY', iso(cursor));
            if (r.status!=='ok') {
                console.warn(`${iso(cursor)}: ${r.status} — stopping`);
                return;
            }
            cumulative+=r.units;
            cursor=addDays(cursor, 1);
        }

        const r=await fetchUnits(token, 'DAILY', iso(row.date));
        if (r.status==='not_ready') {
            console.log(`${iso(row.date)}: report not ready — stopping (cron will retry)`);
            return;
        }
        if (r.status!=='ok') {
            console.warn(`${iso(row.date)}: ${r.status} — stopping`);
            return;
        }
        cumulative+=r.units;
        console.log(`${iso(row.date)}: +${r.units} → ${cumulative}${DRY_RUN ? ' (dry-run)' : ''}`);
        if (!DRY_RUN) {
            await prisma.stats.update({
                where: { id: row.id },
                data: { editTimeUsers: cumulative },
            });
        }
        cursor=addDays(row.date, 1);
    }
}

async function main() {
    for (const k of ['APP_STORE_CONNECT_ISSUER_ID','APP_STORE_CONNECT_API_KEY_ID','APP_STORE_CONNECT_KEY','APP_STORE_CONNECT_VENDOR_NUMBER']) {
        if (!process.env[k]) throw new Error(`Missing ${k} in .env`);
    }
    const token=makeToken();
    if (BOOTSTRAP) await bootstrap(token);
    else await incremental(token);
}

main()
    .catch(err=>{
        console.error(err);
        process.exitCode=1;
    })
    .finally(()=>prisma.$disconnect());
