import prisma from "@/data/prisma/client";

// Gets stats from 7 days ago
export default async function getLastWeeksStats() {
    const lastWeek=new Date();
    lastWeek.setDate(lastWeek.getDate()-7);

    return await prisma.stats.findFirst({
        where: {
            date: {
                gte: lastWeek
            }
        },
        orderBy: {
            date: 'asc'
        }
    });
}
