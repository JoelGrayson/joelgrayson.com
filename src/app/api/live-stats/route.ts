import getBlogViews from "./get-stats/getBlogViews";
import getShanghaiDictionarySearches from "./get-stats/getShanghaiDictionarySearches";
import getBuserooUsers from "./get-stats/getBuserooUsers";
import getBuserooSearches from "./get-stats/getBuserooSearches";
import getShirtocracyOrders from "./get-stats/getShirtocracyOrders";
import getJournalUsers from "./get-stats/getJournalUsers";
import getNumbersUsers from "./get-stats/getNumbersUsers";
import getHabitUsers from "./get-stats/getHabitUsers";
import getProjectsUsers from "./get-stats/getProjectsUsers";
import getHomeworkCheckerUsers from "./get-stats/getHomeworkCheckerUsers";
import getFocusUsers from "./get-stats/getFocusUsers";
import { NextResponse } from "next/server";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    const promises=[
        getFocusUsers(), //TODO
        getHomeworkCheckerUsers(), //TODO
        getBuserooSearches(),
        getShirtocracyOrders(),
        getJournalUsers(), //TODO
        getProjectsUsers(), //TODO
        getHabitUsers(), //TODO
        getNumbersUsers(), //TODO

        // Additional Not Displayed
        getBlogViews(),
        getBuserooUsers(),
        getShanghaiDictionarySearches()
    ];

    const [focusUsers, homeworkCheckerUsers, buserooSearches, shirtocracyVisits, journalUsers, projectsUsers, habitUsers, numbersUsers, blogViews, buserooUsers, shanghaiDictionarySearches]=await Promise.all(promises);

    return NextResponse.json({
        focusUsers,
        homeworkCheckerUsers,
        buserooSearches,
        shirtocracyVisits,
        journalUsers,
        projectsUsers,
        habitUsers,
        numbersUsers,
        blogViews,
        buserooUsers,
        shanghaiDictionarySearches
    });
}