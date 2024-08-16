const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();

async function main() {
    const res=await fetch('https://joelgrayson.com/api/live-stats/without-diff')
    const data=await res.json();

    await prisma.stats.create({ data });
}

main();
