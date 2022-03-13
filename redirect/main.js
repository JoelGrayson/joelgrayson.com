const {permanent, temporary}=require('./redirects');
const process=require('./process/process');

module.exports=()=>{ //returns function to get redirect objects for next.config.js
    const obj1=process(permanent, true);
    const obj2=process(temporary, false);

    const merged={...obj1, ...obj2};
    return merged;
};