const {permanent, temporary}=require('./redirects');
const process=require('./process/process');

module.exports=()=>{ //returns function to get redirect objects for next.config.js
    const arr1=process(permanent, true);
    const arr2=process(temporary, false);

    const merged=[ ...arr1, ...arr2 ];
    return merged;
};