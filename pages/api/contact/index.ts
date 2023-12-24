import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
import notifyJoel from '../../../helpers/notifyJoel';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{message: string, queryRes?: any}>) {
    const { name, email, message }=req.body;

    const notifyJoelMsg=`${name} <${email}> wrote:\n${message}`;
    notifyJoel({ //notify Joel of contact form submission
        email: {
            subject: `${name} <${email}> contacted you through joelgrayson.com/contact`,
            replyTo: email,
            body: notifyJoelMsg
        },
        text: `---New joelgrayson.com Contact Form Submission---\n${notifyJoelMsg}`
    });

    const client=new Client({
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        port: 5432,
        password: process.env.PG_PSWD,
        database: 'joelgrayson'
    });
    await client.connect();

    await prisma.contact.create({
        data: {
            date: new Date(),
            name,
            email,
            message,
        }
    });

    res.status(200).json({
        message: `Thanks, ${name}! We will reach out to you soon.`
    });
}
