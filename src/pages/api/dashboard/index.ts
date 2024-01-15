import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/data/prisma/client';

export type Action='GET' | 'RESOLVE' | 'DELETE';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    console.log(process.env.DASHBOARD_PASSWORD, req.body.password, process.env.DASHBOARD_PASSWORD!==req.body.password ? 'Invalid password' : 'Valid password');
    if (process.env.DASHBOARD_PASSWORD!==req.body.password)
        return res.json({
            type: 'error',
            authenticated: false,
            message: 'Wrong password'
        });

    switch (req.body.action) {
        case 'GET':
            let errors404=await prisma.error.findMany({
                where: {
                    message: 'page-not-found',
                    resolved: false
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
            return res.json({
                authenticated: true,
                '404Errors': errors404,
                otherErrors:  otherErrors
            });
        case 'RESOLVE':
            if (!Array.isArray(req.body.ids))
                return res.json({
                    type: 'error',
                    message: 'req.body.ids must be an array'
                });
            await prisma.error.updateMany({
                data: {
                    resolved: true
                },
                where: {
                    id: {
                        in: req.body.ids
                    }
                }
            });
            return res.json({
                type: 'success',
                message: 'Errors resolved'
            });
        case 'DELETE':
            if (!Array.isArray(req.body.ids))
                return res.json({
                    type: 'error',
                    message: 'req.body.ids must be an array'
                });
            await prisma.error.deleteMany({
                where: {
                    id: {
                        in: req.body.ids
                    }
                }
            });
            return res.json({
                type: 'success',
                message: 'Errors resolved'
            });
        default:
            console.log('Invalid dashboard action:', req.body.action);
            return res.json({
                type: 'error',
                message: 'Invalid action'
            });
    }
}
