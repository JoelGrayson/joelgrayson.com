import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createId as cuid } from '@paralleldrive/cuid2';
import sendEmail from 'src/helpers/sendEmail';
import { type MulticulturalSurveyData } from 'src/components/research/survey/types';
import { getNumCultures, getRows } from 'src/components/research/survey/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const data=req.body as MulticulturalSurveyData;

    // Add to google sheets row so it can be exported as a CSV and used with pandas
    const spreadsheetId='1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g';
        //https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit#gid=0

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

    // Spreadsheet cols: ID, Date Submitted, JSON, Email, Email Me the Results, Father Culture, Father Race, Father Connected, Father Connected Text, Child Connected to Father Culture, Child Connected to Father Culture Text, Child vs. Parent Connection (MORE, LESS, EQUAL), Ways Child More Connected to Father Culture than Father, Ways Child Less Connected to Father Culture than Father, Mother Culture, Mother Race, Mother Connected, Mother Connected Text, Child Connected to Mother Culture, Child Connected to Mother Culture Text, Child vs. Parent Connection (MORE, LESS, EQUAL), Ways Child More Connected to Mother Culture than Mother, Ways Child Less Connected to Mother Culture than Mother, Third Culture, Third Race, Third Connected, Third Connected Text, Child Connected to Third Culture, Child Connected to Third Culture Text, Child vs. Parent Connection (MORE, LESS, EQUAL), Ways Child More Connected to Third Culture than Third, Ways Child Less Connected to Third Culture than Third, Fourth Culture, Fourth Race, Fourth Connected, Fourth Connected Text, Child Connected to Fourth Culture, Child Connected to Fourth Culture Text, Child vs. Parent Connection (MORE, LESS, EQUAL), Ways Child More Connected to Fourth Culture than Fourth, Ways Child Less Connected to Fourth Culture than Fourth
    const rowToInsert=[
        cuid(),
        new Date().toISOString(),
        JSON.stringify(data),
        data.email,
        data.emailMeResults,
        getNumCultures(data),
        ...getRows(data.father),
        ...getRows(data.mother),
        ...getRows(data.additionalCultures[0], true),
        ...getRows(data.additionalCultures[1], true)
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1:K1',
        valueInputOption: 'RAW',
        requestBody: {
            values: [rowToInsert]
        }
    });
    
    await sendEmail({
        subject: `New Multicultural Survey Response from a ${data.father.race} ${data.mother.race}`,
        to: 'joel@joelgrayson.com',
        html: `
            <p>See responses <a href="https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit?pli=1#gid=0">here</a>.</p>

            <p><b>New response:</b></p>
            <p>${JSON.stringify(data, null, 4)}</p>
        `,
        text: 'See responses here https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit?pli=1#gid=0'
    });
    
    res.json({
        status: 'success'
    });
}


/*
# Get from spreadsheets
```
const response=await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:Z1'
});
console.log(response.data.values);
```
*/

