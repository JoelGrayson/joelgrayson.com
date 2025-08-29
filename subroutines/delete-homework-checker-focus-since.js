const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();
const fs=require('fs');
const { default: jdate, toDate } = require('joeldate');
const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a date (YYYY-MM-DD) after which the HW Checker & Focus entries (which were autopopulated since then) will be deleted\n> ', rawDate=>{
    const date=new Date(rawDate);
    rl.close();

    if (isNaN(date.getTime())) return console.log('Not a valid date. Exiting.');

    deleteAfter(date);
});

async function deleteAfter(date) {
    const needToUpdate=await prisma.stats.findMany({
        where: { date: { gt: date } }, //only update not already included
        select: {
            id: true,
            date: true
        }
    });
    for (let entry of needToUpdate) {
        const id=entry.id;
        console.log('Updating', entry.date);
        await prisma.stats.update({
            where: {
                id
            },
            data: {
                homeworkCheckerUsers: null,
                focusUsers: null
            }
        });
    }
}

