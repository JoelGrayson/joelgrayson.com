import { CopyBlock, dracula } from 'react-code-blocks';

export default function Code({children}: {children: string}) {
    return (<div style={{fontFamily: 'fira code'}}>
            <CopyBlock 
                language='jsx'
                text={children.trim()}
                theme={dracula}
                codeBlock
            />
    </div>);
}
