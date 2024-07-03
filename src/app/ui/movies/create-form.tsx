"use client";
import Link from "next/link";
import { PhoneIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { Card, NumberInput, TextInput } from "@tremor/react";
import { useFormState } from "react-dom";
import { createMovie } from "@/app/lib/actions";
import { lusitana } from "@/app/ui/fonts";

export default function Form() {
  const initialStatus = {
    errors: {},
    message: null,
  };
  const [state, dispatch] = useFormState(createMovie, null);
  return (
    <div className={"flex-1 space-y-5 h-full"}>
      <Card className="flex w-full items-center justify-center shadow-2xl box-decoration-clone">
        <h1 className={`${lusitana.className} text-4xl`}>
          Registra una nueva Pelicula
        </h1>
      </Card>
      <form action={dispatch}>
        <Card className="rounded-md p-4 md:p-6 mx-auto space-y-8 h-full flex flex-col justify-evenly ">
          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="title"
              name="title"
              type="text"
              className={"py-3 text-base font-bold"}
              placeholder="Enter movie title"
              error={state?.errors?.titulo && state.success}
              errorMessage={state?.errors?.titulo && state.errors.titulo[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="url"
              name="url"
              type="text"
              className={"py-3 text-base font-bold"}
              placeholder="Enter url movie"
              error={state?.errors?.descripcion && state.success}
              errorMessage={state?.errors?.descripcion && state.errors.descripcion[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="anio_estreno"
              name="anio_estreno"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese el año de la pelicula"
              error={state?.errors?.anio_estreno && state.success}
              errorMessage={state?.errors?.anio_estreno && state.errors.anio_estreno[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="id_idioma"
              name="id_idioma"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese el id del idioma"
              error={state?.errors?.id_idioma && state.success}
              errorMessage={state?.errors?.id_idioma && state.errors.id_idioma[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="id_idioma_original"
              name="id_idioma_original"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese el id del idioma original"
              error={state?.errors?.id_idioma_original && state.success}
              errorMessage={state?.errors?.id_idioma_original && state.errors.id_idioma_original[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="duracion_alquiler"
              name="duracion_alquiler"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese los dias de duracion del alquiler"
              error={state?.errors?.duracion_alquiler && state.success}
              errorMessage={state?.errors?.duracion_alquiler && state.errors.duracion_alquiler[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="tarifa_alquiler"
              name="tarifa_alquiler"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese la tarifa de la pelicula"
              error={state?.errors?.tarifa_alquiler && state.success}
              errorMessage={state?.errors?.tarifa_alquiler && state.errors.tarifa_alquiler[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="costo_reemplazo"
              name="costo_reemplazo"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese en costo de reemplazo de la pelicula"
              error={state?.errors?.costo_reemplazo && state.success}
              errorMessage={state?.errors?.costo_reemplazo && state.errors.costo_reemplazo[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="costo_reemplazo"
              name="costo_reemplazo"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese en costo de reemplazo de la pelicula"
              error={state?.errors?.costo_reemplazo && state.success}
              errorMessage={state?.errors?.costo_reemplazo && state.errors.costo_reemplazo[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="duracion"
              name="duracion"
              type="text"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese la duracion de la pelicula"
              error={state?.errors?.duracion && state.success}
              errorMessage={state?.errors?.duracion && state.errors.duracion[0]}
            />
          </div>

          <div className="relative">
            <TextInput
              icon={UserIcon}
              id="clasificacion"
              name="clasificacion"
              type="text"
              className={"py-3 text-base font-bold"}
              placeholder="Ingrese la clasificacion de la pelicula"
              error={state?.errors?.clasificacion && state.success}
              errorMessage={state?.errors?.clasificacion && state.errors.clasificacion[0]}
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
          <Button type="submit">Create Invoice</Button>
        </div>
      </form>
    </div>
  );
}
