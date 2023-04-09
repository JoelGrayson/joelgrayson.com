export interface Machine {
    // date: string;
    // title: string;
    // youtubeUrl: string;
    sortBy: {
        rank: Number; //lower is better
        date: Date;
        title: string;
    };
    html?: JSX.Element;
};

export function DefaultTemplate({date, title, desc, yt}: any) {
    return <div>
        <div className='date'>{date}</div>
        <h3 className='title'>{title}</h3>
        <div className='desc'>{desc}</div>
        {yt && <Yt>{yt}</Yt>}
    </div>;
}

export function Yt({children}: any) {
    return <iframe width='560' height='315' src={`https://www.youtube.com/embed/${children}`} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>;
}
