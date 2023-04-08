import { nextRedirects, redirects, src, dest, nextRedirect } from "./types";
import { permanent, temporary } from '../REDIRECTS';


// Step 1 (most granular)
function replaceStars(url: string) {
    let i=0;
    while (url.includes('*'))
        url=url.replace('*', `:slug${++i}`);
    return url;
}


// Step 2
function packageIntoObj(key: dest, val: src, isPermanent: boolean): nextRedirect { //converts key and value -> obj for redirect
    // Processing key
    key=replaceStars(key);
    
    // Processing val
    if (val instanceof RegExp) //Process RegExp into string
        val=`${val}`.slice(0, -1); // Remove first and last char: /regex/ -> regex

    if (Array.isArray(val))
        val.map(replaceStars);
    else
        val=replaceStars(val);
    
    // Construct
    return { //key is the destination, value is the src so it can be an array, regex as string, etc.
        source: val+'',
        destination: key,
        permanent: isPermanent
    };
}


// Step 3
function processRedirects(input: redirects, isPermanent: boolean) {
    const output: nextRedirects=[];
    
    Object.entries(input).forEach(([key, val])=>{
        if (Array.isArray(val))
            val.forEach(singleVal=>{ //val is an array of singleVals
                const packaged=packageIntoObj(key, singleVal, isPermanent);
                if (packaged)
                    output.push(packaged);
            });
        else {
            const packaged=packageIntoObj(key, val, isPermanent);
            if (packaged)
                output.push(packaged);
        }
    });

    return output;
}


// Step 4 (most general)
export default function getRedirects() { //returns function to get redirect objects for next.config.js. Only async ∵ next.js documentation requires async functions for redirect value
    // Combine redirects
    const arr1=processRedirects(permanent, true);
    const arr2=processRedirects(temporary, false);

    return arr1.concat(arr2); //return merged permanent & temporary arrays
}


process.stdout.write(JSON.stringify(getRedirects())); //no newline

