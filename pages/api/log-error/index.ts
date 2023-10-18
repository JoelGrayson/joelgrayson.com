import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const url=req.headers.referer;
    if (!req.body.message)
        return res.json({type: 'error', message: 'message is required'});

    await prisma.error.create({
        data: {
            date: new Date(),
            source: url || 'unknown',
            message: req.body.message
        }
    });
}
