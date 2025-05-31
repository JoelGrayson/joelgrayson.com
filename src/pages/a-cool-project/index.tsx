// Takes a few seconds to load for suspense and so when texting the link it doesn't show Rick's face right away

import Loader2 from "@/components/global/Loader2";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Page from "@/components/page/DefaultPage";

export default function ACoolProject({ children }: { children: React.ReactNode }) {
    const router=useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }, 3000);
    }, [router]);

    return <Page>
        <div className="flex flex-col items-center gap-5 mt-8">
            <h1 className="text-4xl">Loading the Cool Project</h1>
            <Loader2 size={40} />
        </div>
    </Page>;
}
