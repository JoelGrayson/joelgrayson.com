import Page from '@/components/@jcomponents/Page';
import Code from '@/components/@jcomponents/Code';
import Button from '@jcomponents/button';

export default function HeaderDoc() {
    return <Page>
        <h1 style={{textAlign: 'center'}}>Header</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    Left and right sides.
                    For example, you can put your website&apos;s icon on the left and the navigation on the right.
                    The header has a default height of 100px.
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/header</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/header'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>{`
<Header>
    <div> {/* Left */}

    </div>
    <div> {/* Right */}

    </div>
</Header>
        `}</Code>
        
        <div>
            <p>The rendered result is the header you see at the top of the page</p>
        </div>
    </Page>;
}
