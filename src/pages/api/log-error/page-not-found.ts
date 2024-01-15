import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const url=req.headers.referer;

    await prisma.error.create({
        data: {
            date: new Date(),
            source: url || 'unknown',
            message: 'page-not-found'
        }
    });

    res.json({success: true});
}

