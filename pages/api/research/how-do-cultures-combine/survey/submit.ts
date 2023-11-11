import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    // Add to google sheets row so it can be exported as a CSV and used with pandas
    // await prisma.howDoCulturesCombine.create({
    //     data: {
    //         date: new Date(),
    //         source: url || 'unknown',
    //         message: req.body.message
    //     }
    // });
    res.json({
        status: 'success'
    });
}
