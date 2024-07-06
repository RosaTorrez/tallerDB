// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.jpg",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[6].id,
    amount: 7,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-18",
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2023-10-04",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

// taller db data

const actors = [
  {
    nombre: "Tom",
    apellido: "Hanks",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Leonardo",
    apellido: "DiCaprio",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Brad",
    apellido: "Pitt",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Robert",
    apellido: "Downey Jr.",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Chris",
    apellido: "Hemsworth",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Scarlett",
    apellido: "Johansson",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Dwayne",
    apellido: "Johnson",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Jennifer",
    apellido: "Aniston",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Ryan",
    apellido: "Reynolds",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Gal",
    apellido: "Gadot",
    ultima_actualizacion: "2020-12-31",
  },
];

const categories = [
  {
    nombre: "Acción",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Comedia",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Ciencia Ficción",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Terror",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Romance",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Animación",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Aventura",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Fantasía",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Documental",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre: "Suspenso",
    ultima_actualizacion: "2020-12-31",
  },
];

const clients = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    correo_electronico: "juan@example.com",
    activo: true,
    telefono: 123456789,
  },
  {
    nombre: "María",
    apellido: "Gómez",
    correo_electronico: "maria@example.com",
    activo: true,
    telefono: 987654321,
  },
  {
    nombre: "Pedro",
    apellido: "Martínez",
    correo_electronico: "pedro@example.com",
    activo: true,
    telefono: 555444333,
  },
  {
    nombre: "Laura",
    apellido: "López",
    correo_electronico: "laura@example.com",
    activo: true,
    telefono: 111222333,
  },
  {
    nombre: "Carlos",
    apellido: "Sánchez",
    correo_electronico: "carlos@example.com",
    activo: true,
    telefono: 999888777,
  },
  {
    nombre: "Ana",
    apellido: "García",
    correo_electronico: "ana@example.com",
    activo: true,
    telefono: 333222111,
  },
  {
    nombre: "Luis",
    apellido: "Fernández",
    correo_electronico: "luis@example.com",
    activo: true,
    telefono: 777888999,
  },
  {
    nombre: "Elena",
    apellido: "Rodríguez",
    correo_electronico: "elena@example.com",
    activo: true,
    telefono: 665555444,
  },
  {
    nombre: "David",
    apellido: "González",
    correo_electronico: "david@example.com",
    activo: true,
    telefono: 444555566,
  },
  {
    nombre: "Sofía",
    apellido: "Pérez",
    correo_electronico: "juan@example.com",
    activo: true,
    telefono: 123456789,
  },
];

const movies = [
  {
    titulo: "Titanic",
    descripcion: "foto url",
    anio_estreno: 2000,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 5,
    tarifa_alquiler: 2.99,
    costo_reemplazo: 9.99,
    duracion: "2 hours",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Mar 2",
    descripcion: "foto url",
    anio_estreno: 2005,
    id_idioma: 2,
    id_idioma_original: 2,
    duracion_alquiler: 7,
    tarifa_alquiler: 1.99,
    costo_reemplazo: 8.99,
    duracion: "2 hour 45 minutes",
    clasificacion: "R",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Dragon Ball",
    descripcion: "foto url",
    anio_estreno: 2010,
    id_idioma: 3,
    id_idioma_original: 4,
    duracion_alquiler: 6,
    tarifa_alquiler: 2.49,
    costo_reemplazo: 7.99,
    duracion: "2 hours 30 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Men in Black 3",
    descripcion: "foto url",
    anio_estreno: 2012,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 6,
    tarifa_alquiler: 4.99,
    costo_reemplazo: 12.59,
    duracion: "1 hour 46 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Intensa mente 2",
    descripcion: "foto url",
    anio_estreno: 2024,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 7,
    tarifa_alquiler: 5.99,
    costo_reemplazo: 15.0,
    duracion: "1 hour 36 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Guardianes de la Galaxia Vol.3",
    descripcion: "foto url",
    anio_estreno: 2023,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 8,
    tarifa_alquiler: 4.99,
    costo_reemplazo: 12.99,
    duracion: "2 hours 29 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Mujercitas",
    descripcion: "foto url",
    anio_estreno: 2019,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 9,
    tarifa_alquiler: 5.99,
    costo_reemplazo: 17.99,
    duracion: "2 hours 15 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Mi Amigo Robot",
    descripcion: "foto url",
    anio_estreno: 2023,
    id_idioma: 2,
    id_idioma_original: 2,
    duracion_alquiler: 6,
    tarifa_alquiler: 4.99,
    costo_reemplazo: 20.99,
    duracion: "1 hour 42 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "El Rey León",
    descripcion: "foto url",
    anio_estreno: 1994,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 8,
    tarifa_alquiler: 2.99,
    costo_reemplazo: 12.99,
    duracion: "1 hour 28 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
  {
    titulo: "Cuestión de tiempo",
    descripcion: "foto url",
    anio_estreno: 2013,
    id_idioma: 1,
    id_idioma_original: 3,
    duracion_alquiler: 8,
    tarifa_alquiler: 5.99,
    costo_reemplazo: 18.99,
    duracion: "2 hours 3 minutes",
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31",
  },
];

const actorPelicula = [
  {
    id_actor: 1,
    id_pelicula: 2,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 1,
    id_pelicula: 3,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 1,
    id_pelicula: 4,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 2,
    id_pelicula: 1,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 2,
    id_pelicula: 9,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 2,
    id_pelicula: 10,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 3,
    id_pelicula: 1,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 3,
    id_pelicula: 5,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 3,
    id_pelicula: 7,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 6,
    id_pelicula: 8,
    ultima_actualizacion: "2020-12-31",
  },
];

const categoriaPelicula = [
  {
    id_pelicula: 1,
    id_categoria: 5,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 2,
    id_categoria: 1,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 3,
    id_categoria: 5,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 4,
    id_categoria: 7,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 5,
    id_categoria: 4,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 6,
    id_categoria: 1,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 7,
    id_categoria: 9,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 8,
    id_categoria: 4,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 9,
    id_categoria: 4,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_pelicula: 10,
    id_categoria: 3,
    ultima_actualizacion: "2020-12-31",
  },
];

const inventario = [
  {
    id_inventario: 1,
    id_pelicula: 1,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 2,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 3,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 4,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 5,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 6,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 7,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 8,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 9,
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_inventario: 1,
    id_pelicula: 10,
    ultima_actualizacion: "2020-12-31",
  },
];

const idioma = [
  {
    nombre_idioma: "Español",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Inglés",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Francés",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Alemán",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Italiano",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Chino",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Japonés",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Ruso",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Portugués",
    ultima_actualizacion: "2020-12-31",
  },
  {
    nombre_idioma: "Árabe",
    ultima_actualizacion: "2020-12-31",
  },
];

const renta = [
  {
    fecha_renta: "2024-06-31",
    id_cliente: 2,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 3,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 5,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 9,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 4,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 2,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 10,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 3,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 1,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
  {
    fecha_renta: "2024-06-31",
    id_cliente: 5,
    fecha_pago: "2020-06-31",
    ultima_actualizacion: "2020-12-31",
  },
];


export { users, customers, invoices, revenue };
