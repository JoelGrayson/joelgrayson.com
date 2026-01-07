import env from '@/helpers/env';
import jwt from 'jsonwebtoken';

export default async function getEditTimeSales() {
    let now = Math.round(new Date().getTime() / 1000);
    let expiresAt = now + 60 * 19;

    const payload = {
        iss: env.APP_STORE_CONNECT_ISSUER_ID,
        iat: now,
        exp: expiresAt,
        aud: 'appstoreconnect-v1',
        // bid: 'com.joelgrayson.Edit-Time' //bundle id
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
    console.log('pk', privateKey);
    
    const token = jwt.sign(payload, privateKey, signInOptions);

    const response = await fetch('https://api.appstoreconnect.apple.com/v1/apps', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);


    return {
        editTimeSales: data
    };
}

