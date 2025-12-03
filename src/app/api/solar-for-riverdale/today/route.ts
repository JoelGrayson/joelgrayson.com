import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }); //date formatter
    const todayNYC = fmt.format(Date.now()); //like 2025-12-01
    console.log(todayNYC);

    // Get current time in NYC
    const MINUTES_DELAY = 16; //this way it is never in between a 15 minute section
    const nowNYC = new Date(new Date(Date.now() - MINUTES_DELAY * 60 * 1000).toLocaleString("en-US", { timeZone: "America/New_York" }));

    const [studentCenterRes, aquaticCenterRes] = await Promise.all([
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.STUDENT_CENTER_SITE_ID}/power?timeUnit=QUARTER_OF_AN_HOUR&startTime=${todayNYC}%2000:00:00&endTime=${todayNYC}%2023:59:59&api_key=${process.env.STUDENT_CENTER_SOLAR_API_KEY}`, { cache: 'no-store' }),
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.AQUATIC_CENTER_SITE_ID}/power?timeUnit=QUARTER_OF_AN_HOUR&startTime=${todayNYC}%2000:00:00&endTime=${todayNYC}%2023:59:59&api_key=${process.env.AQUATIC_CENTER_SOLAR_API_KEY}`, { cache: 'no-store' })
    ]);

    if (!studentCenterRes.ok || !aquaticCenterRes.ok)
        return NextResponse.error();

    const [studentCenterRawData, aquaticCenterRawData] = await Promise.all([
        studentCenterRes.json(),
        aquaticCenterRes.json()
    ]);
    console.log('r', studentCenterRawData.power.values);
    console.log('nn', nowNYC);
    // Units are watts - filter to only include data up to current NYC time
    let studentCenter = studentCenterRawData.power.values
        .filter((e: any) => new Date(e.date) <= nowNYC)
        .map((e: any)=>{
            let value = e.value;
            if (value !== null)
              value /= 1000;

            console.log('v', value, e)

            return {
                date: e.date,
                value
            };
        });
    let aquaticCenter = aquaticCenterRawData.power.values
        .filter((e: any) => new Date(e.date) <= nowNYC)
        .map((e: any)=>{
            let value = e.value;
            if (value !== null)
              value /= 1000;

            return {
                date: e.date,
                value
            };
        });

    // Combine totals for each day
    let total = studentCenter.map((scEntry: any, index: number) => {
        let value = scEntry.value + aquaticCenter[index].value;
        // if (scEntry.value === null || aquaticCenter[index].value === null) {
        //   value = null;
        // }

        return {
            date: scEntry.date,
            value
        };
    });

    const stats = {
        studentCenter,
        aquaticCenter,
        total
    };

    return NextResponse.json(stats);
}
