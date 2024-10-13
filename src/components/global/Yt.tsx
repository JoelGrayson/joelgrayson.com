import { ReactNode } from "react";

export default function Yt({ children, width=476, ...props }: { children: string | ReactNode; width?: any; [props: string]: any }) {
    return <iframe width={width} height={typeof width==='number' ? width/476*268 : undefined} src={`https://www.youtube.com/embed/${children}?rel=0`} style={{ aspectRatio: '16 / 9' }} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen {...props} />;
}
