// Opt out of caching
export const dynamic='force-dynamic';

export async function GET() {
    const res=await fetch('https://joelgrayson.com/api/live-stats');
    const data=await res.json();
    
    const items=[
        data.focusUsers,
        data.homeworkCheckerUsers,
        data.buserooSearches,
        data.shirtocracyOrders,
        data.journalUsers,
        data.projectsUsers,
        data.habitUsers,
        data.numbersUsers,

        data.diff.focusUsers,
        data.diff.homeworkCheckerUsers,
        data.diff.buserooSearches,
        data.diff.shirtocracyOrders,
        data.diff.journalUsers,
        data.diff.projectsUsers,
        data.diff.habitUsers,
        data.diff.numbersUser
    ];
    
    return new Response(items.join(' '));
}
