import Page from '@/components/page-client/DefaultPage';
import Button from '@jcomponents/button';
import localFont from 'next/font/local';

const joelFont=localFont({ src: 'JoelHandwriting.ttf' });

export default function Font() {
    return <Page>
        <div className={joelFont.className}>
            <h1 className='custom-font text-center'>Joel Font</h1>
            {/* <p>Joel Font</p> */}
            <p>Want to forge a letter as written by Joel? You can now type up a message in Joel&apos;s handwriting using the Joel font.</p>
            <p>My handwriting sucks, so I don&apos;t know why you would want to use it, but it has a fun, real feel to it.</p>
            <p>The quick brown fox jumps over the lazy dog.</p>
            <h3 className="custom-font">Download Joel Font</h3>
            <a href="/font/JoelHandwriting.ttf">
                <Button>Download as TTF</Button>
            </a>
            <br />
            <a href="/font/JoelHandwriting.otf">
                <Button>Download as OTF</Button>
            </a>
        </div>
    </Page>;
}