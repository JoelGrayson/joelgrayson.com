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
    const promises = [];
    const prefix = 'joelgrayson.com: ';

    // email Joel
    if (args.email) {
        const replyTo = args.email.replyTo;

        // SendGrid
        promises.push(
            emailClient.send({
                to: process.env.MY_SENDGRID_EMAIL_ADDR,
                from: 'bot@joelgrayson.com',
                subject: prefix + args.email.subject,
                text: args.email.body,
                replyTo
            })
        );

        promises.push(
            resend.emails.send({
                from: 'Joel Grayson <contact@stanfordlaunches.com>',
                to: 'joel@joelgrayson.com',
                subject: prefix + args.email.subject,
                text: args.email.body,
                replyTo
            })
        );
    }
    if (args.text) {
        promises.push(
            textJoel(prefix + args.text)
        );
    }

    return await Promise.all(promises);
}

