import prisma from "@/data/prisma/client";
import { NextResponse } from "next/server";
import { getLiveStats } from "../live-stats/route";

export async function GET() {
    // Since it is fetched at 12:05am, find everything after 12:01am.
    const thisMorning=new Date();
    thisMorning.setHours(0);
    thisMorning.setMinutes(1);

    const yesterday=new Date(thisMorning.getDate()-20*60*60); //20 hours before midnight the day before
    
    const stats=await prisma.stats.findMany({
        orderBy: {
            date: 'desc'
        },
        where: {
            date: {
                gte: yesterday
            }
        },
        take: 1
    });
    if (!stats)
        return NextResponse.error();

    if (stats.length===0) { //not fetched
        console.warn('Stats not fetched yet. This should not happen.', stats);
        
        return NextResponse.json(
            await getLiveStats()
        );
    }

    const returning=stats[0];
    // Get the editTimeUsers from the last time it was updated
    const editTimeUsersStats=await prisma.stats.findFirst({
        orderBy: {
            date: 'desc'
        },
        where: {
            editTimeUsers: {
                not: null
            }
        },
        select: {
            editTimeUsers: true
        }
    });
    returning.editTimeUsers=editTimeUsersStats?.editTimeUsers || -4;
    return NextResponse.json(stats[0]);
}
