'use server';

import axios from 'axios';
import * as cheerio from 'cheerio';
import https from 'https';

export async function getProperties(url: string) {
    return axios.get(url, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
        .then(response => {
            const $=cheerio.load(response.data)
            const title=$('title').first();
            const result={} as any;
            if (title) { //fill in value if not already there
                result.websiteTitle=title.text().trim() || '';
            }

            // Website root title
            const metaOgSiteName=$('meta[property="og:site_name"]').attr('content');
            if (metaOgSiteName) {
                result.websiteRootTitle=metaOgSiteName.trim() || '';
            }
            
            return result;
        });
}

