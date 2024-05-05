import Page from '@/components/page/DefaultPage';

export default function Home() {
    return <Page noPadding pathname='/' seo={{
        title: 'The Banana System',
        keywords: [
            'Banana System',
            'Systems of Measurement'
        ],
        description: 'The banana system',
        og: {
            // TODO: image of banana
            // image: '/image/home/portraits/4.22.2023/JoelGrayson.jpg',
            // imageAlt: 'Joel Grayson Profile Photo'
        }
    }}>
        <h1>The Banana System</h1>
    </Page>;
}

