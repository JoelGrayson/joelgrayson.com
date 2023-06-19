import { useRouter } from 'next/router';

export default function DaysUntil() { // /software/days-until?date=11.7.2022&event=test
    const router=useRouter(); 

    const labelClass='w-[11ch] inline-block';
    if (!router.query.date)
        return <div className='flex gap-3 items-center flex-col mt-[5vh]'>
            <p>Specify an event below</p>

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

    return <div className='flex justify-center items-center' style={{height: '100vh'}}>
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

