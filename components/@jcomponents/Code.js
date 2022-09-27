import { CopyBlock, dracula } from 'react-code-blocks';

export default function Code({children}) {
    return (<div style={{fontFamily: 'fira code'}}>
            <CopyBlock 
                language='jsx'
                text={children.trim()}
                codeBlock
                theme={dracula}
            />
    </div>);
}
