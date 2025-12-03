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
                    "value": 67.142098
                },
                {
                    "date": "2025-12-02 07:45:00",
                    "value": 239.37037
                },
                {
                    "date": "2025-12-02 08:00:00",
                    "value": 520.02202
                },
                {
                    "date": "2025-12-02 08:15:00",
                    "value": 875.2124
                },
                {
                    "date": "2025-12-02 08:30:00",
                    "value": 1066.652
                },
                {
                    "date": "2025-12-02 08:45:00",
                    "value": 1233.79118
                },
                {
                    "date": "2025-12-02 09:00:00",
                    "value": 1434.0720000000001
                },
                {
                    "date": "2025-12-02 09:15:00",
                    "value": 1230.37654
                },
                {
                    "date": "2025-12-02 09:30:00",
                    "value": 1820.18295
                },
                {
                    "date": "2025-12-02 09:45:00",
                    "value": 1693.78505
                },
                {
                    "date": "2025-12-02 10:00:00",
                    "value": 1853.0090999999998
                },
                {
                    "date": "2025-12-02 10:15:00",
                    "value": 2364.7631
                },
                {
                    "date": "2025-12-02 10:30:00",
                    "value": 2632.5191
                },
                {
                    "date": "2025-12-02 10:45:00",
                    "value": 2534.3361999999997
                },
                {
                    "date": "2025-12-02 11:00:00",
                    "value": 2574.9939
                },
                {
                    "date": "2025-12-02 11:15:00",
                    "value": 2459.57217
                },
                {
                    "date": "2025-12-02 11:30:00",
                    "value": 2785.4174
                },
                {
                    "date": "2025-12-02 11:45:00",
                    "value": 2667.9294
                },
                {
                    "date": "2025-12-02 12:00:00",
                    "value": 2973.1400000000003
                },
                {
                    "date": "2025-12-02 12:15:00",
                    "value": 4192.0369
                },
                {
                    "date": "2025-12-02 12:30:00",
                    "value": 3086.9887
                },
                {
                    "date": "2025-12-02 12:45:00",
                    "value": 2542.3168
                },
                {
                    "date": "2025-12-02 13:00:00",
                    "value": 2687.0029
                },
                {
                    "date": "2025-12-02 13:15:00",
                    "value": 2396.71275
                },
                {
                    "date": "2025-12-02 13:30:00",
                    "value": 1830.68905
                },
                {
                    "date": "2025-12-02 13:45:00",
                    "value": 1256.56104
                },
                {
                    "date": "2025-12-02 14:00:00",
                    "value": 943.60664
                },
                {
                    "date": "2025-12-02 14:15:00",
                    "value": 760.78393
                },
                {
                    "date": "2025-12-02 14:30:00",
                    "value": 599.5065
                },
                {
                    "date": "2025-12-02 14:45:00",
                    "value": 269.4561
                },
                {
                    "date": "2025-12-02 15:00:00",
                    "value": 144.92275
                },
                {
                    "date": "2025-12-02 15:15:00",
                    "value": 79.51701700000001
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
                    "value": 75.378597
                },
                {
                    "date": "2025-12-02 16:30:00",
                    "value": 65.714979
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
        <h1 className="text-4xl mt-12 mb-6">Solar for Riverdale</h1>
        
        <div className="text-center text-2xl leading-relaxed max-w-[1200px] mb-5">Riverdale has a 109 kW solar installation with panels on top of the cafeteria, swimming pool, and Mow. Every year, it generates 130 megawatt-hours of electricity and reduces carbon emissions by 87.4 tonnes.</div>
        
        {
            lastSevenDaysData.length === 0
            ? <>
                <div>Loading data...</div>
            </>
            : <LastSevenDaysChart data={lastSevenDaysData} />
        }
        {
            todaysData.length === 0
            ? <>
                <div>Loading data...</div>
            </>
            : <TodayChart data={todaysData} />
        }
    </div>;
}

