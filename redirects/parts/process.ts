import { nextRedirects, redirects, src, dest, nextRedirect } from "./types";

export default function process(input: redirects, isPermanent: boolean) {
    const output: nextRedirects=[];

    Object.entries(input).forEach(([key, val])=>{
        if (val instanceof Array)
            for (let singleVal of val) //val is an array of singleVals
                output.push(packageIntoObj(key, singleVal, isPermanent))
        else
            output.push(packageIntoObj(key, val, isPermanent));
    });

    return output;
}

function packageIntoObj(key: dest, val: src, isPermanent: boolean): nextRedirect | null { //converts key and value -> obj for redirect
    if (typeof val==='string')
        return { //key is the destination, value is the src so it can be an array, regex, etc.
            source: val,
            destination: key,
            permanent: isPermanent
        };
    else if (val instanceof RegExp)
        return {
            source: val,
            destination: key,
            permanent: isPermanent
        };
    else
        throw new TypeError('Value must be a string, regex, or array');
        return null
}
