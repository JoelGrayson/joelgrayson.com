import { NextResponse } from "next/server";

import getChromeExtensionUsers from "../get-stats/getChromeExtensionUsers";
import getBuserooSearches from "../get-stats/getBuserooSearches";
import getShirtocracyOrders from "../get-stats/getShirtocracyOrders";
import getJournalUsers from "../get-stats/getJournalUsers";
import getProjectsUsers from "../get-stats/getProjectsUsers";
import getHabitUsers from "../get-stats/getHabitUsers";
import getNumbersUsers from "../get-stats/getNumbersUsers";

import getBlogViews from "../get-stats/getBlogViews";
import getBuserooUsers from "../get-stats/getBuserooUsers";
import getShanghaiDictionarySearches from "../get-stats/getShanghaiDictionarySearches";
import getDownloadLinkGeneratorVisits from "../get-stats/getDownloadLinkGeneratorVisits";


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

        // Additional Not Displayed
        getBlogViews(),
        getBuserooUsers(),
        getShanghaiDictionarySearches(),
        getDownloadLinkGeneratorVisits(),
    ];

    const res=await Promise.all(promises);
    // console.log('res', res);

    const [{ focusUsers, homeworkCheckerUsers }, buserooSearches, shirtocracyOrders, journalUsers, projectsUsers, habitUsers, numbersUsers, blogViews, buserooUsers, shanghaiDictionarySearches, downloadLinkGeneratorVisits]=res;
    
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
    };
}

