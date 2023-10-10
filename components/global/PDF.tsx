export default function PDF({ src, height, ...props }: { src: string; height: any; [props: string]: any }) {
    return <object data={src} type="application/pdf" width="100%" height={height} {...props}>
        <p>Unable to display PDF file. <a href={src} target="_blank" className='styled'>Download the PDF</a> instead.</p>
    </object>;
}
