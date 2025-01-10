'use server';

import Component from './ClientComponent';
import { loadData } from './loadData';

export default async function StatsTimeline() {
    const data=await loadData();

    return <div>
        <Component data={data} />
    </div>;
}

