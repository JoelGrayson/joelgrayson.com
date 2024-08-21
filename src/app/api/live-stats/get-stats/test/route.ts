import { NextResponse } from "next/server";
import getLastWeeksStats from "../getLastWeeksStats";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    return NextResponse.json(await getLiveStats());
}

export async function getLiveStats() {
    // return await getDownloadLinkGeneratorVisits();
    // return await getBlogViews();
    return await getLastWeeksStats();
}

