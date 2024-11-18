import prisma from "@/data/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const stats=await prisma.stats.findMany({
        orderBy: {
            date: 'asc'
        }
    });

    if (!stats)
        return NextResponse.error();

    return NextResponse.json(stats);
}
