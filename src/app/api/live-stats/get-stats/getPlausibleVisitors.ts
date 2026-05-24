import env from '@/helpers/env';

// All-time unique visitors for a site tracked by Plausible (plausible.io).
// Plausible's aggregate endpoint hits precomputed rollups, so a multi-year
// range costs the same as a 7-day range. Returns 0 if PLAUSIBLE_API_KEY is
// missing or the API request fails — the e-ink board just shows 0 in that case.
export default async function getPlausibleVisitors(siteId: string): Promise<number> {
    if (!env.PLAUSIBLE_API_KEY) {
        console.warn(`PLAUSIBLE_API_KEY not set; ${siteId} visitors=0`);
        return 0;
    }

    try {
        const today = new Date().toISOString().slice(0, 10);
        const url = `https://plausible.io/api/v1/stats/aggregate`
            + `?site_id=${encodeURIComponent(siteId)}`
            + `&period=custom&date=2020-01-01,${today}`
            + `&metrics=visitors`;

        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${env.PLAUSIBLE_API_KEY}` },
        });

        if (!res.ok) {
            console.warn(`Plausible Stats API failed for ${siteId}: ${res.status} ${await res.text()}`);
            return 0;
        }

        const json = await res.json();
        return json.results?.visitors?.value ?? 0;
    } catch (err) {
        console.error(`getPlausibleVisitors(${siteId}) failed:`, err);
        return 0;
    }
}
