'use server';

import { Component } from './component2';
// import { Component as Component1 } from './component1';
import { loadData } from './loadData';

export default async function StatsTimeline() {
    const data=await loadData();

    return <div>
        <Component data={data} />
        {/* <hr />
        <Component1 /> */}
    </div>;
}
