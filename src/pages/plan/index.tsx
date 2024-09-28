import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React, { useState } from "react";

export const docLink=(docId: string)=>`https://docs.google.com/document/d/${docId}/edit?rm=minimal`;
export const agendas={
    Stanford: '1qycEgNsSO5NWP2lLadGTdrrtkHG8NpnczlBO6wsbPTE',
    // Buseroo: '15hOxtH4xDGnUgq9SdqmWNSG0KihnXwN1iKZNpW4-FXw',
    Buseroo: '178K4aj2UBrius1bJ5KeHKSDHVrvfc0Lh4M-C-G_V6Ts',
    Learning: '1Ti-tIRjmDKavivuanMBjT9UZwKb7mFRr9NUBtKgn-BA',
};

export default function Plan() {
    type DocId=string;
    const [expanded, setExpanded]=useState<DocId | false>(false);
    
    return <div>
        <Head>
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
            <title>Joel&apos;s Plan</title>
        </Head>
        { !expanded && <h1 className="text-center">Joel&apos;s Plan</h1> }

        <div className={expanded ? '' : "grid grid-cols-2 gap-5 mx-5"}>
            {
                // eslint-disable-next-line
                Object.entries(agendas).map(([name, docId], i)=>{
                    if (expanded && expanded!==docId)
                        return <React.Fragment key={docId} />;

                    return <div key={docId} className="relative" style={{
                        width: expanded ? '100dvw' : '100%',
                        height: expanded===docId ? '100dvh' : 500,
                    }}>
                        <iframe src={docLink(docId)} style={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid gray'
                        }} />
                        <div onClick={()=>{
                            if (expanded===docId)
                                setExpanded(false);
                            else
                                setExpanded(docId);
                        }} className="cursor-pointer absolute top-2 right-2">
                            <FontAwesomeIcon icon={expanded===docId ? faCompress : faExpand} size="xl" />
                        </div>
                    </div>;
                })
            }
            { !expanded && <div style={{
                width: 750,
                height: 500,
            }}>
                <ul className="mt-8 text-lg">
                    <li>Journal</li>
                    <li>Project</li>
                    <li>Habit</li>
                    <li>Numbers</li>
                    <li>BulletBrainstorm.com</li>
                    <li>MemorizeThePresidents.com</li>
                </ul>
            </div> }
        </div>
        
    </div>;
}
