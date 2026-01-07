import env from '@/helpers/env';
import jwt from 'jsonwebtoken';
import { gunzipSync } from 'zlib';

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
    // console.log('pk', privateKey);
    
    const token = jwt.sign(payload, privateKey, signInOptions);


    // https://www.linkedin.com/pulse/using-apples-app-store-connect-api-darren-brooks/
    const url = new URL('https://api.appstoreconnect.apple.com/v1/salesReports');
    url.searchParams.append('filter[frequency]', 'YEARLY')
    url.searchParams.append('filter[reportDate]', '2024') // Get all data from 2024
    url.searchParams.append('filter[reportSubType]', 'SUMMARY')
    url.searchParams.append('filter[reportType]', 'SALES')
    url.searchParams.append('filter[vendorNumber]', env.APP_STORE_CONNECT_VENDOR_NUMBER)
    // console.log('url', url);
    const response = await fetch(url.href, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    // Sales Reports API returns gzip-compressed TSV data
    const compressedData = await response.arrayBuffer();
    const decompressed = gunzipSync(Buffer.from(compressedData));
    const tsvData = decompressed.toString('utf-8');
    console.log('TSV Data:', tsvData);

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
        totalDownloads: editTimeDownloads,
        totalProSubscriptions: proSubscriptions,
        rawData: records
    };
}

