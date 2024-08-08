import Page from '@/components/@jcomponents/Page';
import Code from '@/components/@jcomponents/Code';
import Button from '@jcomponents/button';

export default function NavDoc() {
    return <Page>
        <h1 style={{textAlign: 'center'}}>Nav</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    The Nav &amp; NavItem element can be used to quickly &amp; easily create headers that update to show which page you are on.
                    <br/><br/>
                    If used in next.js, you can pass in next&apos;s Link from next/link into the Link property of NavItem. Otherwise, if you are just in plain react, skip this step.
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/nav</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/nav'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>{` 
import Nav from '@jcomponents/nav';

<Nav>
    <Nav.Item href='/'>All</Nav.Item>
    <Nav.Item href='/header'>Header</Nav.Item>
    <Nav.Item href='/modal'>Modal</Nav.Item>
    <Nav.Item href='/button'>Button</Nav.Item>
    <Nav.Item href='/link'>Link</Nav.Item>
    <Nav.Item href='/nav'>Nav</Nav.Item>
    <Nav.Item href='/container'>Container</Nav.Item>
</Nav>
        `}</Code>
        
        <div>
            <p>The rendered result is the header you see at the top of the page</p>
        </div>
    </Page>;
}
