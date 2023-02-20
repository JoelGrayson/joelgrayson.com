import Image from 'next/image';

export default function MiscellaneousBottom() {
    return <div className='grid grid-cols-3'>
        <div>
            <Image src='/image/machines/wooden-chair.jpg' width='160px' height='288px' />
            <h4>Wooden Chair</h4>
        </div>
        <div>
            <Image src='/image/machines/the-bottle-collector.png' width='220px' height='288px' />
            <h4>The Bottle Collecter</h4>
            <p>We recycled ~100 plastic bottles :)</p>
        </div>
        <div>
            <Image src='/image/machines/wooden-shelf.jpg' width='216px' height='288px' />
            <h4>Wooden Shelf</h4>
            {/* <Image src=''></Image> */}
            <p>One of my earliest wood creations still in use</p>
        </div>
    </div>;
}
