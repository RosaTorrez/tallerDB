"use server";
import { Cliente, ClientState } from "@/app/lib/definitions";
import { Actor } from "@/app/lib/definitions";
import { Pelicula } from "@/app/lib/definitions";
import { Categoria } from "@/app/lib/definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClientDb } from "@/app/lib/queries";
import { createActorDb } from "@/app/lib/queries";
import { createMoviesDb } from "@/app/lib/queries";
import { createCategoriesDb, updateCategory } from "@/app/lib/queries";

import { pool } from "@/utils/connector";

const ClientSchema = z.object({
  id_cliente: z.number(),
  nombre: z
    .string({
      required_error: "El nombre del cliente es requerido",
    })
    .min(3, {
      message: "El nombre del cliente debe tener al menos 3 caracteres",
    }),
  apellido: z
    .string({
      required_error: "El apellido del cliente es requerido",
    })
    .min(3, {
      message: "El apellido del cliente debe tener al menos 3 caracteres",
    }),
  correo_electronico: z
    .string({
      required_error: "El email del cliente es requerido",
    })
    .email({
      message: "El email no es válido",
    }),
  activo: z.boolean({
    required_error: "El estado del cliente es requerido",
  }),
  telefono: z.number({
    required_error: "El teléfono del cliente es requerido",
  }),
});

const ActorSchema = z.object({
    id_actor: z.number(),
    nombre: z
      .string({
        required_error: "El nombre del actor es requerido",
      })
      .min(3, {
        message: "El nombre del actor debe tener al menos 3 caracteres",
      }),
    apellido: z
      .string({
        required_error: "El apellido del actor es requerido",
      })
      .min(3, {
        message: "El apellido del actor debe tener al menos 3 caracteres",
      }),
});

const MovieSchema = z.object({
    id_pelicula: z.number(),
    titulo: z
      .string({
        required_error: "El titulo de la película es requerido",
      })
      .min(2, {
        message: "El nombre de la película debe tener al menos 2 caracteres",
      }),
    descripcion: z
      .string({
        required_error: "El enlace de la pelicula es requerida",
      }),
    anio_estreno: z
      .number({
        required_error: "El año de estreno es requerido",
      }),
    id_idioma: z
      .number({
        required_error: "El idioma es requerido",
      }),
    id_idioma_original: z
      .number({
        required_error: "El idioma original principal es requerido",
      }),
    duracion_alquiler: z
      .number({
        required_error: "La duracion del alquiler es requerida",
      }),
    tarifa_alquiler: z
      .number({
        required_error: "La tarifa del alquiler es requerida",
      }),
    costo_reemplazo: z
      .number({
        required_error: "El costo de reemplazo es requerido",
      }),
    duracion: z
      .string({
        required_error: "La duracion de la pelicula es requerida",
      }),
    clasificacion: z
      .string({
        required_error: "La clasificacion de la película es requerido",
      })
});

const CategoriesSchema = z.object({
    id_categoria: z.number(),
    nombre: z
      .string({
        required_error: "El nombre de la categoría es requerida",
      })
      .min(3, {
        message: "El nombre de la categoría debe tener al menos 3 caracteres",
      }),
});

const createClientSchema = ClientSchema.omit({
  id_cliente: true,
  activo: true,
});

const createActorSchema = ActorSchema.omit({
    id_actor: true,
});

const createMovieSchema = MovieSchema.omit({
    id_pelicula: true,
});

const createCategoriesSchema = CategoriesSchema.omit({
    id_categoria: true,
});

export async function createClient(state: any, formData: FormData) {
  const validateFields = createClientSchema.safeParse({
    nombre: formData.get("name"),
    apellido: formData.get("lastName"),
    correo_electronico: formData.get("email"),
    telefono: Number(formData.get("phone")),
  });
  console.log(validateFields);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Por favor, corrija los errores en el formulario",
      success: true,
    };
  }

  const client: Cliente = {
    id_cliente: 0,
    ...validateFields.data,
    activo: true,
  } as Cliente;
  try {
    await createClientDb(client);
  } catch (e: any) {
    return {
      error:
        e instanceof z.ZodError
          ? e.issues
          : [
              {
                path: ["unknown"],
                message: e.message,
              },
            ],
    };
  }
  revalidatePath("/dashboard/client/ListClients");
  redirect("/dashboard/client/ListClients");
}

export async function createActor(state:any, formData:FormData) {
    const validateFields = createActorSchema.safeParse({
        nombre: formData.get("name"),
        apellido: formData.get("lastName"),
      });
      console.log(validateFields);
    
      if (!validateFields.success) {
        return {
          errors: validateFields.error.flatten().fieldErrors,
          message: "Por favor, corrija los errores en el formulario",
          success: true,
        };
      }
    
      const actor: Actor = {
        id_actor: 0,
        ...validateFields.data,
      } as Actor;
      try {
        await createActorDb(actor);
      } catch (e: any) {
        return {
          error:
            e instanceof z.ZodError
              ? e.issues
              : [
                  {
                    path: ["unknown"],
                    message: e.message,
                  },
                ],
        };
      }
      revalidatePath("/dashboard/actors/ListActors");
      redirect("/dashboard/actors/ListActors");
}

export async function createMovie(state:any, formData:FormData) {
    const validateFields = createMovieSchema.safeParse({
        titulo: formData.get("title"),
        descripcion: formData.get("url"),
        anio_estreno: Number(formData.get("anio_estreno")),
        id_idioma:Number(formData.get("id_idioma")),
        id_idioma_original:Number(formData.get("id_idioma_original")),
        duracion_alquiler: Number(formData.get("duracion_alquiler")),
        tarifa_alquiler: Number(formData.get("tarifa_alquiler")),
        costo_reemplazo: Number(formData.get("costo_reemplazo")),
        duracion: formData.get("duracion"),
        clasificacion: formData.get("clasificacion"),
      });
      console.log(validateFields);
    
      if (!validateFields.success) {
        return {
          errors: validateFields.error.flatten().fieldErrors,
          message: "Por favor, corrija los errores en el formulario",
          success: true,
        };
      }
    
      const pelicula: Pelicula = {
        id_pelicula: 0,
        ...validateFields.data,
      } as Pelicula;
      try {
        await createMoviesDb(pelicula);
      } catch (e: any) {
        return {
          error:
            e instanceof z.ZodError
              ? e.issues
              : [
                  {
                    path: ["unknown"],
                    message: e.message,
                  },
                ],
        };
      }
      revalidatePath("/dashboard/movies/ListMovies");
      redirect("/dashboard/movies/ListMovies");
}

export async function createCategories(state:any, formData:FormData) {
    const validateFields = createCategoriesSchema.safeParse({
        nombre: formData.get("name"),
      });
      console.log(validateFields);
    
      if (!validateFields.success) {
        return {
          errors: validateFields.error.flatten().fieldErrors,
          message: "Por favor, corrija los errores en el formulario",
          success: true,
        };
      }
    
      const categoria: Categoria = {
        id_categoria: 0,
        ...validateFields.data,
      } as Categoria;
      try {
        await createCategoriesDb(categoria);
      } catch (e: any) {
        return {
          error:
            e instanceof z.ZodError
              ? e.issues
              : [
                  {
                    path: ["unknown"],
                    message: e.message,
                  },
                ],
        };
      }
      revalidatePath("/dashboard/categories/ListCategories");
      redirect("/dashboard/categories/ListCategories");
}

export async function updateCategoryDb(id: number, state:any, formData:FormData) {
    const validateFields = createCategoriesSchema.safeParse({
        nombre: formData.get("name"),
    });
    console.log(validateFields);

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Por favor, corrija los errores en el formulario",
            success: true,
        };
    }

    const categoria: Categoria = {
        id_categoria: id,
        ...validateFields.data,
    } as Categoria;
    try {
        await updateCategory(categoria)
    } catch (e: any) {
        return {
            error:
                e instanceof z.ZodError
                    ? e.issues
                    : [
                        {
                            path: ["unknown"],
                            message: e.message,
                        },
                    ],
        };
    }
    revalidatePath("/dashboard/categories/ListCategories");
    redirect("/dashboard/categories/ListCategories");
}

export async function deleteClient(id: number) {
  try {
    const query = `SELECT eliminar_cliente($1);`;
    const values = [id];
    await pool.query(query, values);
  } catch (e: any) {
    return {
      error:
        e instanceof z.ZodError
          ? e.issues
          : [
              {
                path: ["unknown"],
                message: e.message,
              },
            ],
    };
  }
  revalidatePath("/dashboard/client/ListClients");
  redirect("/dashboard/client/ListClients");
}

const updateClientSchema = ClientSchema.omit({ id_cliente: true });

export async function updateclient(id: number, state: any, formData: FormData) {
  const validateFields = updateClientSchema.safeParse({
    nombre: formData.get("name"),
    apellido: formData.get("lastName"),
    correo_electronico: formData.get("email"),
    telefono: Number(formData.get("phone")),
    activo: formData.get("status") !== "inactive",
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Por favor, corrija los errores en el formulario",
      success: true,
    };
  }

  console.log(validateFields.data)

  try {
    const query = `SELECT actualizar_cliente($1, $2, $3, $4, $5, $6);`;
    const { nombre, apellido, telefono, correo_electronico, activo } =
      validateFields.data;
    const values = [id, nombre, apellido, correo_electronico, activo, telefono];
    await pool.query(query, values);
  } catch (e: any) {
    return {
      error:
        e instanceof z.ZodError
          ? e.issues
          : [
              {
                path: ["unknown"],
                message: e.message,
              },
            ],
    };
  }
  revalidatePath("/dashboard/client/ListClients");
  redirect("/dashboard/client/ListClients");
}
