import React from "react";
import Form from "@/app/ui/invoices/create-form";
import { fetchCustomers } from "@/app/lib/data"
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeaderCell,
        TableRow,
} from '@tremor/react'; 

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
