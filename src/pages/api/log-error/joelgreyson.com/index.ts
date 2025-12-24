import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const url=req.body.url || req.headers.referer || 'unknown';
    console.log('Added URL', url, 'req body', req.body);

    await prisma.error.create({
        data: {
            date: new Date(),
            source: url,
            message: 'joelgreyson.com'
        }
    });

    res.json({success: true});
}
