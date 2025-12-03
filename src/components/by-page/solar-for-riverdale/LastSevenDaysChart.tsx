"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

type Data = {
  date: string;
  kwh: number;
}[];

export default function LastSevenDaysChart({ data }: { data: Data }) {
  return (
        <ChartContainer
          config={{
            kwh: {
              label: "Energy (kWh)",
              color: "hsl(45, 93%, 47%)",
            },
          }}
          className="h-[400px]"
        >
          <BarChart data={data} margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xl font-semibold"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "black", fontSize: 18, fontWeight: 600 }}
            />
            <YAxis
              className="text-xl font-semibold"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "black", fontSize: 18, fontWeight: 600 }}
              label={{
                value: "Energy Generated (kWh)",
                // angle: -90,
                // position: "insideLeft",
                style: { fontSize: "18px", fontWeight: 600, fill: "black" },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="kwh" fill="var(--color-kwh)" radius={[8, 8, 0, 0]}>
              <LabelList
                dataKey="kwh"
                position="top"
                className="fill-foreground text-lg font-semibold"
                formatter={(value: number) => `${value}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}

