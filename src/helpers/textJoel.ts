import twilio from 'twilio';
import env from './env';

const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);

export default async function textJoel(body: string) {
    try {
        const message = await client.messages.create({
            body: `textJoel: ${body}`,
            from: env.TWILIO_PHONE_NUMBER,
            to: env.MY_PHONE_NUMBER
        });
        console.log('Sent message', message.sid);
    } catch (err) {
        console.error('Failed to send message:', err);
    }
}

