// ABOUT: this API endpoint will get the live stats for Chrome extension user counts. However, tihs endpoint is not actually used for anything since the crontab saves this to prisma.

// Necessary in api.joelgrayson.com because it uses puppeteer

const express=require('express');
const router=express.Router();
const cacheMiddleware=require('../../utils/cache');
const puppeteer=require('puppeteer');

const getHCInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj');
const getFocusInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf');

// router.get('/', cacheMiddleware, async (req, res)=>{ //no need to cache it since this is /live-stats. Anything cached would be done with prisma
router.get('/', async (req, res)=>{
    return res.json(await getHCAndFocusInstalls());
});

module.exports={ router, getHCAndFocusInstalls };

async function getHCAndFocusInstalls() {
    const [hCInstalls, focusInstalls]=await Promise.all([
        getHCInstalls,
        getFocusInstalls
    ]);

    return { hCInstalls, focusInstalls };
}


// Helpers
function createGetChromeExtensionStats(url) {
    return new Promise(async resolve=>{
        const browser=await puppeteer.launch({
            // headless: 'new',
            args: [
                '--no-sandbox', //disable security feature of sandboxing chrome's processes. Gives more privileges to the program execution runtime.
                // '--disable-setuid-sandbox'
            ],
            timeout: 50000  //default: 30000
        });
        const page=await browser.newPage();
    
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded' });
        } catch (e) {
            console.error('Error in page.goto', e);
        }
        // await page.waitForSelector('div.F9iKBc');
    
        let users;
        try {
            users=await page.evaluate(()=>{
                const usersEl=document.querySelector('div.F9iKBc');
                const usersText=usersEl.innerText;
                return parseInt(usersText.match(/([\d,]+) users/)?.[1]?.split(',')?.join('') || '-1');

                // // Old Chrome Web Store GUI
                // const usersEl=document.querySelector('span[title$="users"]');
                // const usersText=usersEl.innerText;
                // return parseInt(usersText.match(/(\d+) users/)?.[1] || '-1');
            });
        } catch (e) {
            console.error('Error in page.evaluate', e);
        }
        await page.close();
        await browser.close();
        if (users)
            resolve(users);
        else
            resolve({ status: 'error', message: 'No users found, likely because page.evaluate failed.' });
    });
}

