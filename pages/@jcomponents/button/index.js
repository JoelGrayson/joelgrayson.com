import React, { useState } from 'react';
import Button from '@jcomponents/button';
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
            <Button>Default</Button>
            <br/>
            <Button color='#f9c44d'>Custom Color #f9c44d</Button>
            <br/>
            <Button color='jred'>JRed</Button>
            <br/>
            <Button color='jyellow'>JYellow</Button>
            <br/>
            <Button color='jgreen'>JGreen</Button>
            <br/>
            <Button color='jblue'>JBlue</Button>
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
