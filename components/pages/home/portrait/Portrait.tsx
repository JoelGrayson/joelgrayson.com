// Rewindable Portrait

import { useState } from 'react';
import PortraitPhoto from './PortraitPhoto';
import RewindIcon from './RewindIcon';

export default function Portrait() {
    const [offset, setOffset]=useState<number>(0);
    const [index, setIndex]=useState<number>(0); //index of selected portrait
    const [hovering, setHovering]=useState<boolean>(true); //debugging
    // const [hovering, setHovering]=useState<boolean>(false);

    function changeIndex(index: number) { //returns onClick event
        return function() {
            setIndex(index);
            setOffset(index*(270+20+4));
            setHovering(false);
        }
    }
    

    return (<div className='absolute p-0 bottom-0 mb-[-6px] right-24' onMouseLeave={(_: any)=>setHovering(false)}>
        <RewindIcon onMouseEnter={(_: any)=>setHovering(true)} hovering={hovering} />
        
        <span style={{
            display: 'inline-flex',
            justifyContent: 'center',
            position: 'relative',
            top: 0
        }}>
            { (index==3 || hovering) && <PortraitPhoto date='8.18.2019' ratio={1885/2229} {...{hovering, setHovering}} onClick={changeIndex(3)} />}
            { (index==2 || hovering) && <PortraitPhoto date='9.19.2020' ratio={1904/1919} {...{hovering, setHovering}} onClick={changeIndex(2)} />}
            { (index==1 || hovering) && <PortraitPhoto date='3.25.2021' ratio={1772/2142} {...{hovering, setHovering}} onClick={changeIndex(1)} />}
            { (index==0 || hovering) && <PortraitPhoto date='3.20.2022' ratio={947/1223} {...{hovering, setHovering}} onClick={changeIndex(0)} />}
        </span>
    </div>);
}
