import { ExposedComment } from '@/data/prisma/TYPES';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';
import sendEmail from '@/helpers/sendEmail';
import generateToken from '@/helpers/generate-token';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string | { views: number; comments: ExposedComment[]; }>) {
    const { name, email, comment, hyphenatedTitle }=req.body as { name?: string; email?: string; comment?: string; hyphenatedTitle?: string };
    
    if (!name || !email || !comment || !hyphenatedTitle) return res.json('No name, email, or comment provided');
    
    const token=generateToken();
    
    const verificationLink=`https://joelgrayson.com/api/blog/verify-comment/${token}`;
    sendEmail({
        to: email,
        from: { name: `Joel's Blog`, email: 'bot@joelgrayson.com' },
        subject: 'Confirm Comment',
        text: `Please go to ${verificationLink} to confirm your comment. Once confirmed, the following comment will be posted:\n`
        +'Name: '+name+'\n'
        +'Email: '+email+'\n'
        +'Comment: '+comment+'\n',
        html: `
            <p>Please go to <a href='${verificationLink}'>this link</a> to confirm your comment. Once confirmed, the following comment will be posted:</p>
            <p></p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Comment: ${comment}</p>
        `
    });
    
    const article=await prisma.article.findFirst({
        where: { hyphenatedTitle: hyphenatedTitle },
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
            articleId: article.id as string,
            verified: false,
            verifyToken: token
        }
    });

    res.send('Success');
}
