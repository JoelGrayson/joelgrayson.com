import * as z from 'zod';

const envSchema = z.object({
    // Twilio
    TWILIO_ACCOUNT_SID: z.string(),
    TWILIO_AUTH_TOKEN: z.string(),
    TWILIO_PHONE_NUMBER: z.string(),
    MY_PHONE_NUMBER: z.string(),

    APP_STORE_CONNECT_ISSUER_ID: z.string(),
    APP_STORE_CONNECT_API_KEY_ID: z.string(),
    APP_STORE_CONNECT_KEY: z.string(), //must have $ → \n
    APP_STORE_CONNECT_VENDOR_NUMBER: z.string(),

    // Plausible Stats API (Settings → API Keys on plausible.io). Optional —
    // missing key just makes the Plausible-backed stat fetchers return 0.
    PLAUSIBLE_API_KEY: z.string().optional(),
});

const env = envSchema.parse(process.env);

export default env;

