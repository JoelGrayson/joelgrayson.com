import prisma from "@/data/prisma/client";

// Edit Time
export default async function getStatsFromPrisma() {
    return await prisma.stats.findFirst({
        select: {
            editTimeUsers: true
        },
        orderBy: {
            date: 'desc'
        },
        where: {
            editTimeUsers: {
                not: null
            }
        }
    });
}

