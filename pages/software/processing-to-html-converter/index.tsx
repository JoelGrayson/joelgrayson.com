import Page from '@/components/page/DefaultPage';
import Button from '@jcomponents/button';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Modal from '@jcomponents/modal';

export default function RunProcessingInWeb() {
    const [title, setTitle]=useState<string>('');
    const [infoModalOpen, setInfoModalOpen]=useState<boolean>(false);
    const [processingCode, setProcessingCode]=useState<string>([
        // Default code
        'void setup() {',
        '    ',
        '}',
        'void draw() {',
        '    ',
        '}'
    ].join('\n'));
    const [htmlCode, setHtmlCode]=useState<string>('');
    
    function polyfillProcessingCode(code: string): string {
        while (true) { //replace circle($1, $2, $3) with ellipse($1, $2, $3, $3)
            const res=code.match(/circle\((.*,.*,)(.*)\)/);
            if (!res) break;
            code=code.replace(res[0], `ellipse(${res[1]}${res[2]}, ${res[2]})`); //repeat the last parameter
        }
        while (true) { //square -> rect
            const res=code.match(/square\((.*,.*,)(.*)\)/);
            if (!res) break;
            code=code.replace(res[0], `rect(${res[1]}${res[2]}, ${res[2]})`); //repeat the last parameter
        }
        return code;
    }
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
${polyfillProcessingCode(processingCode)}
        </script>
        <canvas id="sketch"></canvas>
    </body>
</html>`
        );
    }
    
    return <Page bottomPadding noPageStyling seo={{
        title: 'Processing to HTML Converter',
        description: 'Convert your Processing code into HTML that runs on the browser.',
        keywords: ['processing']
    }}>
        <div className="flex justify-center">
            <h1 className='text-center text-5xl py-10'>Processing to HTML Converter</h1>
            <FontAwesomeIcon icon={faCircleInfo} width={30} className='ml-4' onClick={()=>setInfoModalOpen(true)} title='About this tool' />
        </div>
        <p>Run your Processing code in the browser.</p>
        
        <h2>Processing Code</h2>
        <div className='flex gap-2 items-center mb-3'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <Editor
            defaultLanguage='java'
            width='100ch' height='30ch'
            defaultValue={processingCode} onChange={value=>setProcessingCode(value || '')}
         />
        <br />
        <Button onClick={generate}>Generate HTML Code</Button>
        <br /><br />

        { htmlCode && <>
            <h2>HTML Code</h2>
            <Editor
                defaultLanguage='html'
                width='100ch' height='30ch'
                value={htmlCode}
                onMount={editor=>editor.getModel()?.updateOptions({ tabSize: 4 })} //set tab size to 4
            />
        </> }
        <br />
        <Button onClick={()=>window.navigator.clipboard.writeText(htmlCode)}>Copy</Button>

        <Modal open={infoModalOpen} setOpen={setInfoModalOpen}>
            <h2 className='text-center'>About</h2>
            <p>This tool converts your Processing code into HTML code using the <a href='https://happycoding.io/tutorials/processing/processing-js' target='_blank'>processing.js</a> library. It polyfills the following features to fit processing.js&apos;s limited API:</p>
            <ul>
                <li>circle()</li>
                <li>square()</li>
            </ul>
            <p className='mt-6'>Note: due to the limitations of the processing.js library, the generated HTML code may not work for all Processing features. I recommend you code in p5js or just use the raw &lt;canvas&gt; API if you want to develop sketches for the web.</p>
        </Modal>
    </Page>;
}
