"use server";
import { Cliente, ClientState } from "@/app/lib/definitions";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClientDb } from "@/app/lib/queries";

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

const createClientSchema = ClientSchema.omit({
  id_cliente: true,
  activo: true,
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
