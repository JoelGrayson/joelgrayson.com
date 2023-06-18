const express=require('express');
const router=express.Router();
const puppeteer=require('puppeteer');

const getHCInstalls=createGetChromeExtensionStats('https://chrome.google.com/webstore/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj');
const getFocusInstalls=createGetChromeExtensionStats('https://chrome.google.com/webstore/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf');

router.get('/', async (req, res)=>{
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
            headless: 'new',
            executablePath: process.env.CHROMIUM_PATH || undefined, //Docker has its own chromium path
            args: [
                '--no-sandbox', //disable security feature of sandboxing chrome's processes. Gives more privileges to the program execution runtime.
                // '--disable-setuid-sandbox'
            ]
        });
        const page=await browser.newPage();
    
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('span[title$="users"]');
    
        const users=await page.evaluate(()=>{
            const usersEl=document.querySelector('span[title$="users"]');
            const usersText=usersEl.innerText;
            return parseInt(usersText.match(/(\d+) users/)?.[1] || '-1');
        });
        resolve(users);
        await page.close();
        await browser.close();
    });
}

