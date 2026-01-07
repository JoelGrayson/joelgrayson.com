import env from '@/helpers/env';
import jwt from 'jsonwebtoken';
import { gunzipSync } from 'zlib';

async function fetchSalesReport(token: string, frequency: 'YEARLY' | 'MONTHLY' | 'DAILY', reportDate: string) {
    const url = new URL('https://api.appstoreconnect.apple.com/v1/salesReports');
    url.searchParams.append('filter[frequency]', frequency)
    url.searchParams.append('filter[reportDate]', reportDate)
    url.searchParams.append('filter[reportSubType]', 'SUMMARY')
    url.searchParams.append('filter[reportType]', 'SALES')
    url.searchParams.append('filter[vendorNumber]', env.APP_STORE_CONNECT_VENDOR_NUMBER)

    const response = await fetch(url.href, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    // Sales Reports API returns gzip-compressed TSV data
    const compressedData = await response.arrayBuffer();
    const decompressed = gunzipSync(Buffer.from(compressedData));
    const tsvData = decompressed.toString('utf-8');

    // Parse TSV data into an array of objects
    const lines = tsvData.trim().split('\n');
    const headers = lines[0].split('\t');
    const records = lines.slice(1).map(line => {
        const values = line.split('\t');
        const record: Record<string, string> = {};
        headers.forEach((header, index) => {
            record[header] = values[index];
        });
        return record;
    });

    return records;
}

async function fetch2026Data(token: string) {
    // Fetch all available days in 2026 so far
    const today = new Date();
    const startOfYear = new Date('2026-01-01');
    const daysSinceStart = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));

    const dayPromises = [];

    for (let dayOffset = 0; dayOffset < daysSinceStart; dayOffset++) {
        const date = new Date(startOfYear);
        date.setDate(date.getDate() + dayOffset);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        dayPromises.push(fetchSalesReport(token, 'DAILY', dateStr));
    }

    const dailyRecords = await Promise.all(dayPromises);
    return dailyRecords.flat();
}

export default async function getEditTimeSales() {
    let now = Math.round(new Date().getTime() / 1000);
    let expiresAt = now + 60 * 19;

    const payload = {
        iss: env.APP_STORE_CONNECT_ISSUER_ID,
        iat: now,
        exp: expiresAt,
        aud: 'appstoreconnect-v1',
        bid: 'com.joelgrayson.Edit-Time' //bundle id
    };

    const signInOptions = {
        "algorithm": "ES256" as const, // you must use this algorythm, not jsonwebtoken's default
        header : {
            "alg": "ES256",
            "kid": env.APP_STORE_CONNECT_API_KEY_ID,
            "typ": "JWT"
        }
    }

    const privateKey = env.APP_STORE_CONNECT_KEY.replaceAll('$', '\n');
    const token = jwt.sign(payload, privateKey, signInOptions);

    // Fetch data for 2024, 2025, and 2026 to get all-time stats
    const [records2024, records2025, records2026] = await Promise.all([
        fetchSalesReport(token, 'YEARLY', '2024'),
        fetchSalesReport(token, 'YEARLY', '2025'),
        fetch2026Data(token) // 2026 isn't complete yet, so fetch monthly data
    ]);

    const records = [...records2024, ...records2025, ...records2026];
    console.log(`Total records fetched: ${records.length}`);

    // Calculate total downloads for Edit Time (free app downloads only)
    const editTimeDownloads = records
        .filter(record =>
            record.SKU === 'com.joelgrayson.Edit-Time' &&
            (record['Product Type Identifier'] === 'F1' )//|| record['Product Type Identifier'] === 'F7')
        )
        .reduce((total, record) => total + parseInt(record.Units || '0'), 0);

    // Calculate total Pro subscriptions
    const proSubscriptions = records
        .filter(record => record.SKU === 'com.joelgrayson.edittime.edittimepro_11_8_2024')
        .reduce((total, record) => total + parseInt(record.Units || '0'), 0);

    return {
        editTimeDownloads,
        // totalProSubscriptions: proSubscriptions,
        // rawData: records
    };
}

