const emailClient=require('@sendgrid/mail');
emailClient.setApiKey(process.env.SENDGRID_API_KEY);

export default function notifyJoel(args: { //notify Joel of contact form submission
    text?: string;
    email?: {
        subject: string;
        replyTo: string;
        body: string;
    };
}) {
    // email Joel
    if (args.email) {
        emailClient.send({
            to: process.env.MY_EMAIL_ADDR,
            from: 'bot@joelgrayson.com',
            subject: args.email.subject,
            text: args.email.body,
            replyTo: args.email.replyTo
        });
    }
    if (args.text) {
        
    }
}
