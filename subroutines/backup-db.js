#!/usr/bin/env node

// Run with `./backup-db.js`

const PrismaClient=require('@prisma/client').PrismaClient;
const prisma=new PrismaClient();
const fs=require('fs');

async function main() {
    const out={};
    for (const property of Object.keys(prisma)) {
        if (['$', '_'].includes(property[0])) continue; //special property

        // Properties are: user article comment stats pageVisits eventCounter library error contact lirongArtEmailList formSubmission
        out[property]=await prisma[property].findMany();
    }
    fs.writeFileSync(`backup-on-${new Date().toISOString().split('T')[0]}-at-${new Date().toISOString().split('T')[1].split('.')[0]}.json`, JSON.stringify(out, null, 2));
}

main();
