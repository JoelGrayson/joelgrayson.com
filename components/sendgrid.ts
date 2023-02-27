// Sends email
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(<string>process.env.SENDGRID_API_KEY);

type fromT={name?: string; email: string};

export function send({ subject, text, html, to, from={email: ''}/* :(object | string) */ }: {
    subject: string;
    text: string;
    html: string;
    to: string;
    from?: fromT | string;
}) { //including any from parameters changes sender details for that prop only
    //Sender default values
    if (typeof from !== 'string') {
        from.name??='Joel';
        from.email??='bot@joelgrayson.com';
    }
    
    sgMail
    .send({subject, text, html, to, from: (from as fromT)})
    .then(()=>{
        console.log('Email sent');
    })
    .catch(error=>{
        console.error(error);
        console.error('errors <m>', error.response.body.errors);
    });
}
