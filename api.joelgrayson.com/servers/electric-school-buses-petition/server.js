const express=require('express');
const router=express.Router();
const { google }=require('googleapis');

router.get('/signatures', async (req, res)=>{
    const auth=new google.auth.GoogleAuth({
        keyFile: 'private/electric-school-bus-petition-google-credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });
    const client=await auth.getClient(); //client instance
    const googleSheets=google.sheets({
        version: 'v4',
        auth: client
    });
    const rows=await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: '1hleAxag5MOauzTJtgYmzTX4r5KsX0_npWMZug-Dlqmo',
        range: 'A:C'
    });
    let c=rows.data.values; //c for cell (data starts at index 2)

    res.render('electric-school-buses-petition-signatures', {
        data: [
            {grade: c[2][0], signatures: c[2][1], percent:  c[2][2]},
            {grade: c[3][0], signatures: c[3][1], percent:  c[3][2]},
            {grade: c[4][0], signatures: c[4][1], percent:  c[4][2]},
            {grade: c[5][0], signatures: c[5][1], percent:  c[5][2]},
            {grade: c[6][0], signatures: c[6][1], percent:  c[6][2]},
            {grade: c[7][0], signatures: c[7][1], percent:  c[7][2]},
            {grade: c[8][0], signatures: c[8][1], percent:  c[8][2]},
            {grade: c[9][0], signatures: c[9][1], percent:  c[9][2]},
            {grade: c[10][0], signatures: c[10][1], percent: c[10][2]}
        ],
        total: c[11][1]
    });
});

module.exports=router;
