import Page from '@/components/page/DefaultPage';

export default function TEDxTalkCorrection() {
    return <Page bottomPadding pathname='/note/tedx-talk-correction' seo={{
        title: 'TEDx Talk Correction',
    }}>
        <h1>TEDx Talk Correction</h1>

        <p>When I had rehearsed, I started the talk with &quot;What if I told you that we could solve <b>most of</b> climate change in two steps.&quot;</p>
        <p>For whatever reason, on the actual day I forgot to include &quot;most of&quot; in my introduction. Including &quot;most of&quot; is important because these two steps (generating clean electricity and electrifying everything) are only enough to solve ~80% of the problem. For example, biofuels can be used in aviation, and green hydrogen can be used for steelmaking and cement production (and perhaps heavy-duty long-distance trucking).</p>
        {/* TODO: insert change systems rather than individual behavior */}
        {/* <p>Of course, energy efficiency can help, but see my article <Link>here</Link> </p> */}
    </Page>;
}

