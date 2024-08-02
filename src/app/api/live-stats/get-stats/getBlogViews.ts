import prisma from "@/data/prisma/client";

export default async function getBlogViews() {
    return (await prisma.article.aggregate({
        _sum: {
            views: true
        }
    }))._sum.views;
}
