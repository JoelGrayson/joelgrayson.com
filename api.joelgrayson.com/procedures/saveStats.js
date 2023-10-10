const { v4: uuid }=require('uuid');
const usePg=require('../utils/usePg');
require('dotenv').config({ path: '../../.env' })

async function main() {
    const statistics=await fetch('https://joelgrayson.com/api/stats/all')
        .then(res=>res.json());
    const { homeworkCheckerInstalls, focusInstalls, blogViews, shanghaiDictionarySearches }=statistics;

    usePg(async client=>{
        const queryRes=await client.query(`
            INSERT INTO Stats (id, date, homeworkCheckerInstalls, focusInstalls, blogViews, shanghaiDictionarySearches)
            VALUES
                ('${uuid()}', '${new Date().toISOString()}', ${homeworkCheckerInstalls}, ${focusInstalls}, ${blogViews}, ${shanghaiDictionarySearches});
        `);
        const successful=queryRes.rowCount===1 && queryRes.command==='INSERT';
        if (!successful)
            console.error('<J> Insertion not successful');
    });
}

main();

