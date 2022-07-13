// Sends email
import secret from './api key.secret';

import sgMail from '@sendgrid/mail'
sgMail.setApiKey(secret.SENDGRID_API_KEY);

export function send({ subject, text, html, to, from={}/* :(object | String) */ }) { //including any from parameters changes sender details for that prop only
    //Sender default values
    if (typeof from !== 'string') {
        from.name??='Joel';
        from.email??='bot@joelgrayson.com';
    }
    
    sgMail
    .send({subject, text, html, to, from})
    .then(()=>{
        console.log('Email sent');
    })
    .catch(error=>{
        console.error(error);
        console.error('errors <m>', error.response.body.errors);
    });
}