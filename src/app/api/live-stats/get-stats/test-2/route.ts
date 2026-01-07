import { NextResponse } from "next/server";
import getEditTimeSales from "../getEditTimeSales";

// Opt out of caching
export const dynamic='force-dynamic';
export async function GET() {
    return NextResponse.json(await getEditTimeSales());
}

