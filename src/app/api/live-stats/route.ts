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
import getLastWeeksStats from "./get-stats/getLastWeeksStats";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    return NextResponse.json(await getLiveStats());
}

export async function getLiveStats() {
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
        getShanghaiDictionarySearches(),
        getLastWeeksStats()
    ];

    const [focusUsers, homeworkCheckerUsers, buserooSearches, shirtocracyOrders, journalUsers, projectsUsers, habitUsers, numbersUsers, blogViews, buserooUsers, shanghaiDictionarySearches, lastWeeksStats]=await Promise.all(promises);

    return {
        focusUsers,
        homeworkCheckerUsers,
        buserooSearches,
        shirtocracyOrders,
        journalUsers,
        projectsUsers,
        habitUsers,
        numbersUsers,
        blogViews,
        buserooUsers,
        shanghaiDictionarySearches,

        diff: {
            focusUsers: focusUsers-lastWeeksStats.focusUsers,
            homeworkCheckerUsers: homeworkCheckerUsers-lastWeeksStats.homeworkCheckerUsers,
            buserooSearches: buserooSearches-lastWeeksStats.buserooSearches,
            shirtocracyOrders: shirtocracyOrders-lastWeeksStats.shirtocracyOrders,
            journalUsers: journalUsers-lastWeeksStats.journalUsers,
            projectsUsers: projectsUsers-lastWeeksStats.projectsUsers,
            habitUsers: habitUsers-lastWeeksStats.habitUsers,
            numbersUsers: numbersUsers-lastWeeksStats.numbersUsers,
            blogViews: blogViews-lastWeeksStats.blogViews,
            buserooUsers: buserooUsers-lastWeeksStats.buserooUsers,
            shanghaiDictionarySearches: shanghaiDictionarySearches-lastWeeksStats.shanghaiDictionarySearches
        }
    };
}

