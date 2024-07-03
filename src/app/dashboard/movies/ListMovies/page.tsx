import React from "react";

import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import {lusitana} from "@/app/ui/fonts";
import {PlusIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const peliculas = [
  {
    id_pelicula: 1,
    titulo: 'Ejemplo de Película 1',
    descripcion: 'Descripción de la película 1',
    ano_estreno: 2023,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 5,
    tarifa_alquiler: 9.99,
    duracion: '2 horas',
    costo_reemplazo: 14.99,
    clasificacion: 'PG-13',
    ultima_actualizacion: new Date('2023-09-30'),
  },
  {
    id_pelicula: 2,
    titulo: 'Ejemplo de Película 2',
    descripcion: 'Descripción de la película 2',
    ano_estreno: 2022,
    id_idioma: 2,
    id_idioma_original: 3,
    duracion_alquiler: 3,
    tarifa_alquiler: 7.99,
    duracion: '1 hora 30 minutos',
    costo_reemplazo: 12.99,
    clasificacion: 'PG',
    ultima_actualizacion: new Date('2023-09-28'),
  },
  // Más películas aquí...
];

// Columnas para la tabla de películas
const peliculasColumns = [
  {
    header: 'ID Película',
    accessorKey: 'id_pelicula',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Título',
    accessorKey: 'titulo',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Descripción',
    accessorKey: 'descripcion',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Año de Estreno',
    accessorKey: 'ano_estreno',
    enableSorting: true,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Duración Alquiler',
    accessorKey: 'duracion_alquiler',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Tarifa de Alquiler',
    accessorKey: 'tarifa_alquiler',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Duración',
    accessorKey: 'duracion',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Costo Reemplazo',
    accessorKey: 'costo_reemplazo',
    enableSorting: false,
    meta: {
      align: 'text-right',
    },
  },
  {
    header: 'Clasificación',
    accessorKey: 'clasificacion',
    enableSorting: false,
    meta: {
      align: 'text-left',
    },
  },
  {
    header: 'Última Actualización',
    accessorKey: 'ultima_actualizacion',
    enableSorting: true,
    meta: {
      align: 'text-right',
    },
  },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Page() {

  return (
      <Card className={'flex flex-col gap-5'}>
        <Card className="flex justify-between items-center w-full">
          <h1 className={`${lusitana.className} text-2xl font-bold`}>Películas</h1>
          <div className="flex gap-5">
            <button
                className="flex items-center p-4 rounded-lg bg-blue-600 font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                  <span className="hidden md:block">
                      Crear Película
                  </span>{" "}
              <PlusIcon className="h-5 md:ml-4" />
            </button>
            <button
                className="flex items-center p-4 rounded-lg bg-blue-600 font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                  <span className="hidden md:block">
                      Exportar
                  </span>{" "}
              <PlusIcon className="h-5 md:ml-4" />
            </button>
          </div>
        </Card>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                {peliculasColumns.map((column) => (
                    <TableHeaderCell
                        key={column.header}
                        className={classNames(
                            'px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider',
                            column.meta?.align,
                        )}
                    >
                      {column.header}
                    </TableHeaderCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {peliculas.map((pelicula) => (
                  <TableRow key={pelicula.id_pelicula}>
                    {peliculasColumns.map((column) => (
                        <TableCell
                            key={column.header}
                            className={classNames(
                                'px-6 py-4 whitespace-nowrap text-sm',
                                column.meta?.align,
                            )}
                        >
                          {pelicula.titulo}
                        </TableCell>
                    ))}
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Card>
  )
}
