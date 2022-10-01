import { nextRedirects, redirects, src, dest, nextRedirect } from "./types";

export default function processRedirects(input: redirects, isPermanent: boolean) {
    const output: nextRedirects=[];

    Object.entries(input).forEach(([key, val])=>{
        if (val instanceof Array)
            val.forEach(singleVal=>{ //val is an array of singleVals
                const packaged=packageIntoObj(key, singleVal, isPermanent)
                if (packaged)
                    output.push(packaged)
            })
        else {
            const packaged=packageIntoObj(key, val, isPermanent);
            if (packaged)
                output.push(packaged);
        }   
    });

    return output;
}

function packageIntoObj(key: dest, val: src, isPermanent: boolean): nextRedirect { //converts key and value -> obj for redirect
    if (val instanceof RegExp) { //Process RegExp into string
        val=`${val}`.slice(0, -1); // Remove first and last char: /regex/ -> regex
    }
    
    return { //key is the destination, value is the src so it can be an array, regex as string, etc.
        source: val+'',
        destination: key,
        permanent: isPermanent
    };
}
