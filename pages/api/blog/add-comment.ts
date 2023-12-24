import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';
import sendEmail from '@/helpers/sendEmail';
import generateToken from '@/helpers/generate-token';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ type: 'error' | 'success'; message?: string }>) {
    const { name, email, comment, hyphenatedTitle }=req.body as { name?: string; email?: string; comment?: string; hyphenatedTitle?: string };
    
    if (!name || !email || !comment || !hyphenatedTitle) return res.status(403).json({
        type: 'error',
        message: 'No name, email, or comment provided'
    });
    
    const token=generateToken();
    
    const verificationLink=`https://joelgrayson.com/api/blog/verify-comment/${token}`;
    // Old button style: padding: 3px 8px; cursor: pointer; background-color: #f9c44d;
    sendEmail({
        to: email,
        from: { name: `Joel's Blog`, email: 'bot@joelgrayson.com' },
        subject: 'Confirm Comment',
        text: `Please go to ${verificationLink} to confirm your comment. Once confirmed, the following comment will be posted:\n`
        +'Name: '+name+'\n'
        +'Email: '+email+'\n'
        +'Comment: '+comment+'\n',
        html: `
            <p>
                <a
                    href='${verificationLink}'
                    style='border: 1.1px solid #000; border-radius: 3px; padding: 5px 10px; background: #e9e9e9; position: relative; top: 0; user-select: none; transition: top; transition-duration: .1s; text-decoration: none; color: blue;'
                >
                    Click here
                </a>
                <span style='color:black'>&nbsp;to post the following comment:</span>
            </p>
            <br />
            <fieldset>
                <legend>${name} wrote</legend>
                <p>${comment}</p>
            </fieldset>
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
    if (!article) return res.status(403).send({
        type: 'error',
        message: 'No article found for name'+hyphenatedTitle
    });
    
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

    res.status(200).send({
        type: 'success',
    });
}
