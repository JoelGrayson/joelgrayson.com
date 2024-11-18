#!/usr/bin/env node

// 1. Go to https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/djnloioaddlnmagobbcnjpppmbelfocf/analytics/users
// 2. Set the date range to the greatest (last 5 years)
// 3. Click "Export to CSV" under Weekly users over time
// 4. Rename the file to ~/Downloads/focus-installs.csv
// 5. Run this program with `./update-focus-installs.js`

const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();
const fs=require('fs');
const { default: jdate } = require('joeldate');

const updateAll=false; // Like --force

async function main() {
    // Get Focus installs data from the CSV file
    const fileContents=fs.readFileSync('/Users/joelgrayson/Downloads/focus-installs.csv', 'utf8');
    const lines=fileContents.split('\n')
        .slice(3); //remove the metadata at the top of files
    // Date,Total Downloads

    const data={}; //jdate -> totalDownloads
    for (let line of lines) {
        if (!line) continue;
        let [dateStr, usersStr]=line.split(',');
        const date=new Date(dateStr);
        const users=parseInt(usersStr);
        const jdateStr=jdate(date);
        if (!date || !jdateStr || jdateStr=='NaN.NaN.NaN') {
            console.log('Invalid date with dateStr', dateStr, 'for line', line);
            continue;
        }
        data[jdateStr]=users;
    }

    // Update in prisma
    const needToUpdate=await prisma.stats.findMany({
        where: updateAll
            ? undefined
            : { focusUsers: null }, //only update not already included
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
                    focusUsers: data[date]
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
