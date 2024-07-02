"use client";
import Link from "next/link";
import {
  PhoneIcon,
  UserIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import {Card, NumberInput, TextInput} from "@tremor/react";
import { useFormState } from "react-dom"
import {createClient} from "@/app/lib/actions";
import {lusitana} from "@/app/ui/fonts";

export default function Form() {
  const initialStatus = {
    errors: {},
    message: null,
  }
  const [state, dispatch] = useFormState(createClient, null)
  return (
      <div className={"flex-1 space-y-5 h-full"}>
        <Card className='flex w-full items-center justify-center shadow-2xl box-decoration-clone'>
          <h1 className={`${lusitana.className} text-4xl`}>
            Registra un nuevo cliente
          </h1>
        </Card>
        <form action={dispatch}>
          <Card className="rounded-md p-4 md:p-6 mx-auto space-y-8 h-full flex flex-col justify-evenly ">
            {/* Customer Name */}
            {/* Invoice Amount */}
            <div className="relative">
              <TextInput
                  icon={UserIcon}
                  id="name"
                  name="name"
                  type="text"
                  className={"py-3 text-base font-bold"}
                  placeholder="Enter client name"
                  error={state?.errors?.nombre && state.success}
                  errorMessage={state?.errors?.nombre && state.errors.nombre[0]}
              />
            </div>

            {/* Invoice Status */}
            <div className="relative">
              <TextInput
                  icon={UserIcon}
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
                  id="email"
                  name="email"
                  type="email"
                  className={"py-3 text-base font-bold"}
                  placeholder="Enter client email"
                  error={state?.errors?.correo_electronico && state.success}
                  errorMessage={state?.errors?.correo_electronico && state.errors.correo_electronico[0]}
              />
            </div>

            <div className="relative">
              <NumberInput
                  icon={PhoneIcon}
                  enableStepper={false}
                  id="phone"
                  name="phone"
                  className={"py-3 text-base font-bold"}
                  placeholder="Enter client phone number"
                  error={state?.errors?.telefono && state.success}
                  errorMessage={state?.errors?.telefono && state.errors.telefono[0]}
              />
            </div>
            {state?.message && <p className='mt-2 text-red-500'>{state?.message}</p>}
          </Card>
          <div className="mt-6 flex justify-center md:justify-end gap-4">
            <Link
                href="/dashboard/client/ListClients"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Create Invoice</Button>
          </div>

        </form>
      </div>
  );
}