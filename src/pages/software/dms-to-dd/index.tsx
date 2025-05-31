import Page from '@/components/page/DefaultPage';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

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
            description: 'Convert between DMS and DD coordinates'
        }}
        pathname='/software/dms-to-dd'
        noPadding
    >
        <div className='j_container'>
            <h1 className='text-center'>DMS to DD Converter</h1>

            <p>Convert between DMS and DD coordinates. Paste in your DMS (degrees, minutes, seconds) to get the DD (decimal) or your DD to get the DMS. The output is automatically copied to clipboard.</p>
            <p>Example (DD to DMS): 40.712778, -74.006111 → 40°42′46″N 74°0′22″W</p>
            <p>Example (DMS to DD): 37°25′39″N 122°10′13″W → 37.427500, -122.170278</p>

            <Toaster />

            <div className='pt-10 pb-3'>
                <label style={{ width: '6ch', display: 'inline-block' }} htmlFor="dms">DMS:</label>
                <input type="text" id='dms' name='dms' style={{ width: '23ch' }} value={dms} onChange={e=>{
                    // Update the state
                    const newDms=e.target.value.trim().toUpperCase();
                    setDms(newDms);

                    // Convert to DD
                    // 27°19′33″N 97°25′21″E
                    const re=/(?<latD>\d+)°(?<latM>\d+)[′' ](?<latS>\d+)[″" ]\s?(?<latSign>[NS]) (?<lngD>\d+)°(?<lngM>\d+)[′' ](?<lngS>\d+)[″" ]\s?(?<lngSign>[WE])/;
                    const g=newDms.match(re)?.groups;
                    console.log(g);
                    if (!g)
                        return alert('Invalid DMS (no match). It should be formatted like 27°19′33″N 97°25′21″E');
                    
                    // if (['latD', 'latM', 'latS', 'latSign', 'lngD', 'lngM', 'lngS', 'lngSign'].filter(item=>!g[item]).length!==0) {
                    if (!g.latD || !g.latM || !g.latS || !g.latSign || !g.lngD || !g.lngM || !g.lngS || !g.lngSign) 
                        return alert('Invalid DMS. It should be formatted like 27°19′33″N 97°25′21″E');
                    
                    let lat=(+g.latD)+(+g.latM)/60+(+g.latS)/3600;
                    if (g.latSign==='S')
                        lat*=-1;
                    
                    let lng=(+g.lngD)+(+g.lngM)/60+(+g.lngS)/3600;
                    if (g.lngSign==='W')
                        lng*=-1;

                    const newDd=`${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    setDd(newDd);

                    // Copy to clipboard
                    navigator.clipboard.writeText(newDd);

                    toast('Copied the DD to clipboard');
                }} />
            </div>
            <div>
                <label style={{ width: '6ch', display: 'inline-block' }} htmlFor='dd'>DD:</label>
                <input id='dd' name='dd' type="text" style={{ width: '23ch' }} value={dd} onChange={e=>{
                    const newDd=e.target.value.trim();
                    const re=/(?<lat>-?[\d\.]+),? ?(?<lng>-?[\d\.]+)/;
                    setDd(newDd);

                    const g=newDd.match(re)?.groups;
                    
                    if (!g)
                        return alert('Invalid DD (no match). It should be formatted like 27.325833, 97.422500');
                    if (!g.lat || !g.lng)
                        return alert('Invalid DD. It should be formatted like 27.325833, 97.422500');

                    let latDd=+g.lat;
                    const latSign=latDd>0 ? 'N' : 'S';
                    if (latSign==='S')
                        latDd*=-1;
                    let lngDd=+g.lng;
                    const lngSign=lngDd>0 ? 'E' : 'W';
                    if (lngSign==='W')
                        lngDd*=-1;
                    
                    const lat=ddToDMS(latDd);
                    const lng=ddToDMS(lngDd);

                    console.log({ g, lat, lng, latDd, lngDd })

                    //27°19′33″N 97°25′21″E
                    const newDms=`${lat.d}°${lat.m}′${lat.s.toFixed(0)}″${latSign} ${lng.d}°${lng.m}′${lng.s.toFixed(0)}″${lngSign}`;
                    navigator.clipboard.writeText(newDms);

                    setDms(newDms);

                    toast('Copied the DMS to clipboard');
                }} />
            </div>

            <div className='flex justify-around items-center mt-2 mb-1'>
                <p className={!visits ? 'invisible' : ''}>This page has {visits} visits</p>
            </div>
        </div>
    </Page>;
}

function ddToDMS(dd: number) {
    const d=Math.trunc(dd);
    const mFloat=(dd-d)*60;
    const m=Math.trunc(mFloat);
    const s=(mFloat-m)*60;

    return { d, m, s };
}
