"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "rgb(255, 193, 7)" },
  { browser: "safari", visitors: 200, fill: "rgb(76, 175, 80)" },
  { browser: "firefox", visitors: 187, fill: "rgb(244, 67, 54)" },
  { browser: "edge", visitors: 173, fill: "rgb(9 105 218 / var(--tw-bg-opacity, 1))" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "High",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Low",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Medium",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Pass",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Fail",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ProjectChart() {
  return (
    <Card className="flex  flex-col box_effect ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Project overall </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[225px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing recent project data for the last 6 months
        </div>
      </CardFooter>
    </Card>

  )
}
