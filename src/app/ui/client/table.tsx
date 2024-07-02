
import { UpdateClient, DeleteClient } from "@/app/ui/client/buttons";
import {fetchFilteredClients} from "@/app/lib/queries";
import {Badge, Card} from "@tremor/react";
import clsx from "clsx";

export default async function InvoicesTable({ query, currentPage }: { query: string; currentPage: number; }) {
  const clients = await fetchFilteredClients(query, currentPage);
  return (
      <Card className="mt-6 flow-root rounded-xl">
        <div className="inline-block min-w-full rounded-xl overflow-hidden align-middle md:p-0 p-2 bg-opacity-0 backdrop-filter backdrop-blur-[17px] backdrop-saturate-200 ">
          <div className="rounded-lg bg-slate-900 md:pt-0">
            <div className="md:hidden">
              {clients?.map((invoice) => {
                return (
                    <Card
                        key={invoice.id_cliente}
                        className="mb-2 w-full rounded-md bg-white p-4"
                    >
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <div className="mb-2 flex items-center">

                            <p>{invoice.nombre}</p>
                          </div>
                          <p className="text-sm text-gray-500">{invoice.correo_electronico}</p>
                        </div>

                      </div>
                      <div className="flex w-full items-center justify-between pt-4">

                        <div className="flex justify-end gap-2">
                          <UpdateClient id={invoice.id_cliente}/>
                          <DeleteClient id={invoice.id_cliente}/>
                        </div>
                      </div>
                    </Card>
                )
              })}
            </div>
            <table className="hidden min-w-full md:table text-tremor-background-emphasis dark:text-tremor-background border-t-8 border-t-indigo-800">
              <thead
                  className="rounded-lg text-left text-sm font-normal text-gray-700 uppercase bg-slate-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Client
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Apellido
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Telefono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">
                      Actions
                  </span>
                </th>
              </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
              {clients?.map((invoice) => (
                  <tr
                      key={invoice.id_cliente}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{invoice.nombre}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.apellido}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.correo_electronico}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.telefono}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Badge
                          color={invoice.activo ? "success" : "danger"}
                          className={clsx(
                              "inline-flex items-center rounded-full px-2 py-1 text-xs border",
                              {
                                "bg-gray-100 text-gray-500": !invoice.activo,
                                "bg-green-800/20 border-green-800 text-white": invoice.activo,
                              },
                          )}
                      >
                        {invoice.activo ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        < UpdateClient id={invoice.id_cliente}/>
                        <DeleteClient id={invoice.id_cliente}/>
                      </div>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
  );
}
