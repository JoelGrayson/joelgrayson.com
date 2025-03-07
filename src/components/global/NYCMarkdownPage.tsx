import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import NYCPage from './NYCPage';

export default function NYCMarkdownPage({ filename }: { filename: string /* string ending in .md */ }) {
    if (!filename.endsWith('.md'))
        filename+='.md';

    const [markdown, setMarkdown]=useState('');

    useEffect(() => {
        fetch(`/nyc/nyc-government/${filename}`) //from public folder
            .then((res)=>res.text())
            .then((text)=>setMarkdown(text))
            .catch((err)=>console.error(err));
    }, [filename]);

    return <NYCPage>
        <Markdown options={{
            // wrapper: 'div'
            overrides: {
                h1: {
                    component: 'h1',
                    props: {
                        className: 'text-center',
                    },
                },
                table: {
                    component: 'table',
                    props: {
                        className: 'j_table_no_padding'
                    }
                },
                strong: {
                    component: 'b',
                    props: {
                        className: 'bold'
                    }
                }
            }    
        }}>
            {markdown}
        </Markdown>
    </NYCPage>;
}

