import { getLiveStats } from "../route";

// Opt out of caching
export const dynamic='force-dynamic';
export const revalidate=0;

// For the Joelesque Empire Board (ESP32). Returns "id=value,diff" lines so the
// C++ side can parse each project's current value and 7-day delta by id rather
// than relying on positional ordering. -4 in the diff slot means "no week-ago
// snapshot exists for this project" — the board hides the diff in that case.

const NO_DIFF = -4;

export async function GET() {
    const data = await getLiveStats();

    const stats: Record<string, [number, number]> = {
        edittime:              [data.editTimeDownloads ?? data.editTimeUsers ?? 0, data.diff.editTimeDownloads ?? NO_DIFF],
        homeworkchecker:       [data.homeworkCheckerUsers ?? 0,                    data.diff.homeworkCheckerUsers ?? NO_DIFF],
        focusforgoogledocs:    [data.focusUsers ?? 0,                              data.diff.focusUsers ?? NO_DIFF],
        buseroo:               [data.buserooSearches ?? 0,                         data.diff.buserooSearches ?? NO_DIFF],
        shanghaidictionary:    [data.shanghaiDictionarySearches ?? 0,              NO_DIFF],

        wasian:                [data.wasianVisitors ?? 0,                          NO_DIFF],
        bookshelf:             [0,                                                 NO_DIFF],
        simplehealth:          [0,                                                 NO_DIFF],
        morsebench:            [0,                                                 NO_DIFF],
        techmap:               [0,                                                 NO_DIFF],
        shirtocracy:           [data.shirtocracyOrders ?? 0,                       data.diff.shirtocracyOrders ?? NO_DIFF],
        memorizethepresidents: [data.memorizeThePresidentsVisitors ?? 0,           NO_DIFF],
    };

    const body = Object.entries(stats)
        .map(([key, [value, diff]]) => `${key}=${value},${diff}`)
        .join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
