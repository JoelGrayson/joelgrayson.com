const path=require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
const { Client }=require('pg');

module.exports=async function usePg(callback) {
    const client=new Client({
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        port: 5432,
        password: process.env.PG_PSWD,
        database: 'joelgrayson'
    });

    await client.connect();
    const queryRes=await callback(client);
    client.end();
    return queryRes;
}
