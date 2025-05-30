import OtherGenerators from '@/components/by-page/download-link-generators/other-generators';
import Page from '@/components/page/DefaultPage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DMStoDD() {
    const [visits, setVisits]=useState(0);
    
    useEffect(()=>{
        if (process.env.NODE_ENV!=='development')
            fetch('/api/page-visits/get-and-add')
                .then(res=>res.json())
                .then(res=>setVisits(res.visits));
    }, []);

    const [dms, setDms]=useState('');
    const [dd, setDd]=useState('');
    
    return <Page
        seo={{
            title: 'DMS to DD Coordinate Conversion',
            description: 'Paste in your DMS (degrees, minutes, seconds) coordinates and it gives you back the DD coordinates'
        }}
        pathname='/software/dms-to-dd'
        noPadding
    >
        <div className='j_container'>
            <h1 className='text-center'>DMS to DD Converter</h1>

            <p>Paste in your DMS (degrees, minutes, seconds) coordinates and it gives you back the DD coordinates. The output is automatically copied to clipboard. Example: 27°19′33″N 97°25′21″E → 27.325833, 97.422500</p>

            <div className='pt-10 pb-3'>
                <label style={{ width: '6ch', display: 'inline-block' }} htmlFor="dms">DMS:</label>
                <input type="text" id='dms' name='dms' style={{ width: '23ch' }} value={dms} onChange={e=>{
                    // Update the state
                    const newDms=e.target.value.trim().toUpperCase();
                    setDms(newDms);

                    // Convert to DD
                    //27°19′33″N 97°25′21″E
                    let re=/(?<latD>\d+)°(?<latM>\d+)[′'](?<latS>\d+)[″"](?<latSign>[NS]) (?<lngD>\d+)°(?<lngM>\d+)[′'](?<lngS>\d+)[″"](?<lngSign>[WE])/
                    let g=newDms.match(re)?.groups;
                    console.log(g);
                    if (!g) {
                        alert('Invalid DMS (no match). It should be formatted like 27°19′33″N 97°25′21″E.');
                        return;
                    }
                    // if (['latD', 'latM', 'latS', 'latSign', 'lngD', 'lngM', 'lngS', 'lngSign'].filter(item=>!g[item]).length!==0) {
                    if (!g.latD || !g.latM || !g.latS || !g.latSign || !g.lngD || !g.lngM || !g.lngS || !g.lngSign) {
                        alert('Invalid DMS. It should be formatted like 27°19′33″N 97°25′21″E.');
                        return;
                    }
                    let lat=(+g.latD)+(+g.latM)/60+(+g.latS)/3600;
                    if (g.latSign==='S')
                        lat*=-1;
                    
                    let lng=(+g.lngD)+(+g.lngM)/60+(+g.lngS)/3600;
                    if (g.lngSign==='W')
                        lng*=-1;
                    
                    const ddText=`${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    setDd(ddText);

                    // Copy to clipboard
                    navigator.clipboard.writeText(ddText);
                }} />
            </div>
            <div>
                <label style={{ width: '6ch', display: 'inline-block' }} htmlFor='dd'>DD:</label>
                <input id='dd' name='dd' type="text" style={{ width: '23ch' }} readOnly value={dd} />
            </div>

            <div className='flex justify-around items-center mt-2 mb-1'>
                <p className={!visits ? 'invisible' : ''}>This page has {visits} visits</p>
                <OtherGenerators currentGenerator='dropbox' />
            </div>
        </div>
    </Page>;
}
