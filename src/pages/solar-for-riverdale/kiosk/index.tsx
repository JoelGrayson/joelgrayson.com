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
export type SunriseSunsetData = {
    sunrise: string;
    sunset: string;
    solar_noon: string;
    day_length: string;
    civil_twilight_begin: string;
    civil_twilight_end: string;
    nautical_twilight_begin: string;
    nautical_twilight_end: string;
    astronomical_twilight_begin: string;
    astronomical_twilight_end: string;
};
// https://api.sunrise-sunset.org/json?lat=40.89942512627312&lng=-73.89975728835755

function formatTime(time: string): string {
    // Remove seconds from time format (e.g., "7:01:39 AM" -> "7:01 AM")
    return time.replace(/:\d{2}(\s+[AP]M)/, '$1');
}

export default function SolarForRiverdale() {
    const [lastSevenDaysData, setLastSevenDaysData] = useState<SolarData>([]);
    const [todaysData, setTodaysData] = useState<SolarData>([]);
    const [sunriseData, setSunriseData] = useState<SunriseSunsetData | null>(null);

    useEffect(() => {
        // Fetch sunrise/sunset data
        fetch('https://api.sunrise-sunset.org/json?lat=40.89942512627312&lng=-73.89975728835755&tzid=America/New_York')
            .then(res => res.json())
            .then(res => {
                if (res.status === 'OK') {
                    setSunriseData(res.results);
                    console.log('Sunrise/sunset data', res.results);
                }
            })
            .catch(err => {
                console.error('Error fetching sunrise/sunset data:', err);
            });

        // if (process.env.NODE_ENV === 'development') {
        //     // For testing so not too many API calls (only 400 allowed per day)
        //     setLastSevenDaysData(lastSevenDaysTestData);
        //     setTodaysData(todaysData);
        //     return;
        // }

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
    }, []);
    
    return <>
        <title>Solar for Riverdale</title>
        <div className="flex flex-col items-center">
            <h1 className="text-3xl mt-5 mb-1">Solar for Riverdale</h1>
            
            <div className="text-center text-xl leading-relaxed max-w-[1100px] mb-3">Riverdale has a 109 kW solar installation on the roofs of the cafeteria, swimming pool, and Mow. Every year, it generates 130 megawatt-hours of electricity and reduces CO₂ equivalent emissions by 87.4 tonnes.</div>
            
            <div className="flex flex-col items-center border rounded-lg w-min">
                {
                    lastSevenDaysData.length === 0
                    ? <>
                        <div>Loading data...</div>
                    </>
                    : <div className="flex flex-col items-center border rounded-lg border-gray-300 px-10 w-full mb-3">
                        <h3>Last 7 Days</h3>
                        <div style={{zoom: 0.8}}>
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
                        <div style={{zoom: 0.8}}>
                            <TodayChart data={todaysData} />
                        </div>
                        <p>Sunrise: {sunriseData?.sunrise && formatTime(sunriseData.sunrise)} | Sunset: {sunriseData?.sunset && formatTime(sunriseData.sunset)}</p>
                    </div>
                }
            </div>
        </div>
        {/* <div className="text-sm text-right mt-5">*the Mow installation does not have live data so all numbers here are just from the cafeteria (Student Center) and swimming pool (Aquatic Center) panels. The Mow panels contribute an additional 30 kW to these numbers.</div> */}
    </>;
}


const lastSevenDaysTestData = [
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
];

const todaysData = [
    {
        "date": "2025-12-03 00:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 00:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 00:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 00:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 01:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 01:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 01:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 01:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 02:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 02:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 02:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 02:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 03:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 03:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 03:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 03:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 04:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 04:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 04:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 04:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 05:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 05:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 05:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 05:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 06:00:00",
        "value": 0
    },
    {
        "date": "2025-12-03 06:15:00",
        "value": 0
    },
    {
        "date": "2025-12-03 06:30:00",
        "value": 0
    },
    {
        "date": "2025-12-03 06:45:00",
        "value": 0
    },
    {
        "date": "2025-12-03 07:00:00",
        "value": 0.14111125000000002
    },
    {
        "date": "2025-12-03 07:15:00",
        "value": 1.01919713
    },
    {
        "date": "2025-12-03 07:30:00",
        "value": 2.0918014
    },
    {
        "date": "2025-12-03 07:45:00",
        "value": 3.4325143000000002
    },
    {
        "date": "2025-12-03 08:00:00",
        "value": 5.8455105
    },
    {
        "date": "2025-12-03 08:15:00",
        "value": 8.4026148
    },
    {
        "date": "2025-12-03 08:30:00",
        "value": 14.921173000000001
    },
    {
        "date": "2025-12-03 08:45:00",
        "value": 17.244739
    },
    {
        "date": "2025-12-03 09:00:00",
        "value": 19.118918
    },
    {
        "date": "2025-12-03 09:15:00",
        "value": 18.447082700000003
    },
    {
        "date": "2025-12-03 09:30:00",
        "value": 18.524679499999998
    },
    {
        "date": "2025-12-03 09:45:00",
        "value": 27.395179999999996
    },
    {
        "date": "2025-12-03 10:00:00",
        "value": 33.94001299999999
    },
    {
        "date": "2025-12-03 10:15:00",
        "value": 35.9679905
    },
    {
        "date": "2025-12-03 10:30:00",
        "value": 39.84252
    },
    {
        "date": "2025-12-03 10:45:00",
        "value": 41.508843999999996
    },
    {
        "date": "2025-12-03 11:00:00",
        "value": 43.00384
    }
];

