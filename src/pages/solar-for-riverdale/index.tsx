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
        if (process.env.NODE_ENV === 'development') {
            // For testing so not too many API calls (only 400 allowed per day)
            setData([
                {
                    "date": "2025-11-26",
                    "value": 57.104
                },
                {
                    "date": "2025-11-27",
                    "value": 213.591
                },
                {
                    "date": "2025-11-28",
                    "value": 221.003
                },
                {
                    "date": "2025-11-29",
                    "value": 237.121
                },
                {
                    "date": "2025-11-30",
                    "value": 31.474
                },
                {
                    "date": "2025-12-01",
                    "value": 230.04000000000002
                },
                {
                    "date": "2025-12-02",
                    "value": 13.823
                }
            ]);
        } else {
            fetch('/api/solar-for-riverdale/last-seven-days')
                .then(res=>res.json())
                .then(res=>{
                    setData(res.total);
                    console.log(res);
                });
        }
    }, []);
    
    return <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-12 mb-6">Solar for Riverdale</h1>
        
        <div className="text-center text-2xl leading-relaxed max-w-[1200px] mb-5">Riverdale has a 109 kW solar installation with panels on top of the cafeteria, swimming pool, and Mow. Every year, it generates 130 megawatt-hours of electricity and reduces carbon emissions by 87.4 tonnes.</div>
        
        {
            data.length === 0
            ? <>
                <div>Loading data...</div>
            </>
            : <LastSevenDaysChart data={data} />
        }
    </div>;
}

