// Authenticated write endpoint used by the joelgraysonvm droplet to push
// scraped Chrome Web Store user counts (and any future stats the cron
// can't compute on its own) into today's Stats row.
//
// Auth: Authorization: Bearer <STATS_INGEST_SECRET>
// Body: { focusUsers?: number, homeworkCheckerUsers?: number,
//         editTimeUsers?: number, editTimeRevenue?: number }
// Result: upserts today's (UTC) Stats row with the provided fields.

import crypto from 'crypto';
import * as z from 'zod';
import prisma from '@/data/prisma/client';

export const dynamic='force-dynamic';

const bodySchema=z.object({
    focusUsers: z.number().int().nonnegative().optional(),
    homeworkCheckerUsers: z.number().int().nonnegative().optional(),
    editTimeUsers: z.number().int().nonnegative().optional(),
    editTimeRevenue: z.number().int().nonnegative().optional(),
}).strict();

function checkAuth(req: Request): boolean {
    const expected=process.env.STATS_INGEST_SECRET;
    if (!expected) return false; // refuse to serve if not configured

    const header=req.headers.get('authorization')||'';
    const provided=header.startsWith('Bearer ') ? header.slice(7) : '';
    if (provided.length!==expected.length) return false;

    return crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}

function startOfTodayUtc(): Date {
    const now=new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

export async function POST(request: Request) {
    if (!checkAuth(request))
        return new Response('unauthorized', { status: 401 });

    let raw: unknown;
    try {
        raw=await request.json();
    } catch {
        return new Response('invalid json', { status: 400 });
    }

    const parsed=bodySchema.safeParse(raw);
    if (!parsed.success)
        return Response.json({ error: 'invalid body', issues: parsed.error.issues }, { status: 400 });

    const data=parsed.data;
    if (Object.keys(data).length===0)
        return new Response('empty body', { status: 400 });

    // Find today's row (capture-stats.js creates one at 00:05 UTC). If it
    // doesn't exist yet, create one — keeps the endpoint idempotent and
    // robust to capture-stats failures.
    const today=startOfTodayUtc();
    const tomorrow=new Date(today.getTime()+24*60*60*1000);

    const existing=await prisma.stats.findFirst({
        where: { date: { gte: today, lt: tomorrow } },
        orderBy: { date: 'desc' },
        select: { id: true },
    });

    const row=existing
        ? await prisma.stats.update({ where: { id: existing.id }, data })
        : await prisma.stats.create({ data: { ...data, date: new Date() } });

    return Response.json({
        ok: true,
        statsId: row.id,
        date: row.date,
        updated: Object.keys(data),
        created: !existing,
    });
}
