import prisma from "@/data/prisma/client";

export default async function getBlogViews() {
    return (await prisma.article.count({
        select: {
            views: true
        }
    })).views;
}