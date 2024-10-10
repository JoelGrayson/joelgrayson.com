import Image from 'next/image';

export const symbols: {
    name: string;
    meaning: string;
    origin?: string;
    creationYear: number;
    textVersion?: string;
    latexVersion?: string;
}[]=[
    { name: 'simplifies-to', meaning: 'simplifies to', origin: 'math', creationYear: 2018, textVersion: '->', latexVersion: '\\rightarrow' },
    { name: 'portal', meaning: 'portal to diff place in book with similar idea (ie foreshadowing)', origin: '', creationYear: 2019, textVersion: '⟐ portal' },
    { name: 'is', meaning: 'is (Russians use em dashes in place of to be verbs)', origin: 'Russian', creationYear: 2019, textVersion: '— em dash' },
    { name: 'thing', meaning: 'thing', origin: '', creationYear: 2020, textVersion: '⋈ thing', latexVersion: '\\bowtie' },
    { name: 'always', meaning: 'always', origin: 'math', creationYear: 2020, textVersion: '∀ always' },
    { name: 'good-bad', meaning: 'good/bad', origin: '', creationYear: 2020, textVersion: '👍👎 good, bad' },
    { name: 'what', meaning: 'what', origin: '', creationYear: 2020, textVersion: '⍰ what' },
    { name: 'where', meaning: 'where', origin: '', creationYear: 2020, textVersion: '📍 where' },
    { name: 'who', meaning: 'who', origin: '', creationYear: 2020, textVersion: 'ዶ person' },
    { name: 'when', meaning: 'when', origin: '', creationYear: 2020, textVersion: '🕒 when' },
    { name: 'because', meaning: 'because', origin: 'math', creationYear: 2020, textVersion: '∵ because' },
    { name: 'therefore', meaning: 'therefore', origin: 'math', creationYear: 2020, textVersion: '∴ therefore' },
    { name: 'of', meaning: 'of in one letter', origin: '', creationYear: 2020, textVersion: 'null' },
    { name: 'not', meaning: 'not', origin: '', creationYear: 2020, textVersion: 'ø ⌥o, not' },
    { name: 'subset', meaning: 'subset (part of)', origin: 'math', creationYear: 2020, textVersion: '⊂ subset (proper)' },
    { name: 'not-part-of', meaning: 'not part of', origin: 'math', creationYear: 2020, textVersion: '⊆ subset (improper)' },
    { name: 'there-exists-there-does-not-exist', meaning: 'there exists/there does not exist', origin: 'math', creationYear: 2020, textVersion: '∃ there exists, there are, hay' },
    { name: 'person', meaning: 'person', origin: '', creationYear: 2020, textVersion: 'ዶ person' },
    { name: 'book', meaning: 'book', origin: '', creationYear: 2020, textVersion: '📖  book' },
    { name: 'simplec', meaning: 'simple compiler (ie complex -simplec→ simple)', origin: 'java', creationYear: 2021, textVersion: 'simplec', latexVersion: '\\underrightarrow{simplec}' },
    { name: 'or', meaning: 'or', origin: 'regex', creationYear: 2021, textVersion: '| pipe' },
    { name: 'sub', meaning: 'place this symbol immediately underneath a category and list the category explanation\nie\n# Mitochondria\n↳ Powerhouse of the cell\n• ...', origin: '', creationYear: 2021, textVersion: '↳ sub', latexVersion: '\\hookrightarrow' },
    { name: 'want', meaning: 'Want something', origin: '', creationYear: 2021, textVersion: 'null ' }
];

export default function Symbols() {
    return <table className="styled">
        <thead>
            <tr>
                <th>Image</th>
                <th>Meaning</th>
                <th>Origin</th>
                <th>Creation Year</th>
                <th>Text Version</th>
            </tr>
        </thead>
        <tbody>
            {symbols.map(symbol=>
                <tr key={symbol.name}>
                    <td>
                        <Image src={`/image/notation/${symbol.name}.png`} alt={symbol.name} width={30} height={30} />
                    </td>
                    <td>{symbol.meaning}</td>
                    <td>{symbol.origin}</td>
                    <td>{symbol.creationYear}</td>
                    <td>{symbol.textVersion}</td>
                </tr>
            )}
        </tbody>
    </table>;
}

