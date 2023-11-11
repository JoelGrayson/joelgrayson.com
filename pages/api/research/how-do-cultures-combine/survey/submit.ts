import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createId as cuid } from '@paralleldrive/cuid2';
import { Culture, SurveyData } from 'pages/research/how-do-cultures-combine/survey';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const data=req.body as SurveyData;
    console.log('data', data, data.father);

    // Add to google sheets row so it can be exported as a CSV and used with pandas
    const spreadsheetId='1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g';
        //https://docs.google.com/spreadsheets/d/1myKBPm0_4PQek0mBjPlTcxjD0lQsL4GGKBM3zTdT87g/edit#gid=0

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
    
    // const response=await sheets.spreadsheets.values.get({
    //     spreadsheetId,
    //     range: 'Sheet1!A1:Z1'
    // });
    // console.log(response.data.values);

    const rowsToInsert=[// ID	Date Submitted	JSON	Email	EmailMeResults	Father Culture Name	Father Race	Father Connected to Father Culture	Child Connected to Father Culture	Father Culture Practiced At Home	Father Culture Additional Notes	Mother Culture Name	Mother Culture Name	Mother Race	Mother Connected to Mother Culture	Child Connected to Mother Culture	Mother Culture Practiced At Home	Mother Culture Additional Notes	Third Culture Name	Third Race	Third Connected to Third Culture	Child Connected to Third Culture	Third Culture Practiced At Home	Third Culture Additional Notes	Fourth Culture Name	Fourth Race	Fourth Connected to Fourth Culture	Child Connected to Fourth Culture	Fourth Culture Practiced At Home	Fourth Culture Additional Notes
        cuid(),
        new Date().toISOString(),
        JSON.stringify(data),
        data.email,
        data.emailMeResults,
        data.father.name,
        getRace(data.father),
        data.father.parentConnected,
        data.father.childConnected,
        data.father.practicedAtHome,
        data.father?.additional || '',
        data.mother.name,
        getRace(data.mother),
        data.mother.parentConnected,
        data.mother.childConnected,
        data.mother.practicedAtHome,
        data.mother?.additional || ''
    ];
    if (data.additionalCultures[0]) {
        rowsToInsert.push(
            data.additionalCultures[0].name,
            getRace(data.additionalCultures[0]),
            data.additionalCultures[0].parentConnected,
            data.additionalCultures[0].childConnected,
            data.additionalCultures[0].practicedAtHome,
            data.additionalCultures[0].additional
        );
    }
    if (data.additionalCultures[1]) {
        rowsToInsert.push(
            data.additionalCultures[1].name,
            getRace(data.additionalCultures[1]),
            data.additionalCultures[1].parentConnected,
            data.additionalCultures[1].childConnected,
            data.additionalCultures[1].practicedAtHome,
            data.additionalCultures[1].additional
        );
    }

    sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1:AD1',
        valueInputOption: 'RAW',
        requestBody: {
            values: [rowsToInsert]
        }
    });
    
    res.json({
        status: 'success'
    });
}

function getRace(culture: Culture) {
    if (culture.race==='Other')
        return culture.otherRace;
    return culture.race;
}

