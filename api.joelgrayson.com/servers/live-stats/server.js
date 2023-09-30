const express=require('express');
const router=express.Router();
const cacheMiddleware=require('../../utils/cache');
const puppeteer=require('puppeteer');

const getHCInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj');
const getFocusInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf');

router.get('/', cacheMiddleware, async (req, res)=>{
    const [hCInstalls, focusInstalls]=await Promise.all([
        getHCInstalls,
        getFocusInstalls
    ]);
    return res.json({ hCInstalls, focusInstalls });
});

module.exports=router;


// Helpers
function createGetChromeExtensionStats(url) {
    return new Promise(async resolve=>{
        const browser=await puppeteer.launch({
            // headless: 'new',
            args: [
                '--no-sandbox', //disable security feature of sandboxing chrome's processes. Gives more privileges to the program execution runtime.
                // '--disable-setuid-sandbox'
            ]
        });
        const page=await browser.newPage();
    
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        // await page.waitForSelector('div.F9iKBc');
    
        const users=await page.evaluate(()=>{
            const usersEl=document.querySelector('div.F9iKBc');
            const usersText=usersEl.innerText;
            return parseInt(usersText.match(/([\d,]+) users/)?.[1]?.split(',')?.join('') || '-1');

            // // Old Chrome Web Store GUI
            // const usersEl=document.querySelector('span[title$="users"]');
            // const usersText=usersEl.innerText;
            // return parseInt(usersText.match(/(\d+) users/)?.[1] || '-1');
        });
        await page.close();
        await browser.close();
        resolve(users);
    });
}

