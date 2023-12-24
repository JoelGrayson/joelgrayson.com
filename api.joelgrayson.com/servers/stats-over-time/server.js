const express=require('express');
const router=express.Router();
const cacheMiddleware=require('../../utils/cache');
const usePg=require('../../utils/usePg');

router.get('/', cacheMiddleware, async function StatsOverTime(req, res) {
    const queryRes=await usePg(client=>{
        return client.query(`
            SELECT "date", "homeworkCheckerInstalls", "focusInstalls", "blogViews", "shanghaiDictionarySearches"
            FROM "Stats";
        `);
    });
    res.json(queryRes.rows);
});

module.exports=router;

