import { Card, Divider } from "@tremor/react";
import { fetchLatestInvoices } from "@/app/lib/data";
import * as process from "node:process";

export default async function InvoicePage() {
  const res = await fetchLatestInvoices();
  const dataApi = await fetch(`${process.env.BASE_URL}/api/invoices`);
  console.log(dataApi)
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {res.map((item) => (
        <Card
          key={item.id}
          className="group relative dark:text-tremor-background-muted tremor-Callout-root rounded-tremor-default text-tremor-default bg-indigo-500 border-indigo-700 text-indigo-700 dark:bg-opacity-10 bg-opacity-10 border-l-4 hover:border-l-8 transition delay-700 duration-300 ease-in-out"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={
                item.name === "Delba de Oliveira"
                  ? "/customers/delba-de-oliveira.jpg"
                  : item.image_url
              }
              alt={item.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <Divider>Customer Information</Divider>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={"#"}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {item.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.email}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{item.amount}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
