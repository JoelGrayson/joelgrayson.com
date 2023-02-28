import Page from '@/components/Page';
import Link from 'next/link';

export default function Slaphappy() {
    // https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A
    
    return <Page padding title='Art'>
        <h1 className='text-center'>Slaphappy</h1>
        
        <Link href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'>Go to YouTube Channel</Link>
    </Page>;
}
