"use client";
import {Card, NumberInput, Switch, TextInput} from "@tremor/react";
import {Cliente} from "@/app/lib/definitions";
import {lusitana} from "@/app/ui/fonts";
import {CheckIcon, ClockIcon, EnvelopeIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {Button} from "@/app/ui/button";
import {useFormState} from "react-dom";
import {updateclient} from "@/app/lib/actions";

export default function UpdateClientForm({client}: {client:Cliente}) {
    const updateHandler = updateclient.bind(null, client.id_cliente)
    const [state, dispatch] = useFormState(updateHandler, null);
  return (
      <div className={"flex-1 space-y-5 h-full"}>
          <Card className="flex w-full items-center justify-center shadow-2xl box-decoration-clone">
              <h1 className={`${lusitana.className} text-4xl`}>
                  Registra un nuevo cliente
              </h1>
          </Card>
          <form action={dispatch}>
              <Card className="rounded-md p-4 md:p-6 mx-auto space-y-8 h-full flex flex-col justify-evenly ">
                  <div className="relative">
                      <TextInput
                          icon={UserIcon}
                          id="name"
                          name="name"
                          type="text"
                          defaultValue={client.nombre}
                          className={"py-3 text-base font-bold"}
                          placeholder="Enter client name"
                          error={state?.errors?.nombre && state.success}
                          errorMessage={state?.errors?.nombre && state.errors.nombre[0]}
                      />
                  </div>

                  <div className="relative">
                      <TextInput
                          icon={UserIcon}
                          defaultValue={client.apellido}
                          id="lastName"
                          name="lastName"
                          type="text"
                          className={"py-3 text-base font-bold"}
                          placeholder="Enter client last name"
                          error={state?.errors?.apellido && state.success}
                          errorMessage={state?.errors?.apellido && state.errors.apellido[0]}
                      />
                  </div>

                  <div className="relative">
                      <TextInput
                          icon={EnvelopeIcon}
                          defaultValue={client.correo_electronico}
                          id="email"
                          name="email"
                          type="email"
                          className={"py-3 text-base font-bold"}
                          placeholder="Enter client email"
                          error={state?.errors?.correo_electronico && state.success}
                          errorMessage={
                              state?.errors?.correo_electronico &&
                              state.errors.correo_electronico[0]
                          }
                      />
                  </div>

                  <div className="relative">
                      <NumberInput
                          icon={PhoneIcon}
                          enableStepper={false}
                          id="phone"
                          name="phone"
                          defaultValue={client.telefono}
                          className={"py-3 text-base font-bold"}
                          placeholder="Enter client phone number"
                          error={state?.errors?.telefono && state.success}
                          errorMessage={state?.errors?.telefono && state.errors.telefono[0]}
                      />
                  </div>

                  <div className="relative">
                      <fieldset>
                          <legend className="mb-2 block text-sm font-medium">
                              Set the invoice status
                          </legend>
                          <div
                              className="rounded-md border border-gray-200 bg-white px-[14px] py-3 peer block w-full cursor-pointer pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-900 p-2.5 dark:bg-gray-700 dark:text-white">
                              <div className="flex gap-4">
                                  <div className="flex items-center">
                                      <input
                                          id="inactive"
                                          name="status"
                                          type="radio"
                                          value="inactive"
                                          defaultChecked={client.activo}
                                          aria-describedby="status-error"
                                          className="h-4 w-4 cursor-pointer bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-white checked:bg-indigo-600 dark:checked:bg-indigo-600 outline-0"
                                      />
                                      <label
                                          htmlFor="inactive"
                                          className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-700 px-3 py-1.5 text-xs font-medium text-tremor-background"
                                      >
                                          Inactivo <ClockIcon className="h-4 w-4"/>
                                      </label>
                                  </div>
                                  <div className="flex items-center">
                                      <input
                                          id="active"
                                          name="status"
                                          type="radio"
                                          value="active"
                                          defaultChecked={!client.activo}
                                          aria-describedby="status-error"
                                          className="h-4 w-4 cursor-pointer bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-white checked:bg-indigo-600 dark:checked:bg-indigo-600 outline-0"
                                      />
                                      <label
                                          htmlFor="active"
                                          className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                      >
                                          Activo <CheckIcon className="h-4 w-4"/>
                                      </label>
                                  </div>
                              </div>
                              <div id="status-error" aria-atomic="true" aria-live="polite">
                                  {state?.errors?.activo &&
                                      state?.errors?.activo.map((error) => (
                                          <p key={error} className="mt-2 text-sm text-red-500">
                                              {error}
                                          </p>
                                      ))}
                              </div>
                          </div>
                      </fieldset>
                  </div>

                  {state?.message && (
                      <p className="mt-2 text-red-500">{state?.message}</p>
                  )}
              </Card>
              <div className="mt-6 flex justify-center md:justify-end gap-4">
                  <Link
                      href="/dashboard/client/ListClients"
                      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                  >
                      Cancel
                  </Link>
                  <Button type="submit">
                      Actualizar Cliente
                  </Button>
              </div>
          </form>
      </div>
  );
}
