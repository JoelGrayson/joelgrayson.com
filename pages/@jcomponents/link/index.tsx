import Link from '@jcomponents/link';
import Page from '../../../components/@jcomponents/Page';
import Code from '../../../components/@jcomponents/Code';
import Button from '@jcomponents/button';

export default function LinkDoc() {
    return <Page>
        <h1 style={{textAlign: 'center'}}>Link</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    <b><i>No configuration necessary.</i></b>
                    <br/>
                    Want a fancy link on your site, but don&apos;t want to have to configure it like mad? This package can be used just like &lt;a href=&quot;&quot;&gt;&lt;/a&gt;, but it shows a popup modal of where the address is and is an aesthetically pleasing rainbow when hovered.
                    <br/><br/>
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/link</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/link'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>{`
import Link from '@jcomponents/link';

<Link href='https://www.joelgrayson.com'>Visit my site</Link>
        `}</Code>
        
        <div>
            <p>Rendered result</p>
            <Link href='https://www.joelgrayson.com'>Visit my site</Link>
        </div>
    </Page>;
}
