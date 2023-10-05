const { glob }=require('glob');
const fs=require('fs');

async function getPagesURLs() {
    return (await glob('pages/**/*.{ts,tsx,js,jsx}', { ignore: ['pages/_*.tsx', 'pages/api/**/*'], cwd: __dirname }))
        .map(str=>str.match(/^pages\/(.*)\.(?:ts|tsx|js|jsx)$/)[1])
        .filter(str=>str.slice(3)!=='api')
        .map(str=>{
            if (str==='index') //exception for homepage
                return '';
            if (str.slice(-6)==='/index')
                return str.slice(0, -6);
            else
                return str;
        });
}

async function getPublicURLs() {
    const ignore=['/test-page.html'];
    // Get all html files and images
    return (await glob('public/**/*.{html,png,jpg,jpeg,webp,gif,svg,tif}'))
        .map(str=>str.slice(7))
        .filter(str=>!ignore.includes(str));
}

async function getXML() {
    const pages=(await getPagesURLs()).concat(await getPublicURLs());
    const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(str=>`    <url>
        <loc>https://joelgrayson.com/${str}</loc>
    </url>`).join('\n')}
</urlset>`;
    return xml;
}

async function main() {
    fs.writeFile('public/sitemap.xml', await getXML(), ()=>{});
}

main();
