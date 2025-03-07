import Cursor from '@/components/Cursor';
import Page from '@/components/page/DefaultPage';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

export default function MemorizePi() {
    const router=useRouter();
    /*
        Name can be pi, tau, or e
        Digits can be 3.14159...
    */

    const [digits, setDigits]=useState('');
    const [content, setContent]=useState<string>(''); //content typed
    const [symbol, setSymbol]=useState('a Number');
    
    useEffect(()=>{
        if (!router.isReady) return;

        let name=router.query.name;
        let newDigits='';
        if (name) {
            switch (name) {
                // 1000 digits
                case 'pi':
                    newDigits='3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';
                    setSymbol('π');
                    break;
                case 'tau': //https://onemillionpi.weebly.com/tau.html
                    newDigits='6.2831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341359642961730265646132941876892191011644634507188162569622349005682054038770422111192892458979098607639288576219513318668922569512964675735663305424038182912971338469206972209086532964267872145204982825474491740132126311763497630418419256585081834307287357851807200226610610976409330427682939038830232188661145407315191839061843722347638652235862102370961489247599254991347037715054497824558763660238982596673467248813132861720427898927904494743814043597218874055410784343525863535047693496369353388102640011362542905271216555715426855155792183472743574429368818024499068602930991707421015845593785178470840399122242580439217280688363196272595495426199210374144226999999967459560999021194634656321926371900489189106938166052850446165066893700705238623763420200062756775057731750664167628412343553382946071965069808575109374623191257277647075751875039155637155610643424536132260038557532223918184328403978';
                    setSymbol('τ');
                    break;
                case 'e':   //https://mathshistory.st-andrews.ac.uk/HistTopics/e_10000/
                    newDigits='2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274274663919320030599218174135966290435729003342952605956307381323286279434907632338298807531952510190115738341879307021540891499348841675092447614606680822648001684774118537423454424371075390777449920695517027618386062613313845830007520449338265602976067371132007093287091274437470472306969772093101416928368190255151086574637721112523897844250569536967707854499699679468644549059879316368892300987931277361782154249992295763514822082698951936680331825288693984964651058209392398294887933203625094431173012381970684161403970198376793206832823764648042953118023287825098194558153017567173613320698112509961818815930416903515988885193458072738667385894228792284998920868058257492796104841984443634632449684875602336248270419786232090021609902353043699418491463140934317381436405462531520961836908887070167683964243781405927145635490613031072085103837505101157477041718986106873969655212671546889570350354';
                    setSymbol('e');
                    break;
            }
        }

        if (router.query.digits)
            newDigits=router.query.digits as string;
        
        setDigits(newDigits);
        
        setContent(newDigits.slice(0, 2));
    }, [router.isReady, router.query]);

    const [showInstructions, setShowInstructions]=useState<boolean>(false);

    const [numDigits, setNumDigits]=useState<number>(0); //number of digits typed
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
        if (digits[index]===character) {
            setContent(content+character);
            setNumDigits(numDigits+1);
        } else {
            triggerRed();
        }

        setShowNextLetter(false);
    }
    
    return <Page
        pathname='/learn/number'
        seo={{
            title: 'Memorize a Number',
            description: 'Tool for memorizing the digits of any number like e, pi, tau, or your own number.',
        }}
        noPageStyling
    >
        <h1 className='text-center'>Memorize {symbol}</h1>
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
                { showNextLetter && <span className='text-green-600 underline'>{digits[numDigits+2]}</span> }
            </span>
        </div>
        { true && <p className='mt-5'>You have typed {numDigits} digits</p> }
    </Page>;
}
