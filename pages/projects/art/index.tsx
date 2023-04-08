import { useState } from 'react';
import Page from '../../../components/Page';
import Gallery from '@/components/gallery/Gallery';

const getDate: (name: string)=>Date | 'invalid date'=(name: string)=>{
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

const w2='col-span-2';
const h2='row-span-2';

const images=[
    [ '2021 Vinik.jpg',  ],
    [ '2021 Trump.jpg' ],
    [ '2021 Thoughts.jpg' ],
    [ '2021 Shakespeare.png' ],
    [ '2021 S.jpg' ],
    [ '2021 Pete Buttigieg.jpg' ],
    [ '2021 Mitch McConnell.jpg' ],
    [ '2021 Generations.jpg' ],
    [ '2021 Chaotic Excitement.jpg', h2 ],
    [ '2020.09.23 Zoom Tent (HQ for Impressions).jpg'],
    [ '2020.09.10 Zoom Class.jpg' ],
    [ '2020.09.08 Hand.jpg' ],
    [ '2020.06.21 Dad Eating Cereal.jpg' ],
    [ '2020 World of Wonder.jpg' ],
    [ '2020 Classmate Sitting.jpg' ],
    [ '2020 Art Class.jpg' ],
    [ '2019.08.17 Dad Napping.jpg' ],
    [ '2019 Paris Bistro.jpg', w2 ],
    [ '2019 Hôtel Pont Royale.jpg' ],
    [ '2017.07.21 The Dog Walker.jpg' ],
    [ `2017 The Philosopher's Lamp.jpg` ],
    [ '2017 Plant.jpg' ],
    [ '2016 Political Cartoon.jpg', w2 ],
    [ '2015.08.29 Paul Reading.jpg' ],
    [ '2015 Ostrich.jpg' ],
    [ '2015 Elephant.jpg' ],
    [ '2014 Smily Face.jpg' ],
    [ '2014 Moby Dick.jpg' ],
    [ '2014 Frogs.jpg', w2 ],
    [ '2011 Piano Lessons.jpg' ],
    [ '2010 Vacuum.jpg' ],
    [ '2009 Dad\'s Face.jpg' ]
];
  
export default function Art() {
    const [galleryOpen, setGalleryOpen]=useState<boolean>(false);
    const [index, setIndex]=useState<number>(0);

    return <Page padding title='Art'>
        <h1 className='text-center'>Art</h1>
        <p>Every child is an artist. The problem is how to remain an artist once he grows up. -Pablo Picasso</p>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
            marginBottom: 50
        }}>
            {
                images.map(([fullName, imageClass], index)=>{
                    const { name, dateStr, date }=parse(fullName);

                    const tooltip=`${name} (${dateStr})`;
                    
                    return <span key={fullName} className={`${imageClass || ''} flex items-center justify-center`} title={tooltip}>
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
                                setIndex(e.target.dataset.index);
                                setGalleryOpen(true);
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img data-index={index} src={`/image/art/${fullName}`} alt={`Artwork titled '${name}' on ${dateStr}`} title={tooltip} />
                        </span>
                    </span>;
                })
            }
        </div>

        <Gallery images={images.map(img=>img[0])} renderChildren={(imagePath: string)=>{
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
