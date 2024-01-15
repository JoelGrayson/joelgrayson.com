import type { NextApiRequest, NextApiResponse } from 'next/types';
import { Client } from 'pg';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const client=new Client({
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        port: 5432,
        password: process.env.PG_PSWD,
        database: 'joelgrayson'
    });
    await client.connect();

    const queryRes=await client.query(`
        SELECT SUM(views) FROM "Article";
    `);

    client.end();
    res.json({views: parseInt(queryRes.rows[0].sum)});
}
