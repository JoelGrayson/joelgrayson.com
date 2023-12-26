const NodeCache=require('node-cache');
const cache=new NodeCache();

const middleware=duration=>(req, res, next)=>{
    const cacheKey=req.originalUrl; //each request URL gets its own cache key
    const cacheResponse=cache.get(cacheKey);
    
    if (cacheResponse && !req.query.no_cache) { // make sure no ?no_cache=true in the URL
        console.log('Cache hit');
        res.send(cacheResponse);
    } else {
        console.log('Cache miss');
        res.ogJson=res.json;
        res.json=body=>{
            res.ogJson(body);
            cache.set(cacheKey, body, duration);
        };
        next();
    }
};

module.exports=middleware(60*60*12); //cache lasts for half a day
