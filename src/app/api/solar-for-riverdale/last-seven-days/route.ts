import prisma from "@/data/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }); //date formatter
    const yesterdayNYC = fmt.format(Date.now() - 1 * 24 * 60 * 60 * 1000); //like 2025-12-01
    const sevenDaysAgoDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const sevenDaysAgoNYC = fmt.format(sevenDaysAgoDate);

    const [studentCenterRes, aquaticCenterRes] = await Promise.all([
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.STUDENT_CENTER_SITE_ID}/energy?timeUnit=DAY&startDate=${sevenDaysAgoNYC}&endDate=${yesterdayNYC}&api_key=${process.env.STUDENT_CENTER_SOLAR_API_KEY}`),
        fetch(`https://monitoringapi.solaredge.com/site/${process.env.AQUATIC_CENTER_SITE_ID}/energy?timeUnit=DAY&startDate=${sevenDaysAgoNYC}&endDate=${yesterdayNYC}&api_key=${process.env.AQUATIC_CENTER_SOLAR_API_KEY}`)
    ]);

    if (!studentCenterRes.ok || !aquaticCenterRes.ok)
        return NextResponse.error();

    const [studentCenterData, aquaticCenterData] = await Promise.all([
        studentCenterRes.json(),
        aquaticCenterRes.json()
    ]);

    const studentCenterTotal = studentCenterData.energy.values.reduce((sum: number, entry: any) => sum + entry.value, 0);
    const aquaticCenterTotal = aquaticCenterData.energy.values.reduce((sum: number, entry: any) => sum + entry.value, 0);

    const stats = {
        studentCenter: studentCenterData.energy.values,
        aquaticCenter: aquaticCenterData.energy.values,
        total: studentCenterTotal + aquaticCenterTotal
    };

    return NextResponse.json(stats);
}

/*
Example API response from solaredge
{
  "energy": {
    "timeUnit": "DAY",
    "unit": "Wh",
    "values": [
      {
        "date": "2025-11-24 00:00:00",
        "value": 82179.0
      },
      {
        "date": "2025-11-25 00:00:00",
        "value": 28129.0
      },
      {
        "date": "2025-11-26 00:00:00",
        "value": 15996.0
      },
      {
        "date": "2025-11-27 00:00:00",
        "value": 75521.0
      },
      {
        "date": "2025-11-28 00:00:00",
        "value": 75058.0
      },
      {
        "date": "2025-11-29 00:00:00",
        "value": 80637.0
      },
      {
        "date": "2025-11-30 00:00:00",
        "value": 12918.0
      },
      {
        "date": "2025-12-01 00:00:00",
        "value": 77764.0
      }
    ]
  }
}
*/

