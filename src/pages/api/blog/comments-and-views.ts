import { ExposedComment } from 'src/data/prisma/TYPES';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | { views: number; comments: ExposedComment[]; }>) {
    const hyphenatedTitle=req.body.hyphenatedTitle;
    if (!hyphenatedTitle) return res.json('Invalid hyphenatedTitle');

    // console.log('Adding view for article with hyphenatedTitle', hyphenatedTitle);
    
    let data;
    
    try {
        data=await prisma.article.findFirst({
            where: { hyphenatedTitle },
            select: {
                id: true,
                views: true,
                comments: {
                    select: {
                        id: true,
                        content: true,
                        author: true,
                        postedAt: true
                    },
                    where: { verified: true }
                },
            }
        });
    } catch (e) {
        console.error('<j> Unable to find the right article');
        console.error(e);
        return res.status(500).send('server error');
    }


    // Send data
    res.json({
        views: (data?.views || -1) as number,
        comments: data?.comments as ExposedComment[]
    });

    try {
        // Increment the view count
        await prisma.article.update({
            where: { hyphenatedTitle },
            data: {
                views: (<number>data?.views || 0)+1
            }
        });
    } catch (e) {
        console.error('<j> Unable to find the right article');
        console.error(e);
        return res.status(500).send('server error');
    }
}
