import { nextRedirects, redirects, src, dest, nextRedirect } from "./types";
import { permanent, temporary } from '../REDIRECTS';

export default function redirects() { //returns function to get redirect objects for next.config.js. Only async ∵ next.js documentation requires async functions for redirect value
    // Combine redirects
    const arr1=processRedirects(permanent, true);
    const arr2=processRedirects(temporary, false);

    return arr1.concat(arr2); //return merged permanent & temporary arrays
}

export function processRedirects(input: redirects, isPermanent: boolean) {
    const output: nextRedirects=[];

    Object.entries(input).forEach(([key, val])=>{
        if (val instanceof Array)
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


function packageIntoObj(key: dest, val: src, isPermanent: boolean): nextRedirect { //converts key and value -> obj for redirect
    if (val instanceof RegExp) //Process RegExp into string
        val=`${val}`.slice(0, -1); // Remove first and last char: /regex/ -> regex

    let i=0;
    const replaceStars=val=>val
        .trim()
        .split('/')
        .map(path=>path==='*' ? `slug${++i}` : path)
        .join('/');

    if (Array.isArray(val))
        val.map(replaceStars);
    else
        val=replaceStars(val);
    
    return { //key is the destination, value is the src so it can be an array, regex as string, etc.
        source: val+'',
        destination: key,
        permanent: isPermanent
    };
}

