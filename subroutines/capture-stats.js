const PrismaClient=require('@prisma/client').PrismaClient;

const prisma=new PrismaClient();

async function main() {
    const result=await new Promise((res, rej)=>{
        fetch('https://joelgrayson.com/api/live-stats')
            .then(x=>x.json())
            .then(res)
    });
    const { focusUsers, homeworkCheckerUsers, buserooSearches, shirtocracyVisits, journalUsers, projectsUsers, habitUsers, numbersUsers, blogViews, buserooUsers, shanghaiDictionarySearches }=result;

    await prisma.stats.create({
        data: {
            date: new Date(),

            focusUsers,
            homeworkCheckerUsers,
            buserooSearches,
            shirtocracyVisits,
            journalUsers,
            projectsUsers,
            habitUsers,
            numbersUsers,

            blogViews,
            buserooUsers,
            shanghaiDictionarySearches
        }
    });
    // console.log('Stats captured:', result);
}

main();
