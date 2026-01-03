import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.TWILIO_ACCOUNT_SID);
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async function textJoel(body) {
    try {
        const message = await client.messages.create({
            body: `textJoel: ${body}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER
        });
        console.log('Sent message', message.sid);
    } catch (err) {
        console.error('Failed to send message:', err);
    }
}


textJoel('Hi there. This is a test.');
