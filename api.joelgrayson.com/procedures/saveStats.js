const { v4: uuid }=require('uuid');
const usePg=require('../utils/usePg');
const { default: axios } = require('axios');

async function main() {
    const statistics=(await axios.get('https://joelgrayson.com/api/stats/all')).data;
    const { homeworkCheckerInstalls, focusInstalls, blogViews, shanghaiDictionarySearches }=statistics;

    await usePg(async client=>{
        const queryRes=await client.query(`
            INSERT INTO "Stats" ("id", "date", "homeworkCheckerInstalls", "focusInstalls", "blogViews", "shanghaiDictionarySearches")
            VALUES
                ('${uuid()}', '${new Date().toISOString()}', ${homeworkCheckerInstalls}, ${focusInstalls}, ${blogViews}, ${shanghaiDictionarySearches});
        `);
        const successful=queryRes.rowCount===1 && queryRes.command==='INSERT';
        if (!successful)
            console.error('<J> Insertion not successful');
    });
}

main();

