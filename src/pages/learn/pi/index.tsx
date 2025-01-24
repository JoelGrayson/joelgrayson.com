import Cursor from '@/components/Cursor';
import Page from '@/components/page/DefaultPage';
import { useEffect, useMemo, useState } from 'react';

export default function MemorizePi() {
    const digitsOfPi=useMemo(()=>'3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989', []); //1000 digits of pi

    const [showInstructions, setShowInstructions]=useState<boolean>(false);

    const [numDigits, setNumDigits]=useState<number>(0); //number of digits typed
    const [content, setContent]=useState<string>('3.'); //content typed
    const [lastTriggered, setLastTriggered]=useState<number>(0); //date when something wrong was typed
    const triggerRed=()=>setLastTriggered(Date.now());
    const [showNextLetter, setShowNextLetter]=useState<boolean>(false);
    
    // Settings
    // const [settingsIsOpen, setSettingsIsOpen]=useState<boolean>(false);
    // const [showDigitsMemorized, setShowDigitsMemorized]=useState<boolean>(true);
    
    useEffect(()=>{
        if (typeof window!=='undefined')
            if (window.localStorage.getItem('showInstructions')!=='false')
                setShowInstructions(true);
    }, []);
    
    function typed(character: string) {
        console.log('top typed', character);
        if (character==='Shift' || character==='Meta' || character==='Control' || character==='Alt' || character==='CapsLock' || character==='Enter' || character==='Backspace' || character==='Delete' || character==='ArrowLeft' || character==='ArrowRight' || character==='ArrowUp' || character==='ArrowDown' || character==='Escape') //ignore these characters
            return;
        if (character==='Tab' || character==='?' || character==='/') //tab or ? gets next letter
            return setShowNextLetter(true);
        
        const index=numDigits+2;
        console.log('typed', character);
        if (digitsOfPi[index]===character) {
            setContent(content+character);
            setNumDigits(numDigits+1);
        } else {
            triggerRed();
        }

        setShowNextLetter(false);
    }
    
    return <Page
        pathname='/learn/pi'
        seo={{
            title: 'Memorize π',
            description: 'Tool for memorizing the digits of pi',
            keywords: ['pi', 'math']
        }}
        noPageStyling
    >
        <h1 className='text-center'>Memorize π</h1>
        {showInstructions && <div className='flex w-full justify-around mb-3'>
            <span>Start typing the digits of π. Press <kbd>tab</kbd> for the next digit if you forget.</span>
            <button style={{display: 'inline'}} onClick={()=>{
                setShowInstructions(false);
                localStorage.setItem('showInstructions', 'false');
            }}
            >Hide</button>
        </div>}
        
        <div
            onKeyDown={e=>{
                e.preventDefault();
                typed(e.key);
            }} tabIndex={0}
            style={{
                color: lastTriggered+500>Date.now() ? 'red' : 'black',
                // borderRadius: 10
            }}
            className='py-5 w-full flex items-center px-7 bg-yellow-400 break-all rounded-md'
        >
            <span>
                {/* Already Typed */}
                {content}
                {/* Cursor */}
                { !showNextLetter && <Cursor /> }
                {/* Next character hint */}
                { showNextLetter && <span className='text-green-600 underline'>{digitsOfPi[numDigits+2]}</span> }
            </span>
        </div>
        { true && <p className='mt-5'>You have typed {numDigits} digits</p> }
    </Page>;
}
