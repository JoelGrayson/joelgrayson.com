import TodayChart from "@/components/by-page/solar-for-riverdale/TodayChart";
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
    const [lastSevenDaysData, setLastSevenDaysData] = useState<SolarData>([]);
    const [todaysData, setTodaysData] = useState<SolarData>([]);

    useEffect(()=>{
        if (process.env.NODE_ENV === 'development') {
            // For testing so not too many API calls (only 400 allowed per day)
            setLastSevenDaysData([
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

            setTodaysData([
    {
        "date": "2025-12-02 00:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 00:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 00:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 00:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 01:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 01:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 01:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 01:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 02:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 02:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 02:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 02:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 03:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 03:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 03:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 03:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 04:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 04:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 04:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 04:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 05:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 05:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 05:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 05:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 06:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 06:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 06:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 06:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 07:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 07:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 07:30:00",
        "value": 0.067142098
    },
    {
        "date": "2025-12-02 07:45:00",
        "value": 0.23937037
    },
    {
        "date": "2025-12-02 08:00:00",
        "value": 0.5200220200000001
    },
    {
        "date": "2025-12-02 08:15:00",
        "value": 0.8752124
    },
    {
        "date": "2025-12-02 08:30:00",
        "value": 1.066652
    },
    {
        "date": "2025-12-02 08:45:00",
        "value": 1.23379118
    },
    {
        "date": "2025-12-02 09:00:00",
        "value": 1.434072
    },
    {
        "date": "2025-12-02 09:15:00",
        "value": 1.23037654
    },
    {
        "date": "2025-12-02 09:30:00",
        "value": 1.82018295
    },
    {
        "date": "2025-12-02 09:45:00",
        "value": 1.69378505
    },
    {
        "date": "2025-12-02 10:00:00",
        "value": 1.8530091
    },
    {
        "date": "2025-12-02 10:15:00",
        "value": 2.3647631000000002
    },
    {
        "date": "2025-12-02 10:30:00",
        "value": 2.6325190999999997
    },
    {
        "date": "2025-12-02 10:45:00",
        "value": 2.5343362000000003
    },
    {
        "date": "2025-12-02 11:00:00",
        "value": 2.5749939
    },
    {
        "date": "2025-12-02 11:15:00",
        "value": 2.45957217
    },
    {
        "date": "2025-12-02 11:30:00",
        "value": 2.7854174
    },
    {
        "date": "2025-12-02 11:45:00",
        "value": 2.6679294000000002
    },
    {
        "date": "2025-12-02 12:00:00",
        "value": 2.97314
    },
    {
        "date": "2025-12-02 12:15:00",
        "value": 4.1920369
    },
    {
        "date": "2025-12-02 12:30:00",
        "value": 3.0869887
    },
    {
        "date": "2025-12-02 12:45:00",
        "value": 2.5423168
    },
    {
        "date": "2025-12-02 13:00:00",
        "value": 2.6870029
    },
    {
        "date": "2025-12-02 13:15:00",
        "value": 2.39671275
    },
    {
        "date": "2025-12-02 13:30:00",
        "value": 1.8306890500000002
    },
    {
        "date": "2025-12-02 13:45:00",
        "value": 1.2565610399999998
    },
    {
        "date": "2025-12-02 14:00:00",
        "value": 0.94360664
    },
    {
        "date": "2025-12-02 14:15:00",
        "value": 0.76078393
    },
    {
        "date": "2025-12-02 14:30:00",
        "value": 0.5995064999999999
    },
    {
        "date": "2025-12-02 14:45:00",
        "value": 0.2694561
    },
    {
        "date": "2025-12-02 15:00:00",
        "value": 0.14492275
    },
    {
        "date": "2025-12-02 15:15:00",
        "value": 0.079517017
    },
    {
        "date": "2025-12-02 15:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 15:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 16:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 16:15:00",
        "value": 0.075378597
    },
    {
        "date": "2025-12-02 16:30:00",
        "value": 0.06571497899999999
    },
    {
        "date": "2025-12-02 16:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 17:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 17:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 17:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 17:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 18:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 18:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 18:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 18:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 19:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 19:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 19:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 19:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 20:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 20:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 20:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 20:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 21:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 21:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 21:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 21:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 22:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 22:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 22:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 22:45:00",
        "value": 0
    },
    {
        "date": "2025-12-02 23:00:00",
        "value": 0
    },
    {
        "date": "2025-12-02 23:15:00",
        "value": 0
    },
    {
        "date": "2025-12-02 23:30:00",
        "value": 0
    },
    {
        "date": "2025-12-02 23:45:00",
        "value": 0
    }
]);
        } else {
            fetch('/api/solar-for-riverdale/last-seven-days')
                .then(res=>res.json())
                .then(res=>{
                    setLastSevenDaysData(res.total);
                    console.log('Last seven days data', res);
                });
            
            fetch('/api/solar-for-riverdale/today')
                .then(res=>res.json())
                .then(res=>{
                    setTodaysData(res.total);
                    console.log('Today data', res);
                });
        }
    }, []);
    
    return <div className="flex flex-col items-center">
        <h1 className="text-3xl mt-5 mb-1">Solar for Riverdale</h1>
        
        <div className="text-center text-xl leading-relaxed max-w-[1100px] mb-3">Riverdale has a 109 kW solar installation on the roofs of the cafeteria, swimming pool, and Mow. Every year, it generates 130 megawatt-hours of electricity and reduces carbon emissions by 87.4 tonnes.</div>
        
        <div className="flex flex-col items-center border rounded-lg w-min">
            {
                lastSevenDaysData.length === 0
                ? <>
                    <div>Loading data...</div>
                </>
                : <div className="flex flex-col items-center border rounded-lg border-gray-300 px-10 w-full mb-3">
                    <h3>Last 7 Days</h3>
                    <div style={{zoom: 0.7}}>
                        <LastSevenDaysChart data={lastSevenDaysData} />
                    </div>
                </div>
            }
            {
                todaysData.length === 0
                ? <>
                    <div>Loading data...</div>
                </>
                : <div className="flex flex-col items-center border rounded-lg border-gray-300 px-10 w-full">
                    <h3>Today (Live)</h3>
                    <div style={{zoom: 0.7}}>
                        <TodayChart data={todaysData} />
                    </div>
                </div>
            }
        </div>
    </div>;
}

