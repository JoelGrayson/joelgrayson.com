import { resend } from "./resend";
import emailClient from '@sendgrid/mail';

emailClient.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function notifyJoel(args: { //notify Joel of contact form submission
    text?: string;
    email?: {
        subject: string;
        replyTo: string;
        body: string;
    };
}) {
    // email Joel
    if (args.email) {
        await Promise.all([
            // SendGrid
            emailClient.send({
                to: process.env.MY_SENDGRID_EMAIL_ADDR,
                from: 'bot@joelgrayson.com',
                subject: args.email.subject,
                text: args.email.body,
                replyTo: args.email.replyTo
            }),
            
            // Resend
            resend.emails.send({
                from: 'Joel Grayson <contact@stanfordlaunches.com>',
                to: 'joel@joelgrayson.com',
                subject: `joelgrayson.com/contact: New Submission from ${args.email}`,
                text: args.email.body,
            })
        ])
    }
    if (args.text) {
        
    }
}
