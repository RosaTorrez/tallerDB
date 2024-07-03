import {fetchCategories} from "@/app/lib/queries";
import {Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow} from "@tremor/react";
import {lusitana} from "@/app/ui/fonts";
import {PlusIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {DeleteCategory, UpdateCategory} from "@/app/ui/categories/buttons";

export default async function Page() {
    const categories = await fetchCategories()
    function formatDateTime(dateTimeString: string) {
        const date = new Date(dateTimeString);

        // Formatear la fecha y hora
        const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        const formattedTime = date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Devolver la fecha y hora formateada
        return `${formattedDate} ${formattedTime}`;
    }
  return (
    <div>
      <Card className={"flex flex-col gap-5"}>
          <Card className={"flex justify-between items-center"}>
              <h1 className={`${lusitana.className}`}>
                  Lista de Categorias
              </h1>
              <Link
                  href="/dashboard/categories/createCategories"
                  className="flex h-full items-center rounded-lg bg-blue-600 p-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                  <span className="hidden md:block">
                      Crear Categoria
                  </span>{" "}
                  <PlusIcon className="h-5 md:ml-4" />
              </Link>
          </Card>
          <Card>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableHeaderCell>
                              Nombre
                          </TableHeaderCell>
                          <TableHeaderCell>
                              Ultima Actualizacion
                          </TableHeaderCell>
                          <TableHeaderCell>
                              Acciones
                          </TableHeaderCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {categories.map(categoria =>(
                          <TableRow key={categoria.id_categoria}>
                              <TableCell>
                                  {categoria.nombre}
                              </TableCell>
                              <TableCell>
                                  {formatDateTime(categoria.ultima_actualizacion.toString())}
                              </TableCell>
                              <TableCell className={"flex gap-5"}>
                                  <UpdateCategory id={categoria.id_categoria}/>
                                  <DeleteCategory id={categoria.id_categoria}/>
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </Card>
      </Card>
    </div>
  );
}
