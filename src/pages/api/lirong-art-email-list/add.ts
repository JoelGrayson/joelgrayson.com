import type { NextApiRequest, NextApiResponse } from 'next';
import notifyJoel from '../../../helpers/notifyJoel';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{status: any}>) {
    const { name, email }=req.body;

    const notifyJoelMsg=`Name: ${name}\nEmail: ${email}`;
    console.log(`Registering ${name} <${email}> for the LirongArt Email List`);

    notifyJoel({ //notify Joel of contact form submission
        email: {
            subject: `${name} <${email}> signed up for the LirongArt Email List`,
            replyTo: email,
            body: notifyJoelMsg
        },
        text: notifyJoelMsg
    });

    const queryRes=await prisma.lirongArtEmailList.findFirst({
        where: {
            email
        }
    });
    if (queryRes) {
        return res.status(403).json({
            status: 'duplicate email'
        });
    }

    await prisma.lirongArtEmailList.create({
        data: {
            name,
            email,
            origin: req.headers.origin
        }
    });

    res.status(200).json({
        status: 'success'
    });
}
