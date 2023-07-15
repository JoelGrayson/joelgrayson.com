import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function RunProcessingInWeb() {
    const [title, setTitle]=useState<string>('');
    const [processingCode, setProcessingCode]=useState<string>([
        'void setup() {',
        '    ',
        '}',
        'void draw() {',
        '    ',
        '}'
    ].join('\n'));
    const [htmlCode, setHtmlCode]=useState<string>('');
    
    function generate() { //generates html code from processing code
        setHtmlCode(
`<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>
    </head>
    <style>
        body {
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <script type="application/processing">
${processingCode}
        </script>
        <canvas id="sketch"></canvas>
    </body>
</html>`
        );
    }
    
    return <Page bottomPadding noPageStyling>
        <h1>Run Processing in Web</h1>
        <h3>Processing Code</h3>
        <div className='flex gap-2 items-center mb-3'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <Editor
            defaultLanguage='java'
            width='100ch' height='30ch'
            defaultValue={processingCode} onChange={value=>setProcessingCode(value || '')}
            className='!transition-none'
         />
        <br />
        <Button onClick={generate}>Generate HTML Code</Button>
        <br /><br />

        { htmlCode && <>
            <h3>HTML Code</h3>
            <textarea name='HTML' id='html-code' cols={50} rows={8} value={htmlCode}></textarea>
        </> }
        <br />
        <Button onClick={()=>window.navigator.clipboard.writeText(htmlCode)}>Copy</Button>
    </Page>;
}
