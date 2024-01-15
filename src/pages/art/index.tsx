import { useState } from 'react';
import Page from '@/components/page-client/DefaultPage';
import Gallery from 'src/components/gallery/Gallery';
import images from 'src/data/art';

const getDate=(name: string): Date | 'invalid date'=>{
    // name.matchAll(/\d{4}(.\d{2})?(.\d{2})?/)
    const dateStr=name.trim().split(' ')[0];
    const [year, month, day]=dateStr.match(/\d{4}(.\d{2})?(.\d{2})?/) || [];
    if (year===undefined) return 'invalid date';
    const date=new Date();
    date.setFullYear(parseInt(year));
    date.setMonth(parseInt(month) || 0);
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
  
export default function Art() {
    const [galleryOpen, setGalleryOpen]=useState<boolean>(false);
    const [index, setIndex]=useState<number>(0);

    return <Page title='Art | Joel Grayson' seo={{
        description: 'Drawings and sculptures'
    }}>
        <h1 className='text-center'>Art</h1>
        <p>&quot;Every child is an artist. The problem is how to remain an artist once he grows up.&quot; &mdash;Pablo Picasso</p>
        <div className='row-span-2 col-span-2'></div> {/* make sure that tailwind renders row-span-2 and col-span-2 */}

        {/* Grid of Images to Select From */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
            marginBottom: 50
        }}>
            {
                images.map((item, index)=>{
                    let fullName, imageClass='';
                    if (Array.isArray(item))
                        [fullName, imageClass]=item;
                    else
                        fullName=item;

                    // eslint-disable-next-line no-unused-vars
                    const { name, dateStr, date }=parse(fullName);

                    const tooltip=`${name} (${dateStr})`;
                    
                    return <span key={fullName} className={`${imageClass || ''} flex items-center justify-center`} title={tooltip}>
                        <button
                            style={{
                                backgroundColor: '#ffffffaa',
                                boxShadow: '10px 10px 35px #aaa',
                                padding: 5,
                                borderRadius: 15,
                                cursor: 'pointer'
                            }}
                            data-index={index}
                            onClick={(e: any)=>{
                                setIndex(e.target.dataset.index);
                                setGalleryOpen(true);
                            }}
                            tabIndex={0}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img data-index={index} src={`/image/art/${encodeURIComponent(fullName)}`} alt={`Artwork titled '${name}' on ${dateStr}`} title={tooltip} />
                        </button>
                    </span>;
                })
            }
        </div>


        {/* View Singular Image */}
        <Gallery images={images.map(img=>Array.isArray(img) ? img[0] : img)} renderChildren={(imagePath: string)=>{
            const { name, dateStr }=parse(imagePath);
            const title=`${name} (${dateStr})`;
            return <>
                {/* eslint-disable */}
                <img src={`/image/art/${imagePath}`} alt={`Artwork titled ${name}`} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }} />
                {/* eslint-enable */}
                <div className='text-center text-3xl font-bold mt-5'>{title}</div>
            </>;
        }} {...{galleryOpen, setGalleryOpen, index, setIndex}} />
    </Page>;
}
