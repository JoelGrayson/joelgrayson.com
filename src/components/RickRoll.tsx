'use client';

import baseUrl from '@/helpers/baseUrl';
import Modal from '@jcomponents/modal';
import { useEffect, useState } from 'react';

const storageKey='rickrolledYet';

export default function RickRoll() {
    const [open, setOpen]=useState(false);

    useEffect(()=>{
        const storedItem=localStorage.getItem('rickrolledYet');
        if (storedItem==='false' || !storedItem) {
            const isApril=new Date().getMonth()===3;
            const isFirst=new Date().getDate()===1;
            if (isApril && isFirst) { // April 1st
                console.log('Sending rickroll');
                setOpen(true);
                fetch(baseUrl+'api/log-event/rick-roll');
            }
        }
        else
            setOpen(false);
    }, []);
    
    return <Modal open={open} maxWidth={800} setOpen={()=>{
        setOpen(false);
        localStorage.setItem(storageKey, 'true');
    }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=hJ3y2lHXvTEezA8W&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Modal>;
}
