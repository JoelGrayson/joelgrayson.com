import { permanent, temporary } from './REDIRECTS';
import processRedirects from './parts/processRedirects';

export default async function() { //returns function to get redirect objects for next.config.js. Only async ∵ next.js documentation requires async functions for redirect value
    const arr1=processRedirects(permanent, true);
    const arr2=processRedirects(temporary, false);

    return arr1.concat(arr2); //return merged permanent & temporary arrays
}
