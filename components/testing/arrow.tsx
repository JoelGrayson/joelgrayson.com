import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Arrow() {
    const lineRef=useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        contractArrow(true);
    }, []);

    function expandArrow() {
        gsap.to(lineRef.current, {
            opacity: 1,
            duration: 0.1
        });
        gsap.to(lineRef.current, {
            width: 96,
        });
    }
    function contractArrow(instant=false) {
        const obj={
            width: 16,
            opacity: 0
        };
        
        if (instant) //snap with set
            gsap.set(lineRef.current, obj); 
        else //fluid
            gsap.to(lineRef.current, obj); 
    }
    
    return (<div className='p-4' onMouseEnter={expandArrow} onMouseLeave={()=>contractArrow(false)}>
        <div className='flex items-center'> {/* arrow */}
            {/* --- Expanding arrow line */}
            <div ref={lineRef} style={{
                transition: 'opacity',
                height: '2px',
                backgroundColor: 'black',
            }}></div>
            {/* > Arrowhead */}
            <svg width='19' height='21' style={{
                position: 'relative',
                right: '16px'
            }} fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M.99 19.14a1 1 0 001.02 1.72L.99 19.14zm1.02-19A1 1 0 00.99 1.86L2.01.14zm15.203 10.53l.51.86-.51-.86zm0-.34l.51-.86-.51.86zM1.5 20l.51.86h.001l.001-.001a.213.213 0 01.005-.003l.02-.012.081-.048.311-.185 1.157-.687 3.935-2.336c3.147-1.868 7.075-4.2 10.202-6.058l-1.02-1.72L6.5 15.869l-3.935 2.337-1.157.687-.31.184-.081.048-.02.012a.216.216 0 00-.006.003H.99v.001l.51.86zM17.723 9.47L7.521 3.412 3.586 1.076 2.429.389 2.12.204c-.036-.02-.063-.037-.081-.048l-.02-.012-.006-.003h-.001L1.5 1l-.51.86H.99l.005.004.02.012c.019.01.046.027.081.048l.311.184 1.157.687L6.5 5.132l10.202 6.057 1.021-1.72zm0 2.06a1.197 1.197 0 000-2.06l-1.02 1.72a.803.803 0 010-1.38l1.02 1.72z'
                    fill='#000' />
            </svg>
        </div>
    </div>);
}