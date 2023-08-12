import { CopyBlock, github } from 'react-code-blocks';

export default function Code({children, language='jsx'}) {
    return <div style={{fontFamily: 'fira code'}}>
        <CopyBlock
            language={language}
            text={children.trim()}
            showLineNumbers={false}
            theme={{...github, mode: 'dark' }}
            wrapLongLines={false}
            copied={false}
            onCopy={()=>{}}
            codeBlock
        />
    </div>;
}

// export default function Code({children, language='jsx'}: {children: string; language?: string}) {
//     return <div style={{fontFamily: 'fira code'}}>
//         <CopyBlock
//             language={language}
//             text={children.trim()}
//             showLineNumbers={false}
//             theme={{...github, mode: 'dark' }}
//             wrapLongLines={false}
//             copied={false}
//             onCopy={()=>{}}
//             codeBlock
//         />
//     </div>;
// }

