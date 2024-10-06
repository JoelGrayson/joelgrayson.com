// 1. Go to https://appstoreconnect.apple.com/analytics/app/ytd/6464405876/metrics?chartType=singleaxis&measureKey=totalDownloads&zoomType=day
// 2. Click on the "Download CSV" button
// 3. Rename the file to ~/Downloads/installs.csv
// 4. Run this program
const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();
const fs=require('fs');
const { default: jdate } = require('joeldate');

async function main() {
    // Get Edit Time data from the CSV file
    const fileContents=fs.readFileSync('/Users/joelgrayson/Downloads/installs.csv', 'utf8');
    const lines=fileContents.split('\n')
        .slice(5); //remove the metadata at the top of files
    // Date,Total Downloads

    const data={}; //jdate -> totalDownloads
    let totalDownloads=0;
    for (let line of lines) {
        const date=new Date(line.split(',')[0]);
        const downloadsOfThatDay=parseInt(line.split(',')[1]);
        totalDownloads+=downloadsOfThatDay;
        data[jdate(date)]=totalDownloads;
    }
    

    // Update in prisma
    const needToUpdate=await prisma.stats.findMany({
        where: {
            editTimeUsers: null
        },
        select: {
            id: true,
            date: true
        }
    });
    for (let entry of needToUpdate) {
        const id=entry.id;
        const date=jdate(entry.date);
        const newVal=data[date];
        if (newVal) {
            console.log('Updating', date)
            await prisma.stats.update({
                where: {
                    id
                },
                data: {
                    editTimeUsers: data[date]
                }
            });
        } else {
            console.warn('No data found for', date, 'in the CSV');
        }
    }
}

function sleep(seconds) {
    console.log('Sleeping for', seconds, 'seconds');
    return new Promise(resolve=>{
        setTimeout(resolve, seconds*1000);
    });
}

main();
