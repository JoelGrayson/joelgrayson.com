const express=require('express');
const router=express.Router();
const cacheMiddleware=require('../../utils/cache');
const { Client }=require('pg');
require('dotenv').config({ path: '../../.env' });

router.get('/', cacheMiddleware, async (req, res)=>{
    const [hCInstalls, focusInstalls]=await Promise.all([
        getHCInstalls,
        getFocusInstalls
    ]);
    return res.json({ hCInstalls, focusInstalls });
});

module.exports=router;

