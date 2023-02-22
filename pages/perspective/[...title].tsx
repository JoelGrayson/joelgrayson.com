import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import PerspectiveBody from "@/components/perspective/PerspectiveBody";
import jdate from 'joeldate';
// import prisma from "@/components/prisma/client";

export default function Article({ notitle=false, nodate=false }: { notitle?: boolean; nodate?: boolean }) {
    const hyphenatedTitle=useRouter().query.title?.[0];
    const [content, setContent]=useState<JSX.Element | null>(null);
    const [title, setTitle]=useState<string | null>(null);
    const [date, setDate]=useState<Date | null>(null);
    
    useEffect(()=>{
        if (!hyphenatedTitle) return; //loading
        
        import(`@/components/perspective/content/${hyphenatedTitle}`)
            .then((imported: { default: JSX.Element; title: string; date: Date })=>{
                setContent(imported?.default || null);
                setTitle(imported.title);
                setDate(imported.date);
            })
            .catch(e=>{
                if (e.code==='MODULE_NOT_FOUND') { //article does not exist
                    setTitle('404');
                    setContent(<p className='text-center'>The article titled &quot;{hyphenatedTitle}&quot; does not exist.</p>);
                } else //unknown error
                    console.log('Unknown error', e);
            });
    }, [hyphenatedTitle]);
    
    return <PerspectiveBody>
        {(hyphenatedTitle && content && title) ? <>
            {!notitle && <h1 style={{fontSize: '2.5rem', textAlign: 'center'}}>{title}</h1>}
            {!nodate && <div className='text-right mb-6'>{date && jdate(date)}</div>}
            {content}
        </>
        : <p>Loading...</p>}
    </PerspectiveBody>;
}
