import { ExposedComment } from '@/components/prisma/TYPES';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/components/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | { views: number; comments: ExposedComment[]; }>) {
    const token=req.query.token;
    if (!token) return res.json('No token provided');

    const comment=await prisma.comment.findFirst({
        where: { verifyToken: <string>token },
        select: {
            Article: {
                select: {
                    hyphenatedName: true
                }
            }
        }
    });
    if (!comment) return res.send('Invalid token');
    
    await prisma.comment.update({
        where: { verifyToken: <string>token },
        data: {
            verified: true
        }
    });

    res.redirect(`/perspective/${comment.Article.hyphenatedName}#comments`);
}
