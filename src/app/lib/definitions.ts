
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;

  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};


export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export type ClientState = {
  errors?:{
    id_cliente?: string[];
    nombre?: string[];
    apellido?: string[];
    correo_eletronico?: string[];
    activo?: string[];
    telefono?: string[];
  };
  message?: string | null;
}


// movie database types

export type Actor = {
  id_actor: number;
  nombre: string;
  apellido: string;
  ultima_actualizacion: string;
}

export type Categoria = {
  id_categoria: number;
  nombre: string;
  ultima_actualizacion: string;
}

export type Cliente = {
  id_cliente: number;
  nombre: string;
  apellido: string;
  correo_electronico: string;
  activo: boolean;
  telefono: number;
}

export type Pelicula = {
  id_pelicula: number;
  titulo: string;
  descripcion: string;
  anio_estreno: number;
  id_idioma: number;
  id_idioma_original: number;
  duracion_alquiler: number;
  tarifa_alquiler: number;
  costo_reemplazo: number;
  duracion: number;
  clasificacion: string;
  ultima_actualizacion: string;
};

export type ActorPelicula = {
  id_actor: number;
  id_pelicula: number;
  ultima_actualizacion: string;
}

export type CategoriaPelicula = {
  id_pelicula: number;
  id_categoria: number;
  ultima_actualizacion: string;
}

export type Inventario = {
  id_inventario: number;
  id_pelicula: number;
  ultima_actualizacion: string;
}

export type Idioma = {
  id_idioma: number;
  nombre_idioma: string;
  ultima_actualizacion: string;
}

export type Renta = {
  id_renta: number;
  fecha_renta: string;
  id_cliente: number;
  fecha_pago: string;
  ultima_actualizacion: string;
}

