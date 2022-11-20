import Page from '../../../components/@jcomponents/Page';
import Code from '../../../components/@jcomponents/Code';
import Button from '@jcomponents/button';

export default function ContainerDoc() {
    return (<Page>
        <h1 style={{textAlign: 'center'}}>Container</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    Choose max-width.
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/container</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/container'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>{`
<Nav>
    <NavItem Link={Link} href='/'>All</NavItem>
    <NavItem Link={Link} href='/header'>Header</NavItem>
    <NavItem Link={Link} href='/modal'>Modal</NavItem>
    <NavItem Link={Link} href='/button'>Button</NavItem>
    <NavItem Link={Link} href='/link'>Link</NavItem>
    <NavItem Link={Link} href='/nav'>Nav</NavItem>
    <NavItem Link={Link} href='/container'>Container</NavItem>
</Nav>
        `}</Code>
        
        <div>
            <p>The rendered result is the header you see at the top of the page</p>
        </div>
    </Page>);
}
