import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const url=req.headers.referer || req.body.url;

    await prisma.error.create({
        data: {
            date: new Date(),
            source: url || 'unknown',
            message: 'joelgreyson.com'
        }
    });

    res.json({success: true});
}
