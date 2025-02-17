import SEO from '@/components/page/parts/SEO';
import { useRouter } from 'next/router';

export default function DaysUntil() { // /software/days-until?date=11.7.2022&event=test
    const router=useRouter(); 

    const labelClass='w-[11ch] inline-block';
    if (!router.query.date)
        return <div className='flex gap-3 items-center flex-col mt-[5dvh]'>
            <p>Specify an event below</p>
            <SEO seo={{
                title: 'Days Until',
                description: 'Create an embeddable countdown to an event on a specified date'
            }} />

            <form action="#" className='flex flex-col gap-3'>
                <div>
                    <label htmlFor="eventDate" className={labelClass}>Event Date</label>
                    <input type="date" id='eventDate' name='date' />
                </div>
                <div>
                    <label htmlFor="eventName" className={labelClass}>Event Name</label>
                    <input type="text" id='eventName' name='event' />
                </div>
                <input type="submit" value="Go to URL" />
            </form>
        </div>;

    const event=router.query.event || 'event';
    const daysLeft=calculateDaysLeftUntil(new Date(`${router.query.date}`));

    return <div className='flex justify-center items-center' style={{height: '100dvh'}}>
        <SEO seo={{
            title: event ? `Days Until ${event}` : 'Days Until',
            description: 'Create an embeddable countdown to an event on a specified date'
        }} />
        <div className='text-2xl'>
            <span className='font-bold text-4xl'>{daysLeft}</span>&nbsp;days left until {event}
        </div>
    </div>;
}

function calculateDaysLeftUntil(date: Date): number {
    const millisLeft=date.getTime()-Date.now();
    const daysLeft=Math.ceil(millisLeft/1000/60/60/24);
    return daysLeft;
}


/*
# Examples
https://joelgrayson.com/software/days-until?date=2024-09-05&event=Leave+Home
https://joelgrayson.com/software/days-until?date=2024-06-10&event=Graduation

*/
