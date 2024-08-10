import getBlogViews from "./get-stats/getBlogViews";
import getShanghaiDictionarySearches from "./get-stats/getShanghaiDictionarySearches";
import getBuserooUsers from "./get-stats/getBuserooUsers";
import getBuserooSearches from "./get-stats/getBuserooSearches";
import getShirtocracyOrders from "./get-stats/getShirtocracyOrders";
import getJournalUsers from "./get-stats/getJournalUsers";
import getNumbersUsers from "./get-stats/getNumbersUsers";
import getHabitUsers from "./get-stats/getHabitUsers";
import getProjectsUsers from "./get-stats/getProjectsUsers";
import getChromeExtensionUsers from "./get-stats/getChromeExtensionUsers";
import { NextResponse } from "next/server";
import getLastWeeksStats from "./get-stats/getLastWeeksStats";
import getDownloadLinkGeneratorVisits from "./get-stats/getDownloadLinkGeneratorVisits";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    return NextResponse.json(await getLiveStats());
}

export async function getLiveStats() {
    const promises=[
        getChromeExtensionUsers(),
        getBuserooSearches(),
        getShirtocracyOrders(),
        getJournalUsers(), //TODO
        getProjectsUsers(), //TODO
        getHabitUsers(), //TODO
        getNumbersUsers(), //TODO
        getLastWeeksStats(),

        // Additional Not Displayed
        getBlogViews(),
        getBuserooUsers(),
        getShanghaiDictionarySearches(),
        getDownloadLinkGeneratorVisits(),
    ];

    const [{ focusUsers, homeworkCheckerUsers }, buserooSearches, shirtocracyOrders, journalUsers, projectsUsers, habitUsers, numbersUsers, lastWeeksStats, blogViews, buserooUsers, shanghaiDictionarySearches, downloadLinkGeneratorVisits]=await Promise.all(promises);

    return {
        focusUsers,
        homeworkCheckerUsers,
        buserooSearches,
        shirtocracyOrders,
        journalUsers,
        projectsUsers,
        habitUsers,
        numbersUsers,
        ...downloadLinkGeneratorVisits, //{"driveDownloadLinkGeneratorVisits":9933,"dropboxDownloadLinkGeneratorVisits":1590,"boxDownloadLinkGeneratorVisits":8394}

        blogViews,
        buserooUsers,
        shanghaiDictionarySearches,
        // driveDownloadLinkGeneratorVisits,
        // dropboxDownloadLinkGeneratorVisits,
        // boxDownloadLinkGeneratorVisits,
        
        diff: {
            focusUsers: focusUsers-lastWeeksStats.focusUsers,
            homeworkCheckerUsers: homeworkCheckerUsers-lastWeeksStats.homeworkCheckerUsers,
            buserooSearches: buserooSearches-lastWeeksStats.buserooSearches,
            shirtocracyOrders: shirtocracyOrders-lastWeeksStats.shirtocracyOrders,
            journalUsers: journalUsers-lastWeeksStats.journalUsers,
            projectsUsers: projectsUsers-lastWeeksStats.projectsUsers,
            habitUsers: habitUsers-lastWeeksStats.habitUsers,
            numbersUsers: numbersUsers-lastWeeksStats.numbersUsers,
        }
    };
}

