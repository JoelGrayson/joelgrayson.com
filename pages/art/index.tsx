import Page from '../../components/Page';

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
}
const images=['2009 Dad Face.jpg', 
    '2010 Vacuum.jpg', 
    '2011 Piano Lessons.jpg', 
    '2014 Frogs.jpg', 
    '2014 Moby Dick.jpg', 
    '2014 Smily Face.jpg', 
    '2015 Elephant.jpg', 
    '2015 Ostrich.jpg', 
    '2015.08.29 Paul Reading.jpg', 
    '2016 Political Cartoon.jpg', 
    '2017 Plant.jpg', 
    '2017 The Philosopher\'s Lamp.jpg', 
    '2017.07.21 The Dog Walker.jpg', 
    '2018.07.21 Colorful Drawing.jpg', 
    '2019 Hôtel Pont Royale.jpg', 
    '2019 Paris Bistro.jpg', 
    '2019.08.17 Dad Napping.jpg', 
    '2020 Art Class.jpg', 
    '2020 Classmate Sitting.jpg', 
    '2020 World of Wonder.jpg', 
    '2020.06.21 Dad Eating Cereal.jpg', 
    '2020.09.08 Hand.jpg', 
    '2020.09.10 Zoom Class.jpg', 
    '2020.09.23 Zoom Tent (HQ for Impressions).jpg', 
    '2021 Chaotic Excitement.jpg', 
    '2021 Generations.jpg', 
    '2021 Mitch McConnell.jpg', 
    '2021 Pete Buttigieg.jpg', 
    '2021 S.jpg', 
    '2021 Shakespeare.png', 
    '2021 Thoughts.jpg', 
    '2021 Trump.jpg', 
    '2021 Vinik.jpg'
];

export default function Art() {
    return (<Page padding title='Art'>
        <h1 className='text-center'>Art</h1>
        <p>Every child is an artist. The problem is how to remain an artist once he grows up. -Pablo Picasso</p>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
            {
            images.map(imageName=>(<span key={imageName}>
                <img src={`/images/art/${imageName}`} alt={`Artwork titled '${imageName}'`} />
            </span>))
            }
        </div>
    </Page>);
}
