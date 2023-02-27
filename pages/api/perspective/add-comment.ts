import { ExposedComment } from '@/components/prisma/TYPES';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/components/prisma/client';
import sendEmail from '@/components/sendEmail';
import generateToken from '@/components/helpers/generate-token';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | { views: number; comments: ExposedComment[]; }>) {
    const { name, email, comment, hyphenatedTitle }=req.body;
    
    if (!name || !email || !comment || !hyphenatedTitle) return res.json('No name, email, or comment provided');
    
    const token=generateToken();
    
    const verificationLink=`https://joelgrayson.com/api/perspective/verify-comment?token=${token}`;
    sendEmail({
        to: email,
        from: { name: "Joel's Perspective", email: 'bot@joelgrayson.com' }, //TODO: test if this works
        subject: 'Confirm Comment',
        text: `Please go to ${verificationLink} to confirm your comment. Once confirmed, the following will be posted\n`
        +'Name: '+name+'\n'
        +'Email: '+email+'\n'
        +'Comment: '+comment+'\n',
        html: `<p>Please go to <a href="${verificationLink}">this link</a> to confirm your comment. Once confirmed, the comment will be posted</p>`
    });
    
    const article=await prisma.article.findFirst({
        where: { hyphenatedName: hyphenatedTitle },
        select: {
            id: true,
            views: true,
            comments: { select: {
                id: true,
                content: true,
                author: true,
                postedAt: true
            } },
        }
    });
    if (!article) return res.send('No article found for name'+hyphenatedTitle);
    
    await prisma.comment.create({
        data: {
            author: name,
            email,
            content: comment,
            postedAt: new Date(),
            articleId: article.id,
            verified: false,
            verifyToken: token
        }
    });

    res.send('Success');
}
