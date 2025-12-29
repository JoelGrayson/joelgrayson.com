#!/usr/bin/env node

import { PrismaClient } from '@prisma/client';
import { exit } from 'node:process';
import readline from 'node:readline';

const prisma=new PrismaClient();

const u_date = await askQuestion('After which date should we delete Homework Checker & Focus\' stats');
// const u_date = process.argv.at(-1);

const theDate = new Date(u_date);

if (isNaN(theDate.getTime())) {
    console.log('Invalid date');
    exit(1);
}


await prisma.stats.updateMany({
    where: {
        date: {
            gt: theDate
        }
    },
    data: {
        homeworkCheckerUsers: null,
        focusUsers: null
    }
});

// https://stackoverflow.com/questions/18193953/waiting-for-user-to-enter-input-in-node-js
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

