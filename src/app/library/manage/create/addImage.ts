'use server';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as s3GetSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
const generateRandomName=()=>crypto.randomBytes(16).toString('hex');
import prisma from '@/data/prisma/client';

const s3=new S3Client({
    region: process.env.JG_LEARN_S3_REGION!,
    credentials: {
        accessKeyId: process.env.JG_LEARN_ACCESS_KEY!,
        secretAccessKey: process.env.JG_LEARN_SECRET_ACCESS_KEY!,
    },
});

export async function getSignedUrl({ id, password }: { id: string; password: string }) {
    // Authenticate
    if (password!==process.env.DASHBOARD_PASSWORD) return;

    
    const key=await generateRandomName();

    const putObjectCommand=new PutObjectCommand({
        Bucket: process.env.JG_LEARN_S3_BUCKET_NAME,
        Key: key,
    });

    const signedUrl=await s3GetSignedUrl(s3, putObjectCommand, { expiresIn: 60 });
    const imageUrl=signedUrl.split('?')[0];
    
    console.log({id, imageUrl});
    
    await prisma.library.update({
        where: {
            id
        },
        data: {
            imageUrl
        }
    });

    return { signedUrl };
}
