import {fetchLatestInvoices, fetchRevenue} from "../lib/data";
import {BuildAreaChart} from "@/app/ui/dashboard/charts/BuildAreaChart";
import {Suspense} from "react";
import {LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";

export default async function DashboardPage() {
  const latestInvoices = await fetchLatestInvoices();
  const revenue = await fetchRevenue();
  return (
      <div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 content-stretch">
              <Suspense fallback={<RevenueChartSkeleton/>}>
                  <RevenueChart revenue={revenue}/>
              </Suspense>
              <Suspense fallback={<LatestInvoicesSkeleton/>}>
                  <LatestInvoices  latestInvoices={latestInvoices}/>
              </Suspense>
              <BuildAreaChart/>
          </div>
      </div>
  );
}
