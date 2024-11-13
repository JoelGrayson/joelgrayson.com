import Page from '@/components/page/DefaultPage';

export default function LifeAdvice() {
    return <Page seo={{
        title: 'Life Advice'
    }}>
        <h1 className='text-center'>Life Advice</h1>
        
        <h3>For Entrepreneurs</h3>
        <ul>
            <li>Lots of ambition is good. Overconfidence is bad.</li>
            <li>Care less about what others think about you. Embarrassment will not kill you.</li>
            <li>When life sucks, respond with &quot;is that all you got?&quot; Treat life as a challenging game.</li>
        </ul>


        <h3>General</h3>
        <ul>
            <li>Create a &quot;cookie jar&quot;, an easy-to-access document of supportive thoughts and mantras for when you need motivation.</li>
        </ul>

    </Page>;
}

