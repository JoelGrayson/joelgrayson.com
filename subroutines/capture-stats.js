#!/usr/bin/env node

// Triggered by the GitHub Actions Workflow cronjob every morning

const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();

async function main() {
    console.log('Starting script');

    const timesToTry=10;
    let remainingAttempts=timesToTry;
    let pageVisits;
    try {
        pageVisits=await prisma.pageVisits.findMany({});
        if (!pageVisits) {
            throw new Error("Unable to fetch pageVisits");
        }
    } catch(err) {
        console.log('Error fetching pageVisits:', err);
        return;
    }

    while (remainingAttempts>0) {
        try {
            console.log(`Attempt ${timesToTry-remainingAttempts+1} of ${timesToTry}`);
            const res=await fetch(
                'https://joelgrayson.com/api/live-stats/without-diff',
                { cache: 'no-store' } //do not cache response
            );
            console.log('Before processing');
            const data=await res.json();
            data.pageVisits=pageVisits;
            
            console.log('Before prisma');
            await prisma.stats.create({ data });

            remainingAttempts=0;
            break;
        } catch (error) {
            console.warn('Error:', error);
            remainingAttempts--;
            await sleep(10);
        }
    }

    console.log('Success');
}

function sleep(seconds) {
    console.log('Sleeping for', seconds, 'seconds');
    return new Promise(resolve=>{
        setTimeout(resolve, seconds*1000);
    });
}

main();

