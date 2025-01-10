'use server';

import prisma from "@/data/prisma/client";

export async function loadData() {
    const stats=await prisma.stats.findMany({
        select: {
            date: true,
            editTimeUsers: true,
            homeworkCheckerUsers: true,
            focusUsers: true
        },
        orderBy: {
            date: 'asc'
        }
    });
    return stats;
}

export type Data={
    editTimeUsers: number | null;
    homeworkCheckerUsers: number | null;
    focusUsers: number | null;
    date: Date;
};

