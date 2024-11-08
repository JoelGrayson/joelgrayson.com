import dotenv from 'dotenv';
dotenv.config();
import sgMail from '@sendgrid/mail';

export default function sendEmail({ subject, text, html, to, from={}, replyTo }: {
    subject: string;
    text: string;
    html: string;
    to: string;
    from?: {
        name?: string;
        email?: string;
    };
    replyTo?: string;
}): Promise<void> { //including any from parameters changes sender details for that prop only
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    // Sender default values
    from.name??='Joel Grayson';
    from.email??='bot@joelgrayson.com';

    return new Promise((resolve, reject)=>{
        sgMail
            .send({
                subject,
                text: text.trim(),
                html: html.trim(),
                to,
                from: (from as {name: string; email: string}),
                replyTo
            })
            .then(()=>{
                console.log(`Email of title ${subject} sent to ${to}`);
                resolve();
            })
            .catch(error=>{
                console.error('SendGrid error', error);
                reject(error);
            });
    });
}
