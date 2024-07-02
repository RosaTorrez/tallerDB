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
    id_actor: 1,
    nombre: "Tom",
    apellido: "Hanks",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 2,
    nombre: "Leonardo",
    apellido: "DiCaprio",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 3,
    nombre: "Brad",
    apellido: "Pitt",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 4,
    nombre: "Robert",
    apellido: "Downey Jr.",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 5,
    nombre: "Chris",
    apellido: "Hemsworth",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 6,
    nombre: "Scarlett",
    apellido: "Johansson",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 7,
    nombre: "Dwayne",
    apellido: "Johnson",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 8,
    nombre: "Jennifer",
    apellido: "Aniston",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 9,
    nombre: "Ryan",
    apellido: "Reynolds",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_actor: 10,
    nombre: "Gal",
    apellido: "Gadot",
    ultima_actualizacion: "2020-12-31",
  },
];

const categories = [
  {
    id_categoria: 1,
    nombre: "Acción",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 2,
    nombre: "Comedia",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 3,
    nombre: "Ciencia Ficción",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 4,
    nombre: "Terror",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 5,
    nombre: "Romance",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 6,
    nombre: "Animación",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 7,
    nombre: "Aventura",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 8,
    nombre: "Fantasía",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 9,
    nombre: "Documental",
    ultima_actualizacion: "2020-12-31",
  },
  {
    id_categoria: 10,
    nombre: "Suspenso",
    ultima_actualizacion: "2020-12-31",
  },
];

const clients = [
  {
    id_cliente: 1,
    nombre: "Juan",
    apellido: "Pérez",
    correo_electronico: "juan@example.com",
    activo: true,
    telefono: 123456789
  },
  {
    id_cliente: 2,
    nombre: "María",
    apellido: "Gómez",
    correo_electronico: "maria@example.com",
    activo: true,
    telefono: 987654321 
  },
  {
    id_cliente: 3,
    nombre: "Pedro",
    apellido: "Martínez",
    correo_electronico: "pedro@example.com",
    activo: true,
    telefono: 555444333
  },
  {
    id_cliente: 4,
    nombre: "Laura",
    apellido: "López",
    correo_electronico: "laura@example.com",
    activo: true,
    telefono: 111222333
  },
  {
    id_cliente: 5,
    nombre: "Carlos",
    apellido: "Sánchez",
    correo_electronico: "carlos@example.com",
    activo: true,
    telefono: 999888777
  },
  {
    id_cliente: 6,
    nombre: "Ana",
    apellido: "García",
    correo_electronico: "ana@example.com",
    activo: true,
    telefono: 333222111
  },
  {
    id_cliente: 7,
    nombre: "Luis",
    apellido: "Fernández",
    correo_electronico: "luis@example.com",
    activo: true,
    telefono: 777888999
  },
  {
    id_cliente: 8,
    nombre: "Elena",
    apellido: "Rodríguez",
    correo_electronico: "elena@example.com",
    activo: true,
    telefono: 665555444
  },
  {
    id_cliente: 9,
    nombre: "David",
    apellido: "González",
    correo_electronico: "david@example.com",
    activo: true,
    telefono: 444555566
  },
  {
    id_cliente: 10,
    nombre: "Sofía",
    apellido: "Pérez",
    correo_electronico: "juan@example.com",
    activo: true,
    telefono: 123456789
  },
];

const movies = [
  {
    id_pelicula: 1,
    titulo: "Titanic",
    descripcion: "foto url",
    anio_estreno: 2000,
    id_idioma: 1,
    id_idioma_original: 2,
    duracion_alquiler: 5,
    tarifa_alquiler: 3,
    costo_reemplazo: 2,
    duracion: 2,
    clasificacion: "PG",
    ultima_actualizacion: "2020-12-31"
  },
]

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
