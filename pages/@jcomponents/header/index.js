import Page from '../../../components/@jcomponents/Page';
import Code from '../../../components/@jcomponents/Code';

export default function HeaderDoc() {
    return (<Page>
        <h1 style={{textAlign: 'center'}}>Header</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    Left and right sides.
                    For example, you can put your website's icon on the left and the navigation on the right.
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='light' style={{width: 'max-content'}}>npm i @jcomponents/header</code>
                    <button onClick={_=>navigator.clipboard.writeText('npm i @jcomponents/header')}>Copy</button>
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
    </Page>);
}
