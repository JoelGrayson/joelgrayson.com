// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { dateRegex, SignedMessage } from '../../../components/verify/helpers';
import { msg2Str, escapeQuot } from '../../../components/verify/helpers';
import { exec } from 'child_process';
import path from 'path';

type Data={
    status: 'Success';
    valid: boolean;
};
type Error={
    status: 'Error';
    message: string;
};

function saveToFile(string: string, filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`echo '''${escapeQuot(string)}''' > ${filename}`, _=>resolve());
    });
}

export async function validate(msg: SignedMessage, path: string): Promise<boolean> {
    await saveToFile(msg2Str(msg), `${path}/message.txt`);
    await saveToFile(msg.signature, `${path}/signature.txt`);
    return new Promise((resolve, reject)=>{
        exec(`cd ${path} && ./verify.sh > /dev/null 2>&1; printf $?`, (err, stdout, stderr)=>{
            if (stdout==='0') //No Error ∴ valid
                return resolve(true);
            if (stdout==='1') //Error ∴ invalid
                return resolve(false);
            console.log('Unusual stdout (not 0 or 1): '+stdout);
            return resolve(false);
        });
    });
}

export default async function validateHandler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    const input=req.body as SignedMessage;
    // Check if input is missing
    if (!input.date)      return res.status(400).json({status: 'Error', message: 'Missing date'});
    if (!input.message)   return res.status(400).json({status: 'Error', message: 'Missing message'});
    if (!input.signature) return res.status(400).json({status: 'Error', message: 'Invalid signature'});
    // Check if input is valid
    if (input.date.match(dateRegex)==null) return res.status(400).json({status: 'Error', message: 'Invalidly formed date. Must be of format `YEAR.MONTH.DAY`.'});
    if (input.signature.length<=8)         return res.status(400).json({status: 'Error', message: 'Invalidly formed signature. Must be at least 8 characters long.'});

    const pathToFile=path.join(__dirname, 'components', 'verify');
    console.log('p', pathToFile);
    const validated=await validate(input, pathToFile);
    res.status(200).json({ status: 'Success', valid: validated });
}
