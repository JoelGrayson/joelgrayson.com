'use server';

import { Component } from './component2';
import { loadData } from './loadData';

export default async function StatsTimeline() {
    const data=await loadData();

    return <Component data={data} />;
}
