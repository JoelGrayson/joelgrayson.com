import Image from 'next/image';

export default function MiscellaneousBottom() {
    return <div className='grid grid-cols-3'>
        <div className='flex flex-col items-center'>
            <Image src='/image/machines/wooden-chair.jpg' width='160' height='288' alt='Wooden Chair' />
            <h4>Wooden Chair</h4>
        </div>
        <div className='flex flex-col items-center'>
            <Image src='/image/machines/the-bottle-collector.png' width='220' height='288' alt='Bottle Collector' />
            <h4>The Bottle Collecter</h4>
            <p>We recycled ~100 plastic bottles :)</p>
        </div>
        <div className='flex flex-col items-center'>
            <Image src='/image/machines/wooden-shelf.jpg' width='216' height='288' alt='Wooden Shelf' />
            <h4>Wooden Shelf</h4>
            {/* <Image src=''></Image> */}
            <p className='mx-3'>One of my earliest wood creations still in use</p>
        </div>
    </div>;
}
