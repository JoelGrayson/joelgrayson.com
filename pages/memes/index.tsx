import { useState } from 'react';
import Page from '@/components/global/Page';
import Gallery from '@/components/gallery/Gallery';
import memes from '@/data/memes';

const getDate=(name: string): Date | 'invalid date'=>{
    // name.matchAll(/\d{4}(.\d{2})?(.\d{2})?/)
    const dateStr=name.trim().split(' ')[0];

    // eslint-disable-next-line no-unused-vars
    const [year, month, day]=dateStr.match(/\d{4}(.\d{2})?(.\d{2})?/) || [];
    if (year===undefined) return 'invalid date';
    const date=new Date();
    date.setFullYear(parseInt(year));
    dathttp://localhost:3000/memese.setMonth(parseInt(month) || 0);
    date.setDate(parseInt(day) || 0);
    return date;
};

function parse(fullName: string) {
    return {
        dateStr: fullName.trim().split(' ')[0],
        date: getDate(fullName),
        name: fullName.trim().split(' ').slice(1).join(' ').slice(0, -4) //cut off extension
    };
}

export default function Memes() {
    const [galleryOpen, setGalleryOpen]=useState<boolean>(false);
    const [index, setIndex]=useState<number>(0);

    // useEffect(()=>{
    //     const id=setInterval(()=>{
    //         console.log('index', index);
    //     }, 1000);
    //     return ()=>clearInterval(id);
    // }, []);

    return <Page title='Art | Joel Grayson' seo={{
        description: 'Drawings and sculptures'
    }}>
        <h1 className='text-center'>Memes</h1>
        <div className='row-span-2 col-span-2 text-center mt-5 p-3'></div> {/* make sure that tailwind renders row-span-2 and col-span-2 */}

        {/* Grid of Images to Select From */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
            marginBottom: 50
        }}>
            {
                memes.map((item, index)=>{
                    let fullName;
                    let attrs: string[]=[];
                    if (Array.isArray(item)) {
                        fullName=item[0];
                        attrs=item.slice(1) as string[];
                    } else {
                        fullName=item;
                    }

                    if (typeof item==='string') { //image path
                        fullName=fullName as string;
                        // eslint-disable-next-line no-unused-vars
                        const { name, dateStr, date }=parse(fullName);

                        const tooltip=`${name} (${dateStr})`;
                        
                        return <span key={fullName} className={`${attrs.join(' ') || ''} flex items-center justify-center`} title={tooltip}>
                            <span
                                style={{
                                    backgroundColor: '#ffffffaa',
                                    boxShadow: '10px 10px 35px #aaa',
                                    padding: 5,
                                    borderRadius: 15,
                                    cursor: 'pointer'
                                }}
                                data-index={index}
                                onClick={(e: any)=>{
                                    console.log('Setting index to ', e.target.dataset.index);
                                    setIndex(e.target.dataset.index);
                                    setGalleryOpen(true);
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img data-index={index} src={`/image/memes/${fullName}`} alt={`Artwork titled '${name}' on ${dateStr}`} title={tooltip} />
                            </span>
                        </span>;
                    } else { //JSX Element
                        return <span key={index} className={`${attrs.join(' ') || ''} flex items-center justify-center`}>
                            <span
                                style={{
                                    backgroundColor: '#ffffffaa',
                                    boxShadow: '10px 10px 35px #aaa',
                                    padding: 5,
                                    borderRadius: 15,
                                    cursor: attrs.includes('not clickable') ? undefined : 'pointer'
                                }}
                                className='min-w-full'
                                data-index={index}
                                onClick={(dataIndex=>{ //data-index doesn't work because the element clicked is inside {fullName}
                                    // eslint-disable-next-line no-unused-vars
                                    return (e: any)=>{
                                        setIndex(dataIndex);
                                        setGalleryOpen(true);
                                    };
                                })(index)}
                            >
                                {fullName}
                            </span>
                        </span>;
                    }
                })
            }
        </div>


        {/* View Singular Image */}
        <Gallery images={memes.map(meme=>Array.isArray(meme) && typeof meme[0]==='string' ? meme[0] : meme)} renderChildren={(meme: string | any)=>{
            if (typeof meme==='string') {
                const { name, dateStr }=parse(meme);
                const title=`${name} (${dateStr})`;
                return <>
                    {/* eslint-disable */}
                    <img src={`/image/memes/${meme}`} alt={`Artwork titled ${name}`} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }} />
                    {/* eslint-enable */}
                    <div className='text-center text-3xl font-bold mt-5'>{title}</div>
                </>;
            } else { //JSX Element
                return <div>{Array.isArray(meme) ? meme[0] : meme}</div>;
            }
        }} {...{galleryOpen, setGalleryOpen, index, setIndex}} />
    </Page>;
}
