import Page from '../../../components/@jcomponents/Page';
import Code from '../../../components/@jcomponents/Code';
import Button from '@jcomponents/button';

export default function ModalDoc() {
    return <Page>
        <h1 style={{textAlign: 'center'}}>Modal</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium voluptate doloribus vel eaque a amet veniam repudiandae at facilis eum aliquid doloremque quo voluptatem, iste molestiae asperiores quisquam, aspernatur officiis voluptatibus porro minus nobis. Numquam saepe magnam exercitationem iste. Obcaecati aspernatur minima saepe incidunt est, sapiente illum voluptas corporis?
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/modal</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/modal'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>{`
<Modal open={open} setOpen={setOpen}>
    {contents}
</Modal>
        `}</Code>
        
        <div>
            <p>The rendered result is the header you see at the top of the page</p>
        </div>
    </Page>;
}
