"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Data } from "./loadData";
// import jdate from "joeldate";

const chartConfig = {
  users: {
    label: "Users",
  },
  editTimeUsers: {
    label: "Edit Time Users",
    color: "hsl(var(--chart-1))",
  },
  homeworkCheckerUsers: {
    label: "Homework Checker Users",
    color: "hsl(var(--chart-2))",
  },
  focusUsers: {
    label: "Focus Users",
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig;



export default function Component({ data: chartData, height=400 }: { data: Data[]; height?: number }) {
  const [timeRange, setTimeRange] = React.useState<string>("All Time");

  // console.log('Data', chartData);
  
  const filteredData = chartData.filter((item: any) => {
    if (timeRange==='All Time') return true;

    if (timeRange.at(-1)==='d') {
      let daysToSubtract=Number(timeRange.slice(0, -1))
      let d=new Date();
      let startDate=new Date(d);
      startDate.setDate(d.getDate()-daysToSubtract);
      // console.log({startDate, itemDate: item.date})
      return new Date(item.date)>=startDate;
    } else {
      return true;
    }
  })

  // console.log({chartData, filteredData});
  
  return (
    <Card className="no-animation" style={{
      height: height+200
    }}>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Software Weekly Users</CardTitle>
          <CardDescription>
            This chart shows how many people are using each software each week.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="unstyled w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="All Time" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="All Time" className="rounded-lg">
              All Time
            </SelectItem>
            <SelectItem value="365d" className="rounded-lg">
              Last 12 months
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto w-full"
          style={{
            height
          }}
        >
          <LineChart data={filteredData}>
            <defs>
              <linearGradient id="fillEditTimeUsers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-editTimeUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-editTimeUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillHomeworkCheckerUsers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-homeworkCheckerUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-homeworkCheckerUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillFocusUsers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-fillFocusUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-fillFocusUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // minTickGap={30}
              ticks={chartData.filter((_: Data)=>{
                  return true;
                  // return d.date.getDate()===1; //get first date of every month
              }).map(_=>new Date().toISOString())}
              // }).map(d=>d.date.toISOString())}
              tickFormatter={(value) => {
                const d=new Date(value);
                return d.toLocaleDateString('en-US', {
                  month: 'numeric',
                  day: 'numeric'
                });
                // switch (d.getMonth()) {
                //   case 0: return d.getFullYear();
                //   case 1: return 'Feb';
                //   case 2: return 'Mar';
                //   case 3: return 'Apr';
                //   case 4: return 'May';
                //   case 5: return 'Jun';
                //   case 6: return 'Jul';
                //   case 7: return 'Aug';
                //   case 8: return 'Sep';
                //   case 9: return 'Oct';
                //   case 10: return 'Nov';
                //   case 11: return 'Dec';
                // }
                // const date = new Date(value)
                // return date.toLocaleDateString("en-US", {
                //   month: "short",
                //   day: "numeric",
                // })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelKey="date"
                  labelFormatter={(value, payload) => {
                    // Done by Cursor AI
                    const date=payload[0].payload.date;
                    if (!date) return value;
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: 'numeric'
                    });
                    // return jdate(new Date(date));
                    // return new Date(date).toLocaleDateString("en-US", {
                    //   month: "short",
                    //   day: "numeric",
                    // })
                  }}
                  indicator="dot"
                />
              }
            />
            <Line
              dataKey="editTimeUsers"
              type="monotone"
              stroke="var(--color-homeworkCheckerUsers)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="homeworkCheckerUsers"
              type="monotone"
              stroke="var(--color-editTimeUsers)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="focusUsers"
              type="monotone"
              stroke="var(--color-focusUsers)"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
