import Yt from "@/components/global/Yt";

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
    return <div className='relative my-[30px]'>
        <div className='date'>{date}</div>
        <h3 className='title'>{title}</h3>
        <div className='desc'>{desc}</div>
        {yt && <Yt>{yt}</Yt>}
    </div>;
}
