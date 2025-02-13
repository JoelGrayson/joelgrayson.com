'use server';

import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getProperties(url: string) {
    return axios.get(url)
        .then(response => {
            const $=cheerio.load(response.data)
            const title=$('title').first();
            const result={} as any;
            if (title) { //fill in value if not already there
                result.websiteTitle=title.text() || '';
            }

            // Website root title
            const metaOgSiteName=$('meta[property="og:site_name"]').attr('content');
            if (metaOgSiteName) {
                result.websiteRootTitle=metaOgSiteName || '';
            }
            
            return result;
        });
}

