import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';
import sendEmail from '@/helpers/sendEmail';
import generateToken from '@/helpers/generate-token';
import sanitizeHtml from 'sanitize-html';

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
        bcc: 'joel+jgcom@joelgrayson.com',
        text: `Please go to ${verificationLink} to confirm your comment. Once confirmed, the following comment will be posted:\n`
        +'Name: '+name+'\n'
        +'Email: '+email+'\n'
        +'Comment: '+comment+'\n',
        html: `
            <p>Dear ${sanitizeHtml(name)},</p>
            <p>The following comment was submitted to joelgrayson.com/blog under your email address (${email}).</p>
            <p>
                <a
                    href='${verificationLink}'
                    style='border: 1.1px solid #000; border-radius: 3px; padding: 5px 10px; background: #e9e9e9; position: relative; top: 0; user-select: none; transition: top; transition-duration: .1s; text-decoration: none; color: blue;'
                >
                    Click here
                </a>
                <span style='color:black'>&nbsp;to post it:</span>
            </p>
            <br />
            <fieldset>
                <legend>${sanitizeHtml(name)} wrote</legend>
                <p>${sanitizeHtml(comment)}</p>
            </fieldset>

            <p>Best,</p>
            <p>The Joel Grayson Bot 🤖</p>

            <p>Don't recognize this email? Somebody must have put your email in the email address when trying to post the comment. No worries, you can ignore this email, as nothing will be posted unless you click the link above. If they were doing it for malicious purposes and you find out who it is, you have my permission to whack them in the face.</p>
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
