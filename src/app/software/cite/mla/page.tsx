import { AppPage } from '@/components/page/DefaultPage';
import Image from 'next/image';
import Tool from '@/app/software/cite/mla/Tool';

export const metadata={
    title: 'MLA Cite',
    description: 'MLA citation guide and tool'
};

// TODO: add option for making publication date text. Have [date input] or [text input] so you can do Sept 2020 or Spring 2019 for example

export default function MLACite() {
    const codeStyle={
        background: 'rgba(100, 100, 100, 0.2)',
        borderRadius: 4
    };
    const h3Style={
        paddingTop: 20
    };
   
    return <AppPage bottomPadding pathname='/software/cite/mla'>
        <h1 className='gap-5 text-center'>MLA Citation Generator</h1>

        <h2>Tool</h2>
        <Tool />


        <h2 className='mt-8'>Citation Guide</h2>

        <h3 style={h3Style}  className='!pt-0 !mt-0'>Website</h3>
        <p>Format: <code style={codeStyle} >last name</code>, <code style={codeStyle} >first name</code>. &quot;<code style={codeStyle} >Website title</code>.&quot; <i><code style={codeStyle} >Website root title</code></i>, <code style={codeStyle} >publication date</code>, <code style={codeStyle} >URL</code>. <code style={codeStyle} >Accessed date</code></p>
        <p>In other words, <code style={codeStyle} >Author</code>. &quot;<code style={codeStyle} >Title</code>.&quot; <i><code style={codeStyle} >Container title</code></i>, <code style={codeStyle} >publication date</code>, <code style={codeStyle} >URL</code>.</p>
        <p>The website root title is the name of the website in general whereas the website title is the name of that specific webpage. For example, if the URL is <code style={codeStyle} >www.nytimes.com/2021/08/15/world/asia/afghanistan-taliban-kabul-surrender.html</code>, the website root title is <i><code style={codeStyle} >The New York Times</code></i> and the website title is <code style={codeStyle} >&quot;Kabul’s Sudden Fall to Taliban Ends U.S. Era in Afghanistan&quot;</code></p>

        <h4>Examples</h4>
        <p className='hanging-indent'>Eliers, Christian. “What Should I Major In? How to Choose a Major in 9 Steps.” <em>Zety</em>, 22 Nov. 2019, <a href="http://zety.com/blog/how-to-choose-a-major">zety.com/blog/how-to-choose-a-major</a>. Accessed 28 Jun. 2023.</p>
        <p className='hanging-indent'>Grayson, Joel. “Article Name.” <a href="http://joelgrayson.com"><em>joelgrayson.com</em></a>, 22 Nov 2022, <a href="http://joelgrayson.com/blog/article">joelgrayson.com/blog/article</a>. Accessed 29 Jun. 2023.</p>


        <h3 style={h3Style} >Book</h3>
        <ul>
            <li>Format: <code style={codeStyle} >Last name</code>, <code style={codeStyle} >first name</code>. <i><code style={codeStyle} >Book title</code></i>. <code style={codeStyle} >Publisher</code>, <code style={codeStyle} >Publication Date</code>.</li>
            <li>
                Full format: <code style={codeStyle} >Last</code>, <code style={codeStyle} >First</code>. <i><code style={codeStyle} >Title</code></i>. <code style={codeStyle} >City of publication</code>, <code style={codeStyle} >Publisher</code>, <code style={codeStyle} >year</code>. <code style={codeStyle} >Publication medium</code>.
                <ul>
                    <li>
                        The <code style={codeStyle} >publication medium</code> is either <code style={codeStyle} >Print</code>, <code style={codeStyle} >Digital file</code>, <code style={codeStyle} >PDF</code>, or <code style={codeStyle} >EPUB</code>.
                        <Image src='/software/cite/mla/advanced-citation-guide.jpg' alt='Advanced Citation Guide' width={300} height={248} />
                    </li>
                </ul>
            </li>
        </ul>
        

        <h3 style={h3Style} >In General</h3>
        <ul>
            <li>
                In general, MLA citations take the form <code style={codeStyle} >author</code>, <code style={codeStyle} >title of source</code>, <code style={codeStyle} >container</code>.
                <ul>
                    <li>The container gives information about where to locate the item.</li>
                    <li>Container names (such as books or website titles) are italicized.</li>
                    <li>URLs should not include the protocol (https://)</li>
                </ul>
            </li>
            <li>Citations have hanging indents, meaning for each citation, the first line is flush with the document and subsequent lines are indented, as shown in the examples.</li>
            <li>Dates are in the <code style={codeStyle} >{'{day number}{month name}{year}'}</code> format.</li>
            <li>Include city of publication before publisher if published before 1900.</li>
        </ul>

    </AppPage>;
}
