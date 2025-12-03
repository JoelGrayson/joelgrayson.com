"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { SolarData } from "@/pages/solar-for-riverdale";

function formatDate(dateStr: string) {
  // Convert "2025-11-30" to "11/30"
  const [, month, day] = dateStr.split('-');
  return `${month}/${day}`;
}


const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
        <p className="text-base text-black">
          <span className="font-semibold">{formatDate(payload[0].payload.date)}</span>
        </p>
        <p className="text-base text-black">{Math.round(payload[0].value)} kWh</p>
      </div>
    )
  }
  return null
}

export default function LastSevenDaysChart({ data }: { data: SolarData }) {
  return (
    <div className="w-full max-w-3xl p-6 relative">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90">
        <p className="text-[1.7rem] relative bottom-[4.2rem] text-black whitespace-nowrap">Energy Generated (kWh)</p>
      </div>
      <ChartContainer
        config={{
          value: {
            label: "Energy (kWh)",
            color: "hsl(45, 93%, 47%)",
          },
        }}
        className="h-[400px]"
      >
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="date"
            className="text-xl"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "black", fontSize: 18 }}
            tickFormatter={formatDate}
          />
          <YAxis className="text-xl" tickLine={false} axisLine={false} tick={{ fill: "black", fontSize: 18 }} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[8, 8, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              className="fill-foreground text-lg font-semibold"
              formatter={(value: number) => `${Math.round(value)}`}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
      <div className="text-center mt-2">
        <p className="text-[1.7rem] text-black">Last 7 Days</p>
      </div>
    </div>
  )
}
