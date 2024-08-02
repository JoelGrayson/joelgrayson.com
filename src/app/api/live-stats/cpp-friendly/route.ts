import getBuserooSearches from "../get-stats/getBuserooSearches";
import getShirtocracyOrders from "../get-stats/getShirtocracyOrders";
import getJournalUsers from "../get-stats/getJournalUsers";
import getNumbersUsers from "../get-stats/getNumbersUsers";
import getHabitUsers from "../get-stats/getHabitUsers";
import getProjectsUsers from "../get-stats/getProjectsUsers";
import getHomeworkCheckerUsers from "../get-stats/getHomeworkCheckerUsers";
import getFocusUsers from "../get-stats/getFocusUsers";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    const promises=[
        getFocusUsers(),
        getHomeworkCheckerUsers(),
        getBuserooSearches(),
        getShirtocracyOrders(),
        getJournalUsers(),
        getProjectsUsers(),
        getHabitUsers(),
        getNumbersUsers(),

        // Additional Not Displayed
        // getBlogViews(),
        // getBuserooUsers(),
        // getShanghaiDictionarySearches()
    ];

    const result=await Promise.all(promises);
    // [focusUsers, homeworkCheckerUsers, buserooSearches, shirtocracyVisits, journalUsers, projectsUsers, habitUsers, numbersUsers]

    return new Response(result.join(' '));
}
