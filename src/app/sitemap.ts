import { toDate } from 'joeldate';
import { MetadataRoute } from 'next';
import { articles as blogArticles } from '@/data/blog';
type changeFrequency= "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" | undefined;
type CustomEntry=[string, number, changeFrequency?, Date?];

export default function sitemap(): MetadataRoute.Sitemap {
    /* Priority
        1.0–0.8 = Category pages, homepage, top landing pages
        0.7–0.4 = Blog articles, secondary category pages, subcategory pages
        0.3–0.0 = Pages that are not as important like outdated content or utility-type pages
    */
    const entries: (MetadataRoute.Sitemap[number] | CustomEntry)[]=[
        // {
        //     url: '/',
        //     changeFrequency: 'monthly',
        //     priority: 1,
        // },
        ['/', 1, 'monthly'],
        ['/learn', 1],
            ['/learn/pi', .7],
            ['/learn/physics', .5],
            ['/learn/tips', .4],
            ['/learn/docker', .4],
            ['/learn/daylight-saving-time', .4],
            ['/learn/using-tokens-to-push-to-github', .4],
            ['/learn/css-grid', .4],
            ['/learn/plausible-analytics-with-nextjs', .5],
        ['/sites', .9],
        ['/impact', .8],
        ['/font', .7],
        ['/music', .7],
        ['/combating-climate-change', 1, 'daily'],
        ['/art', .7],
        ['/stats', .7],
        ['/blog', 1, 'weekly'],
            ...blogArticles.map(blogArticle=>[`/blog/${blogArticle.hyphenatedTitle}`, .6, 'weekly', blogArticle.date] as CustomEntry),
        ['/verify', .8],
        ['/student-government', .7],
        ['/software', .7],
            // TODO: software/:slug
        ['/slaphappy', .7],
        ['/research', .8],
            // TODO: research/:slug
        ['/quotes', .6],
        ['/record', .7],
        ['/patriotism', .6],
        // No ['/memorized', .7],
        ['/nyc', .9],
            ['/nyc/nyc-government', .9],
            ['/nyc/nyc-government/nyc-budget', .7],
        ['/maths', .8],
            ['/maths/crustless-pizza', .7],
            ['/maths/icosahedron-navigation', .7],
            ['/maths/reforming-maths', .7],
            ['/maths/joels-sas-formula/index.html', .7],
        ['/memes', .7],
        ['/connecting-street-vendors-to-the-grid', .8],
        ['/contact', .7],
        // No ['/dashboard', .7],
        ['/machines', .7],
        // No ['/plan', .7],
        ['/resume', .7],
        ['/@jcomponents', .8],


        // Public
        // TODO: ['/image/']
        // TODO: ['/styles']
        ['/maths/crustless-pizza/Crustless Pizza Pieces Recurrence Problem.pdf', .6, 'never'],
        ['/maths/icosahedron-navigation/Icosahedron Navigation.pdf', .6, 'never'],
        ['/research/organic-optoelectronics/Twisting Charge Transfer Complex Crystals for Organic Optoelectronics Paper.pdf', .6, 'never'],
        ['/research/organic-optoelectronics/Poster.pdf', .6, 'never'],
        ['/research/organic-optoelectronics/Joel in the Lab.jpg', .6, 'never'],
        ['/research/how-do-cultures-combine/How Cultures Combine in Mixed-Race Families.pdf', .6, 'never'],
        // TODO: /software, /ccc, /fisher/, /nyc/ chess/ ... images
    ];

    return entries.map(item=>{
        if (Array.isArray(item))
            item={
                url: item[0],
                priority: item[1],
                changeFrequency: item[2] || undefined,
                lastModified: item[3] || undefined
            };

        let url=item.url;
        if (!url.startsWith('https://') && !url.startsWith('joelgrayson.com')) {
            if (url.startsWith('/'))
                url='https://joelgrayson.com'+url;
            else
                url='https://joelgrayson.com/'+url;
        }
        return {
            ...item,
            url,
            lastModified: toDate(item.lastModified) || new Date(),
            changeFrequency: 'weekly'
        };
    });
}
