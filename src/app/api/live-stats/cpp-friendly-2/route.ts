import { getLiveStats } from "../route";

// Opt out of caching
export const dynamic='force-dynamic';
export const revalidate=0;

// For the Joelesque Empire Board (ESP32). Returns key=value lines so the C++
// side can parse each project's stats by id rather than relying on positional
// ordering. Projects without a backing data source return 0.

export async function GET() {
    const data=await getLiveStats();

    const stats: Record<string, number> = {
        shanghaidictionary: data.shanghaiDictionarySearches ?? 0,
        wasian: 0,
        bookshelf: 0,
        simplehealth: 0,
        morsebench: 0,

        edittime: data.editTimeDownloads ?? data.editTimeUsers ?? 0,

        shirtocracy: data.shirtocracyOrders ?? 0,
        venderoo: 0,

        memorizethepresidents: 0,
        focusforgoogledocs: data.focusUsers ?? 0,
        homeworkchecker: data.homeworkCheckerUsers ?? 0,

        buseroo: data.buserooSearches ?? 0,
    };

    const body = Object.entries(stats)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
