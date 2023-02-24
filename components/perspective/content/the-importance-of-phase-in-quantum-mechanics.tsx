export const title='The Importance of Phase in Quantum Mechanics';
export const date=new Date('Jan 21, 2023'); //published date
import { P, TeX } from '../Components';

export default function TheImportanceOfPhaseInQuantumMechanics() {
    return <div>
        <P>Although when finally measuring, the phase does not play an impact on the probability of measuring a state, it does play an impact in the quantum circuit before measurement when quantum gates are applied. While an entangled state is going through a quantum circuit, its phase is affected by its interactions with the gates and can lead to different probabilities. For example, <TeX>{String.raw`|+\rangle`}</TeX> and <TeX>{String.raw`|-\rangle`}</TeX> when measured have the same 50-50 probability of measuring <TeX>{String.raw`|0\rangle`}</TeX> or <TeX>{String.raw`|1\rangle`}</TeX> (the phase does not impact measurement), but in <TeX>{String.raw`H|+\rangle → |0\rangle`}</TeX> and <TeX>{String.raw`H|-\rangle → |1\rangle`}</TeX>, the phase does impact the final measurement.</P>
        <P>The phase stores extra information, which can be extracted through gates like the Hadamard gate.</P>

        <br /><br />
    </div>;
}
