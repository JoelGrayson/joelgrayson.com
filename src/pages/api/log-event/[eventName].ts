import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

// GET joelgrayson.com/api/log-event/[event-name]

export default async function LogEvent(req: NextApiRequest, res: NextApiResponse<{status: any}>) {
    const eventName=req.query.eventName;
    await prisma.eventCounter.create({
        data: {
            eventName: (Array.isArray(eventName) ? eventName[0] : eventName) || 'unknown',
            origin: req.headers.referer || 'unknown'
        }
    });

    res.json({
        status: 'success'
    });
}
