import PerspectiveBody from "@/components/perspective/PerspectiveBody";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
// import prisma from "@/components/prisma/client";

export default function Article(props: any) {
    const title=useRouter().query.title?.[0];
    const [content, setContent]=useState<JSX.Element | null>(null);
    
    console.log(title, content)
    useEffect(()=>{
        import(`@/components/perspective/content/${title}`)
            .then(imported=>{
                setContent(imported?.default || null);
            })
            .catch(e=>{
                if (e.code==='MODULE_NOT_FOUND') //article does not exist
                    setContent(<div>
                        <h1>404</h1>
                        <p>The article titled &quot;{title}&quot; does not exist.</p>
                    </div>);
                else //unknown error
                    console.log('Unknown error', e);
            });
    }, [title]);

    return <PerspectiveBody>
        {content}
    </PerspectiveBody>;
}
