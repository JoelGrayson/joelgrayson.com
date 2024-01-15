//* Helpers
export type Message={
    message: string;
    date: string;
};
type Signature=string;
export type SignedMessage=Message & {
    signature: Signature;
};

export function msg2Str(msg: Message | SignedMessage): string {
    return 'Message: '+msg.message.trim()+'\n'
    +'Date: '+date2Str(str2Date(msg.date)); //convert to standard date format (MONTH.DATE.YEAR)
}

export function str2Msg(str: string): Message {
    const out=str.match(/Message: (?<message>.*)\nDate: (?<date>.*)/m)!.groups || {};
    out.message||='<no message>';
    out.date||='<no date>';
    return out as Message;
}

export function escapeQuot(msg: string): string {
    return msg.replace("'", "''");
}

// Date Handling
export const dateRegex=/(\d{1,2}\.\d{1,2}\.\d{2,4}|\d{4}(\.\d{1,2})?(\.\d{1,2})?)/; // valid date formats: 11.24.22 or 11.24.2022 or 2022.11.24
const dateRegexGroups1=/^(?<month>\d{1,2})\.(?<day>\d{1,2})\.(?<year>\d{2,4})$/; // named capture groups
const dateRegexGroups2=/^(?<year>\d{4})(\.(?<month>\d{1,2}))?(\.(?<day>\d{1,2}))$/; //alternative format

function date2Str(d: Date): string {
    const month=d.getMonth()+1;
    const day=d.getDate();
    const year=d.getFullYear();
    return `${month}.${day}.${year}`;
}

function str2Date(s: string): Date {
    let { month, day, year }=s.trim().match(dateRegexGroups1)?.groups || {};
    if (month==undefined || day==undefined || year==undefined) //try other pattern
        ({ month, day, year }=s.trim().match(dateRegexGroups2)?.groups || {});
    if (year.length==2) //implied in 21st century
        year='20'+year;
    
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day));
}
