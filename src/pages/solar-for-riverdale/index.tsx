import LastSevenDaysChart from "@/components/by-page/solar-for-riverdale/LastSevenDaysChart";
import { useEffect, useState } from "react";

export default function SolarForRiverdale() {
    // const [data, setData] = useState();

    useEffect(()=>{
        fetch('')
    }, []);
    
    const data = [
        { date: "11/26", kwh: 24.5 },
        { date: "11/27", kwh: 28.2 },
        { date: "11/28", kwh: 26.8 },
        { date: "11/29", kwh: 31.4 },
        { date: "11/30", kwh: 29.7 },
        { date: "12/1", kwh: 33.1 },
        { date: "12/2", kwh: 30.6 },
    ];
    
    return <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-12 mb-6">Solar for Riverdale</h1>
        
        <div className="text-center text-2xl">Riverdale has solar panels on top of the cafeteria, swimming pool, and Mow.</div>

        <h3>Last 7 Days</h3>
        <LastSevenDaysChart data={data} />


        <div>Today (Live)</div>
        
        {/* Rotates between today, last 7 days */}

        <h3>Last 7 Days</h3>

    </div>;
}

