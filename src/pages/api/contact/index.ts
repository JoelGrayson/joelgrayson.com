import type { NextApiRequest, NextApiResponse } from 'next';
import notifyJoel from '../../../helpers/notifyJoel';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{message: string, queryRes?: any; origin?: string}>) {
    const { name, email, message, previousPage }=req.body;
    // origin
    const origin=req.headers.origin || 'joelgrayson.com';

    const notifyJoelMsg=`${name} <${email}> wrote:\n${message}`;
    notifyJoel({ //notify Joel of contact form submission
        email: {
            subject: `${name} <${email}> contacted you through ${origin}`,
            replyTo: email,
            body: notifyJoelMsg
        },
        text: `---New joelgrayson.com Contact Form Submission---\n${notifyJoelMsg}`
    });


    await prisma.contact.create({
        data: {
            date: new Date(),
            name,
            email,
            message,
            origin,
            previousPage
        }
    });

    res.status(200).json({
        message: `Thanks, ${name}! We will reach out to you soon.`,
        origin
    });
}
