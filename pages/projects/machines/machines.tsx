import Link from 'next/link';
import Image from "next/image";

interface Machine {
    // date: string,
    // title: string,
    // youtubeUrl: string,
    sortBy: {
        rank: Number, //lower is better
        date: Date,
        title: string
    }
    html: JSX.Element
}

export default function DefaultTemplate({date, title, desc, yt}: any) {
    return (<div>
        <div className='date'>{date}</div>
        <h3 className='title'>{title}</h3>
        <div className='desc'>{desc}</div>
        {yt && <Yt>{yt}</Yt>}
    </div>);
}

function Yt({children}: any) {
    console.log(children)
    return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${children}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>;
}

export const machines: Machine[]=[
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 15, 2021'), //sort by date of project
            title: 'Guardbox' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.15.2021',
            title: <>Guardbox <small>(Arduino Safe)</small></>,
            desc: (<>
                The challenge was to create and present a safe in under 24 hours using Arduino. <br/> Code: <Link href='https://github.com/JoelGrayson/Guardbox'><a>github.com/JoelGrayson/Guardbox</a></Link>
            </>),
            yt: 'DbfRmZZx4VA'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('July 12, 2021'), //sort by date of project
            title: 'Guardbox' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '7.12.2021',
            title: <>Eater <small>(Arduino Game)</small></>,
            desc: (<>
                The challenge was to create and present a safe in under 24 hours using Arduino. <br/> Code: <Link href='https://github.com/JoelGrayson/Guardbox'><a>github.com/JoelGrayson/Guardbox</a></Link>
            </>),
            yt: 'DbfRmZZx4VA'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 27, 2021'), //sort by date of project
            title: 'Nuclear Dystopia' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '5.27.2021',
            title: <>Nuclear Dystopia</>,
            desc: (<>
                <div>This project depicts the dystopian world many people imagine at the thought of nuclear energy.
                As a nuclear proponent myself (I wrote an article on my thoughts here), I wanted to explore the fear.</div>
                <div>Website: <Link href="https://joelgrayson.github.io/nuclear-dystopia"><a>joelgrayson.github.io/nuclear-dystopia</a></Link></div>
                <div>Code: <Link href="https://github.com/JoelGrayson/Guardbox"><a>github.com/JoelGrayson/Guardbox</a></Link></div>
            </>),
            yt: 'DbfRmZZx4VA'
        })
    },
    {
        sortBy: {
            rank: 2, //sort by best project
            date: new Date('May 6, 2021'), //sort by date of project
            title: 'Deepfaking Dean (April Fools)' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '4.12.21',
            title: <>Deepfaking Dean <small>(April Fools)</small></>,
            desc: <div>At a grade meeting for April Fools, I surprised the students and faculty by pretending to be my dean through a deepfake. For the first few minutes, the students had no idea I was fake, but I kept saying stranger and stranger announcements such as the school was shut down because of a crocodile infestation (the school often shut down due to outbreaks) until the real Mr. Hager came in and all of a sudden there were two Mr. Hagers! We argued over who is the real Mr. Hager. Then, I spammed the meeting with three more Mr. Hager&apos;s, who all claimed to be the real Mr. Hager. It took a few months to prepare with OBS, python colab, and eGPUs but it was totally worth it.</div>,
            yt: 'OnEDlj8JdeA'
        })
    },
    {
        sortBy: {
            rank: 3, //sort by best project
            date: new Date('May 27, 2021'), //sort by date of project
            title: 'Fundraising for the American Red Cross' //sort alphabetically
        },
        html: DefaultTemplate({
            date: '5.27.2021',
            title: <>Fundraising for the American Red Cross</>,
            desc: (<>
                <Image src='/image/machines/1.jpg' width='222' height='232' alt='Fundraising for American Red Cross'  />
                <Image src='/image/machines/2.jpg' width='343' height='240' alt='Customer interacting with stand' />
            </>),
            yt: 'DbfRmZZx4VA'
        })
    },
];
