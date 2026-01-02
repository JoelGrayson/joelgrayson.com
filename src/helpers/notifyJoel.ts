import { resend } from "./resend";
import emailClient from '@sendgrid/mail';
import textJoel from "./textJoel";

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
        const replyTo = args.email.replyTo;

        await Promise.all([
            // SendGrid
            emailClient.send({
                to: process.env.MY_SENDGRID_EMAIL_ADDR,
                from: 'bot@joelgrayson.com',
                subject: args.email.subject,
                text: args.email.body,
                replyTo
            }),
            
            // Resend
            resend.emails.send({
                from: 'Joel Grayson <contact@stanfordlaunches.com>',
                to: 'joel@joelgrayson.com',
                subject: args.email.subject,
                text: args.email.body,
                replyTo
            }),

            textJoel(args.email.body)
        ])
    }
    if (args.text) {
        
    }
}
