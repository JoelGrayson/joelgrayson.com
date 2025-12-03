import { NextResponse } from "next/server";

export async function GET() {
    const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }); //date formatter
    const todayNYC = fmt.format(Date.now() - 3 * 60 * 60 * 1000); //like 2025-12-01
    console.log(todayNYC);
    const [studentCenterRes, aquaticCenterRes] = await Promise.all([
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.STUDENT_CENTER_SITE_ID}/power?timeUnit=QUARTER_OF_AN_HOUR&startTime=${todayNYC}%2000:00:00&endTime=${todayNYC}%2023:59:59&api_key=${process.env.STUDENT_CENTER_SOLAR_API_KEY}`),
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.AQUATIC_CENTER_SITE_ID}/power?timeUnit=QUARTER_OF_AN_HOUR&startTime=${todayNYC}%2000:00:00&endTime=${todayNYC}%2023:59:59&api_key=${process.env.AQUATIC_CENTER_SOLAR_API_KEY}`)
    ]);

    if (!studentCenterRes.ok || !aquaticCenterRes.ok)
        return NextResponse.error();

    const [studentCenterRawData, aquaticCenterRawData] = await Promise.all([
        studentCenterRes.json(),
        aquaticCenterRes.json()
    ]);

    // Units are watts
    let studentCenter = studentCenterRawData.power.values.map((e: any)=>{
        return {
            date: e.date,
            value: e.value
        };
    });
    let aquaticCenter = aquaticCenterRawData.power.values.map((e: any)=>{
        return {
            date: e.date,
            value: e.value
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
