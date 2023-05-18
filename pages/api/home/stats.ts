import puppeteer from 'puppeteer';

const getHCInstalls=createGetChromeExtensionStats('https://chrome.google.com/webstore/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj');
const getFocusInstalls=createGetChromeExtensionStats('https://chrome.google.com/webstore/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf');

export default async function ApiHandler(req: any, res: any) {
    const [hCInstalls, focusInstalls]=await Promise.all([
        getHCInstalls(),
        getFocusInstalls()
    ]);
    res.json({ hCInstalls, focusInstalls });
}

function createGetChromeExtensionStats(url: string) {
    return ()=>{
        return new Promise(async (resolve)=>{
            const browser=await puppeteer.launch({ headless: 'new' });
            const page=await browser.newPage();
        
            await page.goto(url, { waitUntil: 'domcontentloaded' });
            await page.waitForSelector('span[title$="users"]');
            await page.screenshot({ path: './screenshot.png' });
        
            const users=await page.evaluate(()=>{
                const usersEl=document.querySelector('span[title$="users"]') as HTMLSpanElement;
                const usersText=usersEl.innerText;
                return parseInt(usersText.match(/(\d+) users/)?.[1] || '-1');
            });
            resolve(users);
            await page.close();
            await browser.close();
        });
    };
}
