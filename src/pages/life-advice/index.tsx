import Page from '@/components/page/DefaultPage';

export default function LifeAdvice() {
    return <Page seo={{
        title: 'Life Advice'
    }} bottomPadding>
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
            <li>
                {`Don't try hard to make friends like you. If they don't like you if you don't try hard, then why would you want to be friends with them if they are more interested if you try hard.
                Let them go if they are not interested in you and don't take that personally. It's not a bad thing, it's natural.
                You have two choices: to be your natural self or to try hard to win people over. It is more enjoyable to be your natural self but people have the tendency/inherent urge to do the ladder.
                If they like you whether or not you are natural or try hard, then they are a good friend, and there is no need for you to try hard with them beacuse they will be your friend regardless. If they don't like you regardless of whether or not you try hard or are natural, then it also doesn't make sense to try hard because the outcome is the same. If they don't like you if you are natural but like you if you try hard, it would seem to make sense to try hard to win them over. However, I would argue that for this category of people, I wouldn't want to be friends with them anyway because I only want to be friends with people who would accept me as I naturally am. How would you feel if they like you when you try hard but as soon as you revert back to being natural, they don't want to be your friend? It's better to let these people go as soon as they are not interested in you when you are your natural self than to try to win them over. In all three categories of people, it does not make sense to try to win them over by trying hard/being an artificial version of yourself.
                The approach that you should take is to try to be yourself and let people come and go like the wind. Don't try to attract someone to you if you sense they are leaving you. It is better that they are not in your life anyway. You will feel less pressure on yourself too with this mindset because it is not "your fault" when someone is not interested in you. It also helps you boost self-confidence and self-esteem/worth.    
                `}
            </li>
        </ul>

    </Page>;
}

