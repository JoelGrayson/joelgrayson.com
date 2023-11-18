import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    console.log(process.env.DASHBOARD_PASSWORD, req.body.password, process.env.DASHBOARD_PASSWORD!==req.body.password);
    if (process.env.DASHBOARD_PASSWORD!==req.body.password)
        return res.json({
            type: 'error',
            authenticated: false,
            message: 'Wrong password'
        });

    let errors404=await prisma.error.findMany({
        where: {
            message: 'page-not-found'
        },
        orderBy: {
            date: 'desc'
        }
    });
    errors404=errors404.filter(error=>{
        let url=new URL(error.source);
        if (url.hostname==='localhost') //ignore development
            return false;
        else
            return true;
    });
    const otherErrors=await prisma.error.findMany({
        where: {
            NOT: {
                message: 'page-not-found'
            }
        }
    });
    res.json({
        authenticated: true,
        '404Errors': errors404,
        otherErrors:  otherErrors
    });
}
