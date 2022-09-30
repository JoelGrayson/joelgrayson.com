import React, { useState } from 'react';
import Button, { ButtonIcon, PuffyButton, } from '@jcomponents/button';
import Page from '../../../components/@jcomponents/Page';
import Code from '../../../components/@jcomponents/Code';
import { SketchPicker } from 'react-color';

export default function ButtonDoc() {
    const [demoColor, setDemoColor]=useState('#cceeff');
    
    return (<Page>
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
                    <code className='light' style={{width: 'max-content'}}>npm i @jcomponents/button</code>
                    <button onClick={_=>navigator.clipboard.writeText('npm i @jcomponents/button')}>Copy</button>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <h4>Default Button</h4>
        <Code>{`
import Button from '@jcomponents/button';

<Button>Default</Button>
<Button color='#f9c44d'>Custom Color #f9c44d</Button>
<Button color='jred'>JRed</Button>
<Button color='jyellow'>JYellow</Button>
<Button color='jgreen'>JGreen</Button>
<Button color='jblue'>JBlue</Button>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <Button>Default</Button>
            <br/>
            <Button color='#f9c44d'>Custom Color #f9c44d</Button>
            <br/>
            <Button color='jred'>JRed</Button>
            <br/>
            <Button color='jyellow'>JYellow</Button>
            <br/>
            <Button color='jgreen'>JGreen</Button>
            <br/>PuffyButton
            <Button color='jblue'>JBlue</Button>
        </div>

        <h4>Button Icon</h4>
        <Code>{`
import { ButtonIcon } from '@jcomponents/button';

<ButtonIcon>
    <svg style={ ButtonIconStyle } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
    <span>Download Presentation</span>
</ButtonIcon>
        `}</Code>
        <div>
            <p>Rendered result:</p>
            <ButtonIcon>
                <svg style={ButtonIconStyle} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
                <span>Download Presentation</span>
            </ButtonIcon>
        </div>

        <h4>Puffy Button</h4>
        <Code>{`
import { PuffyButton } from '@jcomponents/button';

<PuffyButton>Click me</PuffyButton>`}</Code>
        <div>
            <p>Rendered result:</p>
            <PuffyButton>Click me</PuffyButton>
        </div>



        <h3>Interactive demo</h3>
        <div style={{
            display: 'flex',
            width: 400,
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div> {/* Left */}
                <div style={{marginBottom: '11px'}}>Pick a color below:</div>
                <SketchPicker
                    color={demoColor}
                    onChangeComplete={e=>setDemoColor(e.hex)}
                />
                {/* <input type="color" value={demoColor} onChange={e=>setDemoColor(e.target.value)}/> */}
                {/* <input type="text" value={demoColor} onChange={e=>setDemoColor(e.target.value)} /> */}
            </div>
            <div> {/* Right */}
                <div style={{padding: '15px 0', textAlign: 'center'}}>Result:</div>
                <Button color={demoColor}>Try it!</Button>
            </div>
        </div>
    </Page>);
}
