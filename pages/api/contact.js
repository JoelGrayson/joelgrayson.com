// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { send } from './sendgrid/sendgrid';

export default function handler(req, res) {
    if (req.method==='POST') {
        // const email=req.body.email;
        // const name=req.body.name;
        // const msg=req.body.message;
        
        // send({
        //     subject: `${name} <${email}> contacted you`,
        //     text: `Message:\n\n ${msg}`,
        //     html: `
        //         <p>Time: ${new Date().toString()}</p>
        //         <p>From: ${email}</p>
        //         <br/>
        //         <h3>Message</h3>
        //         <p>${msg}</p>
        //     `,
        //     to: 'jgrayson24@riverdale.edu',
        //     from: 'bot@joelgrayson.com'
        // });
        
        // res.status(200).json({ email: req.body.email })

        res.status(200).send('Success');
    }
}