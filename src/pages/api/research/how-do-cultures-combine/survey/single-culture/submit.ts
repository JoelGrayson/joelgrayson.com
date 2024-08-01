import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createId as cuid } from '@paralleldrive/cuid2';
import sendEmail from 'src/helpers/sendEmail';
import { type SingleCultureSurveyData } from 'src/components/research/survey/types';
import { getRows } from 'src/components/research/survey/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const data=req.body as SingleCultureSurveyData;

    // Add to google sheets row so it can be exported as a CSV and used with pandas
    const spreadsheetId='1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE';
        // https://docs.google.com/spreadsheets/d/1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE/edit#gid=0

    const auth=await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        credentials: {
            "type": "service_account",
            "project_id": "joelgrayson",
            "private_key": (process.env.GOOGLE_API_PRIVATE_KEY as string).replaceAll('\\n', '\n'),
            "client_email": process.env.GOOGLE_API_CLIENT_EMAIL,
            "client_id": process.env.GOOGLE_API_CLIENT_ID,
            "universe_domain": "googleapis.com"
        }
    });
    const sheets=google.sheets({ version: 'v4', auth });

    // ID	Date Submitted	JSON	Email	Email Me the Results	Culture Name	Race	Parent Connected	Parent Connected Text	Child Connected	Child Connected Text	Child vs. Parent Connection (MORE, LESS, EQUAL)	Ways Child More Connected to Culture than Parents	Ways Child Less Connected to Culture than Parents	
    const rowToInsert=[
        cuid(),
        new Date().toISOString(),
        JSON.stringify(data),
        data.email,
        data.emailMeResults,
        ...getRows(data)
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1:AD1',
        valueInputOption: 'RAW',
        requestBody: {
            values: [rowToInsert]
        }
    });
    
    await sendEmail({
        subject: `New Single Culture Survey Response from a ${data.race} Person`,
        to: 'joel@joelgrayson.com',
        html: `
            <p>See responses <a href="https://docs.google.com/spreadsheets/d/1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE/edit#gid=0">here</a>.</p>

            <p><b>New response:</b></p>
            <p>${JSON.stringify(data, null, 4)}</p>
        `,
        text: 'See responses here https://docs.google.com/spreadsheets/d/1sBssTGqo7BogXBgTyjK8Ui1LoQSnKtWB1H_im6wfSrE/edit#gid=0'
    });

    res.json({
        status: 'success'
    });
}

