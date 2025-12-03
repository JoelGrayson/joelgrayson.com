"use client"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface PowerDataPoint {
  date: string
  value: number | null
}

interface PowerChartProps {
  data: PowerDataPoint[]
}

const formatTime = (dateString: string) => {
  const date = new Date(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

// Custom pulsing dot component
const PulsingDot = (props: any) => {
  const { cx, cy, payload, dataLength, index } = props

  // Only render on the last point
  if (index !== dataLength - 1) {
    return null
  }

  return (
    <g>
      <circle cx={cx} cy={cy} r={24} fill="#ef4444" className="animate-pulse" opacity={0.4} />
      <circle cx={cx} cy={cy} r={5} fill="#dc2626" />
    </g>
  )
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
        <p className="text-base text-black">{Math.round(payload[0].value)} kWh</p>
      </div>
    )
  }
  return null
}

export default function PowerChart({ data }: PowerChartProps) {
  const chartData = data
    .filter((point) => point.value !== null)
    .map((point) => ({
      time: formatTime(point.date),
      power: point.value as number, // Values are already in watts, removed kWh to watts conversion
    }))

  return (
    <Card className="w-full max-w-4xl relative border-0">
      <CardContent>
      
        <ChartContainer
          config={{
            power: {
              label: "Power (W)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="time"
                className="text-xs"
                tick={{ fill: "hsl(var(--foreground))" }}
                // label={{
                //   value: "Time",
                //   position: "insideBottom",
                //   offset: -5,
                //   style: { fontSize: "1.7rem", fill: "hsl(var(--foreground))" },
                // }}
              />
              <YAxis
                label={{
                  value: "Power (Watts)",
                  angle: -90,
                  position: "insideLeft",
                  dy: 50,
                  style: { fontSize: "1.7rem", fill: "hsl(var(--foreground))" },
                }}
                className="text-xs"
                tick={{ fill: "hsl(var(--foreground))" }}
              />
              {/* <ChartTooltip content={<ChartTooltipContent />} /> */}
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
              <Line
                key="power-line"
                type="monotone"
                dataKey="power"
                stroke="#f5b72c"
                strokeWidth={4}
                dot={false}
                animationDuration={300}
              />
              <Line
                key="power-dot"
                type="monotone"
                dataKey="power"
                stroke="transparent"
                dot={(props) => <PulsingDot {...props} dataLength={chartData.length} />}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

