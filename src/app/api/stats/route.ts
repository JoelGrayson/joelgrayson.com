import prisma from "@/data/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    // Since it is fetched at 12:05am, find everything after 12:01am.
    const thisMorning=new Date();
    thisMorning.setHours(0);
    thisMorning.setMinutes(1);

    const stats=await prisma.stats.findMany({
        orderBy: {
            date: 'desc'
        },
        where: {
            date: {
                gte: thisMorning
            }
        },
        take: 1
    });
    if (!stats)
        return NextResponse.error();

    if (stats.length===0) { //not fetched
        console.warn('Stats not fetched yet. This should not happen.');
        
        return NextResponse.json(
            await fetch('https://joelgrayson.com/api/live-stats').then(res=>res.json())
        );
    }

    
    return NextResponse.json(stats[0]);
}
