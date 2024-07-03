"use client";
import {Card, TextInput} from "@tremor/react";
import {Categoria} from "@/app/lib/definitions";
import {lusitana} from "@/app/ui/fonts";
import {UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {Button} from "@/app/ui/button";
import {useFormState} from "react-dom";
import {updateCategoryDb} from "@/app/lib/actions";

export default function UpdateCategoryForm({category}: {category:Categoria}) {
    const updateHandler = updateCategoryDb.bind(null, category.id_categoria)
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
                          className={"py-3 text-base font-bold"}
                          defaultValue={category.nombre}
                          placeholder="Enter category name"
                          error={state?.errors?.nombre && state.success}
                          errorMessage={state?.errors?.nombre && state.errors.nombre[0]}
                      />
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
                      Actualizar Categoria
                  </Button>
              </div>
          </form>
      </div>
  );
}
