import Page from '@/components/global/Page';
import LaTeX from '@jcomponents/latex';
import Script from 'next/script';

export default function ReformingMath() {
    return <Page>
        <h1 className='text-center'>Reforming Math</h1>
        <ul>
            <li>Use <LaTeX>{String.raw`\tau`}</LaTeX> instead of <LaTeX>{String.raw`\pi`}</LaTeX> for the circle constant</li>
            <li>⟷ or → notation for an edge, not just \(G_12\) because it looks like G of the number 12. Also in physics, don’t write a_12 to mean acceleration between points 1 and 2 because it looks like acceleration at 12.</li>
            <li>
                A big source of confusion in math is not knowing what letter variables stand for. The problem with saying <LaTeX>{String.raw`\text{charge}=\text{capacitance}\times \text{voltage}`}</LaTeX> is that it looks like
                <LaTeX>{String.raw`
                    c\times h\times a\times r\times g\times e=c\times a\times p\times a\times c\times i\times t\times a\times n\times c\times e\times v\times o\times l\times t\times a\times g\times e
                `}</LaTeX>. The solution is to write a line over multiletter variables (inspired by the usage of the vinculum as a grouping operator).
                <br />
                Write <LaTeX>{String.raw`\overline{\text{charge as Q}}=\overline{\text{capacitance as C}}\times\overline{\text{voltage as V}}`}</LaTeX>
            </li>
            <li>
                {/* Use arc in front of function to be inverse. Never use <LaTeX>{`^{-1}`}</LaTeX> because it should mean reciprocal if <LaTeX>{'sin^2(x)'}</LaTeX> means <LaTeX>{'(sin(x))^2'}</LaTeX>. */}
                <LaTeX>{String.raw`\sin^2(x)`}</LaTeX> should mean <LaTeX>{String.raw`\sin(\sin(x))`}</LaTeX> and <LaTeX>{'sin^{-1}(x)'}</LaTeX> should mean <LaTeX>{'arcsin(x)'}</LaTeX> whereas <br />
                <LaTeX>{String.raw`\sin(x)^2`}</LaTeX> should mean <LaTeX>{String.raw`\sin(x)\cdot \sin(x)`}</LaTeX> and <LaTeX>{String.raw`\sin(x)^{-1}`}</LaTeX> should mean <LaTeX>{String.raw`\frac1{\sin(x)}`}</LaTeX>
            </li>
        </ul>
    </Page>;
}
