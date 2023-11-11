import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createId as cuid } from '@paralleldrive/cuid2';
import { SurveyData } from 'pages/research/how-do-cultures-combine/survey/single-culture';
import sendEmail from '@/helpers/sendEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const data=req.body as SurveyData;

    // Add to google sheets row so it can be exported as a CSV and used with pandas
    const spreadsheetId='1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE';
        //https://docs.google.com/spreadsheets/d/1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE/edit#gid=0

    const auth=await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        credentials: {
            "type": "service_account",
            "project_id": "joelgrayson",
            "private_key": process.env.GOOGLE_API_PRIVATE_KEY,
            "client_email": process.env.GOOGLE_API_CLIENT_EMAIL,
            "client_id": process.env.GOOGLE_API_CLIENT_ID,
            "universe_domain": "googleapis.com"
        }
    });
    const sheets=google.sheets({ version: 'v4', auth });

    const rowsToInsert=[
        cuid(),
        new Date().toISOString(),
        JSON.stringify(data),
        data.email,
        data.emailMeResults,
        data.name,
        data.race,
        data.parentConnected,
        data.childConnected,
        data.practicedAtHome,
        data.additional,
    ];

    sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1:AD1',
        valueInputOption: 'RAW',
        requestBody: {
            values: [rowsToInsert]
        }
    });
    
    sendEmail({
        subject: `New Multicultural Survey Response from a ${data.race?.toUpperCase()} Person`,
        to: 'joelbaograyson@gmail.com',
        html: `
            <p>See responses <a href="https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit?pli=1#gid=0">here</a>.</p>

            <p><b>New response:</b></p>
            <p>${JSON.stringify(data, null, 4)}</p>
        `,
        text: 'See responses here https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit?pli=1#gid=0'
    })

    res.json({
        status: 'success'
    });
}

