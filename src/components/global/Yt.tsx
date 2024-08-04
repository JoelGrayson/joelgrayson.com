import { ReactNode } from "react";

export default function Yt({ children, width=476, ...props }: { children: string | ReactNode; width?: number; [props: string]: any }) {
    return <iframe width={width} height={width/476*268} src={`https://www.youtube.com/embed/${children}?rel=0`} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen {...props} />;
}
