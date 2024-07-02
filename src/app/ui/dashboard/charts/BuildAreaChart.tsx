"use client";
import { AreaChart, BarChart, Card, Title } from "@tremor/react";
import { lusitana } from "@/app/ui/fonts";
import { CalendarIcon } from "@heroicons/react/24/outline";

const chartdata = [
  {
    date: "Jan 22",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 22",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 22",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 22",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 22",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 22",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 22",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 22",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 22",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 22",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 22",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 22",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function BuildAreaChart() {
  return (
    <>
      <div className="w-full md:col-span-4">
        <h2
          className={`${lusitana.className} mb-4 text-xl text-gray-500 md:text-2xl`}
        >
          Newsletter Revenue
        </h2>
        {/* NOTE: comment in this code when you get to this point in the course */}
        <div className="rounded-xl bg-opacity-0 border border-opacity-25 backdrop-filter backdrop-blur-[17px] backdrop-saturate-200 text-tremor-background-emphasis dark:text-tremor-background p-4">
          <Card className="card-glass">
            <Title className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Newsletter Revenue
            </Title>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $34,567
            </p>
            <AreaChart
              className="mt-4 h-72"
              data={chartdata}
              index="date"
              yAxisWidth={65}
              showAnimation={true}
              animationDuration={2000}
              showGridLines={true}
              showYAxis={true}
              categories={["SolarPanels", "Inverters"]}
              colors={["indigo", "cyan"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </div>
      </div>
    </>
  );
}
