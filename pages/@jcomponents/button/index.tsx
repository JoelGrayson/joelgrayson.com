import React from 'react';
import Button from '@jcomponents/button';
import Page from '@/components/@jcomponents/Page';
import Code from '@/components/@jcomponents/Code';

function Gap() { //separator
    return <div style={{height: 8}}/>;
}

export default function ButtonDoc() {
    return <Page>
        <h1 style={{textAlign: 'center'}}>Button</h1>
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
                    <code className='dark' style={{width: 'max-content'}}>npm i @jcomponents/button</code>
                    <Button.Puffy color='#e63e3f' copy='npm i @jcomponents/button'>Copy</Button.Puffy>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <Code>import Button from &apos;@jcomponents/button&apos;</Code>
        <h4>Default Button</h4>
        <Code>{`
<Button>Default</Button>
<Button color='#f9c44d'>Custom Color #f9c44d</Button>
<Button color='jred'>JRed</Button>
<Button color='jyellow'>JYellow</Button>
<Button color='jgreen'>JGreen</Button>
<Button color='jblue'>JBlue</Button>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <Button>Default</Button> <Gap/>
            <Button color='#f9c44d'>Custom Color #f9c44d</Button> <Gap/>
            <Button color='jred'>JRed</Button> <Gap/>
            <Button color='jyellow'>JYellow</Button> <Gap/>
            <Button color='jgreen'>JGreen</Button> <Gap/>
            <Button color='jblue'>JBlue</Button> <Gap/>
        </div>
        <Gap/><Gap/>

        <h4>Copying Content</h4>
        <Code>{`
<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
    <Button copy='This is the text to copy'>Copy</Button>
    <p>This is the text to copy</p>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
    <Button.Puffy copy='Lorem ipsum'>Copy</Button.Puffy>
    <p>Lorem Ipsum</p>
</div>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Button copy='This is the text to copy'>Copy</Button>
                <p>This is the text to copy</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Button.Puffy copy='Lorem ipsum'>Copy</Button.Puffy>
                <p>Lorem Ipsum</p>
            </div>
        </div>

        <h4>Using Button.Icon</h4>
        <Code>{`
<Button>
    <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
    <span>Download Presentation</span>
</Button>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <Button>
                <svg className={Button.Icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
                <span>Download Presentation</span>
            </Button>
        </div>
        <Gap/><Gap/>

        <h4>Puffy Button</h4>
        <Code>{`
<Button.Puffy>Default Puffy Button</Button.Puffy>
<Button.Puffy color='jblue'>JBlue Puffy Button</Button.Puffy>
<Button.Puffy color='jred'>JRed Puffy Button</Button.Puffy>
<Button.Puffy color='jyellow'>JYellow Puffy Button</Button.Puffy>
<Button.Puffy color='jgreen'>JGreen Puffy Button</Button.Puffy>
<Button.Puffy color='jpurple'>JPurple Puffy Button</Button.Puffy>
<Button.Puffy color='#f9c44d'>#f9c44d Picking your custom color</Button.Puffy>
<Button.Puffy color='#3505a7'>#3505a7 Picking your custom color 2</Button.Puffy>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <Button.Puffy>Default Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='jblue'>JBlue Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='jred'>JRed Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='jyellow'>JYellow Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='jgreen'>JGreen Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='jpurple'>JPurple Puffy Button</Button.Puffy> <Gap/>
            <Button.Puffy color='#f9c44d'>#f9c44d Picking your custom color</Button.Puffy> <Gap/>
            <Button.Puffy color='#3505a7'>#3505a7 Picking your custom color 2</Button.Puffy> <Gap/>
        </div>
        <Gap/><Gap/>
    </Page>;
}
