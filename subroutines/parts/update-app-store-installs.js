const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();
const fs=require('fs');
const { default: jdate, toDate } = require('joeldate');

let updateAll=false;
if (process.argv.includes('--force')) // --force sets updateAll to true
    updateAll=true;

async function main({ name, key }) {
    // Get data from the CSV file
    const fileContents=fs.readFileSync(`/Users/joelgrayson/Downloads/${name}-installs.csv`, 'utf8');
    const lines=fileContents.split('\n')
        .slice(5); //remove the metadata at the top of files
    // Date,Total Downloads

    const data={}; //jdate -> totalDownloads
    let totalDownloads=0;
    for (let line of lines) {
        const date=new Date(line.split(',')[0]);
        const downloadsOfThatDay=parseInt(line.split(',')[1]);
        totalDownloads+=downloadsOfThatDay;
        data[jdate(date)]={
            date,
            downloads: totalDownloads,
            covered: false
        };
    }
    

    if (updateAll) { // Delete all existing entries so they will be updated
        console.log('Deleting all entries');
        await prisma.stats.updateMany({
            data: { [key]: null }
        });
        console.log('Deleted all entries');
    }
    
    const needToUpdate=await prisma.stats.findMany({
        where: updateAll
            ? undefined
            : { [key]: null }, //only update not already included
        select: {
            id: true,
            date: true
        }
    });
    for (let entry of needToUpdate) {
        const id=entry.id;
        const date=jdate(entry.date);
        const newVal=data[date]?.downloads;
        if (newVal) {
            console.log('Updating', date)
            await prisma.stats.update({
                where: {
                    id
                },
                data: {
                    [key]: newVal
                }
            });
            data[date].covered=true;
        } else {
            console.warn('No data found for', date, 'in the CSV');
        }
    }
    
    if (updateAll) {
        for (let jdateKey of Object.keys(data).sort((a, b)=>new Date(toDate(a))-new Date(toDate(b)))) {
            const d=data[jdateKey];
            if (!d.downloads) continue; //ignore zero or null values
            if (!d.covered) {
                console.warn('No data found for', jdateKey, 'in the CSV. So creating it.');
                await prisma.stats.create({
                    data: {
                        date: d.date,
                        [key]: d.downloads
                    }
                });
            }
        }
    }
}

module.exports=main;