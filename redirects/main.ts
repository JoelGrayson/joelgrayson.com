import { permanent, temporary } from './REDIRECTS';
import process from './parts/process';

module.exports=()=>{ //returns function to get redirect objects for next.config.js
    const arr1=process(permanent, true);
    const arr2=process(temporary, false);

    return arr1.concat(arr2); //return merged permanent & temporary arrays
};
