import Link from "next/link";

export default function PDF({ src, height, ...props }: { src: string; height: any; [props: string]: any }) {
    return <object data={src} type="application/pdf" width="100%" height={height} {...props}>
        <p>Unable to display PDF file. <Link href={src} target="_blank">Download the PDF</Link> instead.</p>
    </object>;
}
