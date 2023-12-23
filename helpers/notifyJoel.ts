const emailClient=require('@sendgrid/mail');
emailClient.setApiKey(process.env.SENDGRID_API_KEY);
// const textClient=require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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

    // text Joel (not using because of $12 per month cost and the fact that anything done on the phone could probably be done better over email)
    // if (args.text) {
    //     textClient.messages.create({
    //         to: process.env.MY_PHONE_NUMBER,
    //         from: process.env.TWILIO_PHONE_NUMBER,
    //         body: args.text,
    //     });
    // }
}
