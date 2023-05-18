import { useRouter } from 'next/router';
import Page from '@/components/global/Page';

export default function DaysUntil() { // /software/days-until?date=11.7.2022&event=test
    const router=useRouter(); 

    if (!router.query.date)
        return <div>Event not specified</div>;

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
    const daysLeft=~~(millisLeft/1000/60/60/24); // ~~ is a shorthand for Math.floor()
    return daysLeft;
}
