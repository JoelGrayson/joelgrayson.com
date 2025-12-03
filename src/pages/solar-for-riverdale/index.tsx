import LastSevenDaysChart from "@/components/by-page/solar-for-riverdale/LastSevenDaysChart";
import { useEffect, useState } from "react";

export type SolarDatum = {
    /** date string format: "2025-11-28" */
    date: string;
    /** units: Wh */
    value: number;
};
export type SolarData = SolarDatum[];

export default function SolarForRiverdale() {
    const [data, setData] = useState<SolarData>([]);

    useEffect(()=>{
        fetch('/api/solar-for-riverdale/last-seven-days')
            .then(res=>res.json())
            .then(res=>{
                setData(res.total);
                console.log(res);
            })
    }, []);
    
    return <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-12 mb-6">Solar for Riverdale</h1>
        
        <div className="text-center text-2xl leading-relaxed">Riverdale has a 109 kW solar installation with panels on top of the cafeteria, swimming pool, and Mow. Every year, it generates 130 megawatt-hours of electricity and reduces carbon emissions by 87.4 tonnes.</div>
        
        {
            data.length === 0
            ? <>
                <div>Loading data...</div>
            </>
            : <LastSevenDaysChart data={data} />
        }
    </div>;
}

