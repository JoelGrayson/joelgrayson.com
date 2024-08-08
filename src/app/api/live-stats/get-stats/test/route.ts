import { NextResponse } from "next/server";
import getDownloadLinkGeneratorVisits from "../getDownloadLinkGeneratorVisits";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    return NextResponse.json(await getLiveStats());
}

export async function getLiveStats() {
    const downloadLinkGeneratorVisits=await getDownloadLinkGeneratorVisits();

    return downloadLinkGeneratorVisits;
}

