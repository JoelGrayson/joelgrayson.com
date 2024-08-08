// ABOUT: gets the number of page visits and adds one to it
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (typeof req.headers.referer!=='string')
        return res.status(400).json({
            status: 'error',
            message: `req.headers.referer is required and cannot be an array. Currently, it is ${req.headers.referer}`
        });

    const url=new URL(req.headers.referer, 'https://joelgrayson.com').pathname; //relative and has no query
    
    const updated=await prisma.pageVisits.upsert({
        where: { url },
        update: {
            visits: {
                increment: 1
            }
        },
        create: {
            url,
            visits: 1
        },
        select: {
            visits: true
        }
    });
    
    res.json({
        visits: updated.visits
    });
}
