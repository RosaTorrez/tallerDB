const { db } = require('@vercel/postgres');
const {
  actor,
  categoria,
  cliente,
  pelicula,
  actor_pelicula,
  categoria_pelicula,
  inventario,
  idioma,
  renta,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedActor(actor) {
try {
  // Create the "invoices" table if it doesn't exist
  const createTable = await actor.sql`
  CREATE TABLE IF NOT EXISTS actor (
  id_actor SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  ultima_actualizacion TIMESTAMP
  );
  `;

  console.log(`Created "invoices" table`);

  // Insert data into the "invoices" table
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  );

  console.log(`Seeded ${insertedInvoices.length} invoices`);

  return {
    createTable,
    invoices: insertedInvoices,
  };
} catch (error) {
  console.error('Error seeding invoices:', error);
  throw error;
}
}

async function seedCategoria(categoria) {
try {
  // Create the "customers" table if it doesn't exist
  const createTable = await categoria.sql`
    CREATE TABLE IF NOT EXISTS categoria (
      id_categoria INT PRIMARY KEY
      nombre VARCHAR(50) NOT NULL,
      ultima_actualizacion TIMESTAMP
    );
  `;

  console.log(`Created "customers" table`);

  // Insert data into the "customers" table
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
      INSERT INTO customers (id, name, email, image_url)
      VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  );

  console.log(`Seeded ${insertedCustomers.length} customers`);

  return {
    createTable,
    customers: insertedCustomers,
  };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedCliente(cliente){
  try {
    const createTable = await cliente.sql`
      CREATE TABLE cliente (
          id_cliente SERIAL PRIMARY KEY,
          nombre VARCHAR(50) NOT NULL,
          apellido VARCHAR(50) NOT NULL,
          correo_electronico VARCHAR(50) NOT NULL,
          activo BOOLEAN NOT NULL,
          telefono INT
      );
    `;
    return{
      createTable
    }
  }catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedPelicula(pelicula){
try{
  const createTable = await pelicula.sql`
  CREATE TABLE pelicula (
    id_pelicula SERIAL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50),
    anio_estreno SMALLINT NOT NULL,
    id_idioma SMALLINT,
    id_idioma_original SMALLINT ,
    duracion_alquiler SMALLINT NOT NULL,
    tarifa_alquiler MONEY NOT NULL,
    duracion INTERVAL NOT NULL,
    costo_reemplazo MONEY NOT NULL,
    clasificacion VARCHAR(50),
    ultima_actualizacion TIMESTAMP NOT NULL,
    FOREIGN KEY (id_idioma) REFERENCES idioma(id_idioma)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    FOREIGN KEY (id_idioma_original) REFERENCES idioma(id_idioma)
    ON UPDATE CASCADE
    ON DELETE CASCADE 
    );
    `;
      return{
      createTable
      
    }
  }catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedActor_Pelicula(actor_pelicula) {
try {
  // Create the "revenue" table if it doesn't exist
  const createTable = await actor_pelicula.sql`
    CREATE TABLE IF NOT EXISTS actor_pelicula (
      id_actor INT,
      id_pelicula INT,
      ultima_actualizacion TIMESTAMP,
      FOREIGN KEY (id_actor) REFERENCES actor(id_actor)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
      FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
      ON UPDATE CASCADE
      ON DELETE CASCADE
    );
  `;

  console.log(`Created "revenue" table`);

  // Insert data into the "revenue" table
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
      INSERT INTO revenue (month, revenue)
      VALUES (${rev.month}, ${rev.revenue})
      ON CONFLICT (month) DO NOTHING;
    `,
    ),
  );

  console.log(`Seeded ${insertedRevenue.length} revenue`);

  return {
    createTable,
    revenue: insertedRevenue,
  };
  }catch (error) {
  console.error('Error seeding revenue:', error);
  throw error;
  }
}

async function seedCategoria_Pelicula(categoria_pelicula) {
try {
  // Create the "categoria_pelicula" table if it doesn't exist
  const createTable = await categoria_pelicula.sql`
    CREATE TABLE IF NOT EXISTS actor_pelicula (
      id_pelicula INT,
      id_categoria INT,
      ultima_actualizacion TIMESTAMP,
      FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
      FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
      ON UPDATE CASCADE
      ON DELETE CASCADE
    );
  `;

  console.log(`Created "revenue" table`);

  // Insert data into the "revenue" table
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
      INSERT INTO revenue (month, revenue)
      VALUES (${rev.month}, ${rev.revenue})
      ON CONFLICT (month) DO NOTHING;
    `,
    ),
  );

  console.log(`Seeded ${insertedRevenue.length} revenue`);

  return {
    createTable,
    revenue: insertedRevenue,
  };
  }catch (error) {
  console.error('Error seeding revenue:', error);
  throw error;
  }
}

async function seedInventario(inventario) {
try {
  // Create the "clientes" table if it doesn't exist
  const createTable = await inventario.sql`
    CREATE TABLE IF NOT EXISTS inventario (
      id_inventario SERIAL PRIMARY KEY,
      id_pelicula INT,
      ultima_actualizacion TIMESTAMP,
      FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
      ON UPDATE CASCADE
      ON DELETE CASCADE 
    );
  `;

  console.log(`Created "cliente" table`);

  // Insert data into the "users" table
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
      ON CONFLICT (id) DO NOTHING;
    `;
    }),
  );

  console.log(`Seeded ${insertedUsers.length} users`);

  return {
    createTable,
    users: insertedUsers,
  };
  }catch (error) {
  console.error('Error seeding users:', error);
  throw error;
  }
}

async function seedIdioma(idioma){
try{
  const createTable = await idioma.sql`
  CREATE TABLE idioma (
    id_idioma SERIAL PRIMARY KEY,
    nombre_idioma VARCHAR(20) NOT NULL,
    ultima_actualizacion TIMESTAMP
    );
    `;
     return{
      createTable  
    }
  }catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedRenta(renta){
try{
  const createTable = await renta.sql`
  CREATE TABLE renta (
    id_renta SERIAL PRIMARY KEY,
    fecha_renta TIMESTAMP,
    id_cliente SMALLINT,
    fecha_pago TIMESTAMP,
    ultima_actualizacion TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    );
    `;
      return{
      createTable  
    }
  }catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  
  // await seedUsers(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);
  await seedActor(client);
  await seedCategoria(client);
  await seedPelicula(client);
  await seedActor_Pelicula(client);
  await seedCategoria_Pelicula(client);
  await seedInventario(client);
  await seedIdioma(client);
  await seedRenta(client)

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});