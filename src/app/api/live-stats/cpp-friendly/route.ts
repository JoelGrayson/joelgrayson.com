import { getLiveStats } from "../route";

// Opt out of caching
export const dynamic='force-dynamic';
export const revalidate=0;

// This is for the Joelesque Empire Board since it cannot parse JSON easily

export async function GET() {
    // const res=await fetch('https://joelgrayson.com/api/live stats endpoint');
    // const data=await res.json();
    const data=await getLiveStats();
    
    const items=[
        data.focusUsers,
        data.homeworkCheckerUsers,
        data.buserooSearches,

        // data.shirtocracyOrders,
        data.editTimeUsers,

        data.journalUsers,
        data.projectsUsers,
        data.habitUsers,
        data.numbersUsers,
        
        // Diffs are based on the last 7 days
        data.diff.focusUsers,
        data.diff.homeworkCheckerUsers,
        data.diff.buserooSearches,
        data.diff.shirtocracyOrders,
        data.diff.journalUsers,
        data.diff.projectsUsers,
        data.diff.habitUsers,
        data.diff.numbersUsers,

        // Added on for backwards compatibility
        data.editTimeDownloads,
        data.diff.editTimeDownloads
    ];
    
    return new Response(items.join(' '));
}
