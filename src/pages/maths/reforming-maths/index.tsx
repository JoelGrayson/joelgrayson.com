import MathsReturnButton from 'src/components/MathsReturnButton';
import Page from '@/components/page/DefaultPage';
import Script from 'next/script';

const r=String.raw;

export default function ReformingMath() {
    return <Page bottomPadding>
        <MathsReturnButton />
        
        <Script src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' async id="MathJax-script"></Script>

        <h1 className='text-center text-4xl my-10'>Reforming Math</h1>
        <p>Here are my suggestions for making math notation better:</p>
        <ul>
            {/* <li>Instead of \(\int\;dx\), use \(dx\over d\). From my basic understanding of calculus, \(\int\) does the same thing as \(\frac1d\). It is confusing to me to have different symbols mean the same thing.</li> */}
                {/* ∫=1/d  dx/d for ∫ dx */}
            <li>Use \(\tau\) instead of \(\pi\) for the circle constant</li>
            <li>Instead of writing {r`\(a_{12}\)`} to mean the edge between points \(1\) and \(2\) in graph theory, write {r`\(a_{1\leftrightarrow2}\)`}. Otherwise, it looks like indexing \(12\) of \(a\). When indexing a 2d-array, write {r`\(a_{1,2}\)`} instead of {r`\(a_{12}\)`}. In a 100x100 array, {r`\(a_{12}\)`} should return a 1x100 vector (analogous to a[12]), not a number (analogous to a[1][2])</li>
            <li>
                A big source of confusion in math is not knowing what letter variables stand for. The problem with saying {r`\(\text{charge}=\text{capacitance}\times \text{voltage}\)`} is that it can be interpreted as
                \(
                    c\times h\times a\times r\times g\times e=c\times a\times p\times a\times c\times i\times t\times a\times n\times c\times e\times v\times o\times l\times t\times a\times g\times e
                \). The solution is to write a line over multiletter variables (inspired by the usage of the vinculum as a grouping operator).
                <br />
                Write {r`\(\overline{\text{charge}}=\overline{\text{capacitance}}\ \overline{\text{voltage}}\)`}
                <br />
                If you want start the equation with a multiletter variable and use single-letter variables later, you can use \(\rm as\), like so:
                <br />
                {r`\[\overline{\text{charge as Q}}=\overline{\text{capacitance as C}}\times\overline{\text{voltage as V}}\]`}
                {r`\[V=\frac{Q}C\]`}
            </li>
            <li>
                {r`\(\sin^2(x)\)`} should mean {r`\(\sin(\sin(x))\)`} and {r`\(sin^{-1}(x)\)`} should mean \(arcsin(x)\) whereas <br />
                {r`\(\sin(x)^2\)`} should mean {r`\(\sin(x)\cdot \sin(x)\)`} and {r`\(\sin(x)^{-1}\)`} should mean {r`\(\frac1{\sin(x)}\)`}
            </li>
            <li>
                <div>Problem: \((1, π)\) can be a cartesian or polar coordinate{/* or GCD or interval */}.</div>
                <div>
                    Solution: make polar coordinates explicitly polar with a \(^p\) superscript, such as \((1, π)^p\). You only have to do this if it is unclear.
                </div>
            </li>
            <li>
                <div>Use == when writing a proof, so that you remember that you cannot manipulate both sides like an equation. For example, prove {r`\(\frac{\cos 2x-1}{\sin 2x}==-\tan x\)`}</div>
            </li>
        </ul>

        <h3>Reforming Physics</h3>
        <ul>
            <li>Make an electron positive charge</li>
            <li>Use moles of e as a unit of charge instead of coulombs C because that way it is easier to visualize as opposed to being a completely arbitrary unit.</li>
            <li>Do not use {r`\frac{1}{4\pi\epsilon_0}`}</li>
        </ul>
    </Page>;
}
