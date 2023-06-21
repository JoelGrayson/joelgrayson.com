import ArticleWrapper from '@/components/perspective/ArticleWrapper';
import { P } from '@jcomponents/writing-components';
import LaTeX from '@jcomponents/latex'; //heavy package

export default function TheImportanceOfPhaseInQuantumMechanics() {
    return <ArticleWrapper title='The Importance of Phase in Quantum Mechanics' date={new Date('Jan 21, 2023')} hyphenatedTitle='the-importance-of-phase-in-quantum-mechanics'>
        <P>Although when finally measuring, the phase does not play an impact on the probability of measuring a state, it does play an impact in the quantum circuit before measurement when quantum gates are applied. While an entangled state is going through a quantum circuit, its phase is affected by its interactions with the gates and can lead to different probabilities. For example, <LaTeX>{String.raw`|+\rangle`}</LaTeX> and <LaTeX>{String.raw`|-\rangle`}</LaTeX> when measured have the same 50-50 probability of measuring <LaTeX>{String.raw`|0\rangle`}</LaTeX> or <LaTeX>{String.raw`|1\rangle`}</LaTeX> (the phase does not impact measurement), but in <LaTeX>{String.raw`H|+\rangle → |0\rangle`}</LaTeX> and <LaTeX>{String.raw`H|-\rangle → |1\rangle`}</LaTeX>, the phase does impact the final measurement.</P>
        <P>The phase stores extra information, which can be extracted through gates like the Hadamard gate.</P>
    </ArticleWrapper>;
}
