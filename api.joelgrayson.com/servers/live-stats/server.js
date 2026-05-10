// ABOUT: this API endpoint will get the live stats for Chrome extension user counts. However, tihs endpoint is not actually used for anything since the crontab saves this to prisma.

// Necessary in api.joelgrayson.com because it uses puppeteer

const express=require('express');
const router=express.Router();
const cacheMiddleware=require('../../utils/cache');
const puppeteer=require('puppeteer');

// router.get('/', cacheMiddleware, async (req, res)=>{ //no need to cache it since this is /live-stats. Anything cached would be done with prisma
router.get('/', async (req, res)=>{
    return res.json(await getHCAndFocusInstalls());
});

module.exports={ router, getHCAndFocusInstalls };

async function getHCAndFocusInstalls() {
    const getHCInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj');
    const getFocusInstalls=createGetChromeExtensionStats('https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf');

    const [hCInstalls, focusInstalls]=await Promise.all([
        getHCInstalls,
        getFocusInstalls
    ]);

    return { hCInstalls, focusInstalls };
}


// Helpers
const USER_COUNT_SELECTORS=['div.F9iKBc', 'span[title$="users"]'];

function createGetChromeExtensionStats(url) {
    return new Promise(async resolve=>{
        console.log('Getting chrome extension stats v1.1');

        let browser;
        try {
            console.log('Creating browser');
            browser=await puppeteer.launch({
                args: ['--no-sandbox'],
                timeout: 50_000
            });
        } catch (err) {
            console.warn('Could not create browser:', err?.message || err);
            return resolve({ status: 'error', step: 'browser.launch', message: err?.message || String(err) });
        }

        let page;
        try {
            console.log('Creating the new page');
            page=await browser.newPage();
        } catch (err) {
            console.warn('Could not create page:', err?.message || err);
            await safeClose(browser);
            return resolve({ status: 'error', step: 'browser.newPage', message: err?.message || String(err) });
        }

        try {
            console.log('Going to url', url);
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
        } catch (err) {
            console.warn('page.goto failed:', err?.message || err);
            await safeClose(page);
            await safeClose(browser);
            return resolve({ status: 'error', step: 'page.goto', message: err?.message || String(err) });
        }

        let matchedSelector;
        for (const sel of USER_COUNT_SELECTORS) {
            try {
                await page.waitForSelector(sel, { timeout: 15_000 });
                matchedSelector=sel;
                break;
            } catch {
                // try next selector
            }
        }
        if (!matchedSelector) {
            console.warn('User count selector not found on', url);
            await safeClose(page);
            await safeClose(browser);
            return resolve({ status: 'error', step: 'waitForSelector', message: 'User count element not found. Chrome Web Store DOM may have changed.' });
        }

        let users;
        try {
            console.log('Evaluating page with selector', matchedSelector);
            users=await page.evaluate((selector)=>{
                const usersEl=document.querySelector(selector);
                if (!usersEl) return null;
                const usersText=usersEl.innerText || '';
                const match=usersText.match(/([\d,]+)\s*users/);
                if (!match) return null;
                const n=parseInt(match[1].split(',').join(''), 10);
                return Number.isFinite(n) ? n : null;
            }, matchedSelector);
        } catch (err) {
            console.warn('page.evaluate failed:', err?.message || err);
        }

        await safeClose(page);
        await safeClose(browser);

        if (typeof users==='number' && users>=0)
            resolve(users);
        else
            resolve({ status: 'error', step: 'parse', message: 'User count parsed as null or invalid.' });
    });
}

async function safeClose(handle) {
    try { await handle?.close?.(); } catch {}
}

