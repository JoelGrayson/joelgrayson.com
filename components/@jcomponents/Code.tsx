import { CopyBlock, dracula } from 'react-code-blocks';

export default function Code({children, language='jsx'}: {children: string; language?: string}) {
    return <div style={{fontFamily: 'fira code'}}>
            <CopyBlock
                language={language}
                text={children.trim()}
                theme={dracula}
                codeBlock
            />
    </div>;
}
