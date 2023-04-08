const { exec }=require('child_process');
const path=require('path');


function saveToFile(string, filename) {
    return new Promise((resolve, reject) => {
        exec(`echo '''${escapeQuot(string)}''' > ${filename}`, ()=>resolve());
    });
}

async function verify(msg, path) {
    await saveToFile(addNotice(msg.message), `${path}/original-message.txt`);
    await saveToFile(msg2Str(msg), `${path}/message.txt`);
    await saveToFile(msg.signature, `${path}/signature.txt`);
    return new Promise((resolve, reject)=>{
        exec(`cd ${path} && ./verify.sh > /dev/null 2>&1; printf $?`, (err, stdout, stderr)=>{
            if (stdout==='0') //No Error ∴ valid
                return resolve(true);
            if (stdout==='1') //Error ∴ invalid
                return resolve(false);
            console.log('Error: Unusual stdout (not 0 or 1): '+stdout);
            return resolve(false);
        });
    });
}

async function verifyHandler(req, res) {
    const input=req.body;
    // Check if input is missing
    if (!input.date)      return res.status(400).json({status: 'Error', message: 'Missing date'});
    if (!input.message)   return res.status(400).json({status: 'Error', message: 'Missing message'});
    if (!input.signature) return res.status(400).json({status: 'Error', message: 'Invalid signature'});
    // Check if input is valid
    if (input.date.match(dateRegex)==null) return res.status(400).json({status: 'Error', message: 'Invalidly formed date. Must be of format `YEAR.MONTH.DAY`.'});
    if (input.signature.length<=8)         return res.status(400).json({status: 'Error', message: 'Invalidly formed signature. Must be at least 8 characters long.'});

    console.log('Incoming verify request', input);

    const pathToFile=path.join(__dirname);
    const validated=await verify(input, pathToFile);
    res.status(200).send(JSON.stringify({ status: 'Success', valid: validated }));
}

function addNotice(msg) {
    return 'NOTE: This file is not actually used for hashing. It is just a copy of the original, unaltered message. The actually hashed message (in `message.txt`) has tabs and newlines stripped and is lowercased.'
        +'\n'
        +'\n'
        +msg;
}

function msg2Str(msg) {
    // Cut off message's newlines, tabs, and capitalization.
    const message=msg.message
        .trim()
        .split('').reduce((acc, char)=>char==='\n' || char==='\t' ? acc : acc+char, '')
        .toLowerCase();

    return 'Message: '+message+'\n'
    +'Date: '+date2Str(str2Date(msg.date)); //convert to standard date format (MONTH.DATE.YEAR)
}

function str2Msg(str) {
    const out=str.match(/Message: (?<message>.*)\nDate: (?<date>.*)/m).groups || {};
    out.message||='<no message>';
    out.date||='<no date>';
    return out;
}

function escapeQuot(msg) {
    return msg.replace("'", "''");
}

// Date Handling
const dateRegex=/(\d{1,2}\.\d{1,2}\.\d{2,4}|\d{4}(\.\d{1,2})?(\.\d{1,2})?)/; // valid date formats: 11.24.22 or 11.24.2022 or 2022.11.24
const dateRegexGroups1=/^(?<month>\d{1,2})\.(?<day>\d{1,2})\.(?<year>\d{2,4})$/; // named capture groups
const dateRegexGroups2=/^(?<year>\d{4})(\.(?<month>\d{1,2}))?(\.(?<day>\d{1,2}))$/; //alternative format

function date2Str(d) {
    const month=d.getMonth()+1;
    const day=d.getDate();
    const year=d.getFullYear();
    return `${month}.${day}.${year}`;
}

function str2Date(s) {
    let { month, day, year }=s.trim().match(dateRegexGroups1)?.groups || {};
    if (month==undefined || day==undefined || year==undefined) //try other pattern
        ({ month, day, year }=s.trim().match(dateRegexGroups2)?.groups || {});
    if (year.length==2) //implied in 21st century
        year='20'+year;

    return new Date(parseInt(year), parseInt(month)-1, parseInt(day));
}

module.exports={
    dateRegex,
    escapeQuot,
    str2Msg,
    msg2Str,
    verify,
    verifyHandler
};
