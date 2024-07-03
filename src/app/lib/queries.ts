import { pool } from "@/utils/connector";
import {
  Actor,
  Categoria,
  Cliente,
  InvoicesTable,
  Pelicula,
} from "@/app/lib/definitions";
import { ITEMS_PER_PAGE } from "@/app/lib/variables";

/**
 * Fetches all actors names from the database.
 * @returns {Promise<Actor[]>} A promise that resolves to an array of actors.
 */
export async function fetchActors(): Promise<Actor[]> {
  try {
    const response = await pool.query<Actor>(selectHelper("actor"));

    return response.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch actors data.");
  }
}

/**
 * Fetch all movie categories from the database.
 * @returns {Promise<Categoria[]>} A promise that resolves to an array of categories.
 */
export async function fetchCategories(): Promise<Categoria[]> {
  try {
    const reponse = await pool.query<Categoria>(selectHelper("categoria"));
    return reponse.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories data.");
  }
}

/**
 * Fetch all active clients from the database.
 * @returns {Promise<Cliente[]>} A promise that resolves to an array of active clients.
 */
export async function fetchActiveClients(): Promise<Cliente[]> {
  try {
    const reponse = await pool.query<Cliente>(
      `SELECT * FROM cliente WHERE activo = true;`,
    );
    return reponse.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch clients data.");
  }
}

/**
 * Fetch all movies in the specified year.
 * @param {number} year - The year to filter movies by.
 * @returns {Promise<Pelicula[]>} A promise that resolves to an array of movies.
 */
export async function fetchMoviesByYear(year: number): Promise<Pelicula[]> {
  try {
    const res = await pool.query<Pelicula>(
      `SELECT * FROM pelicula WHERE year > ${year};`,
    );
    return res.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movies data.");
  }
}

/**
 * Get all movies that contain the specified word in the description
 * @param {string} word - The word to search for in the movie description.
 * @returns {Promise<Pelicula[]>} A promise that resolves to an array of movies.
 */
export async function fetchMoviesByDescription(
  word: string,
): Promise<Pelicula[]> {
  try {
    const res = await pool.query<Pelicula>(
      `SELECT * FROM pelicula WHERE descripcion LIKE '%${word}%';`,
    );
    return res.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movies data.");
  }
}

function selectHelper(tableName: string): string {
  return `SELECT * FROM ${tableName};`;
}

export async function createClientDb(client: Cliente) {
  try {
    const query = `SELECT agregar_cliente($1, $2, $3, $4);`;
    const values = [
      client.nombre,
      client.apellido,
      client.correo_electronico,
      client.telefono,
    ];
    const res = await pool.query(query, values);
    return res;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create client.");
  }
}

async function buildCreateClient() {
  await pool.query(`CREATE OR REPLACE FUNCTION agregar_peli(
    peli_titulo VARCHAR(50),
    peli_desc VARCHAR(200),
    peli_anio SMALLINT,
    peli_idioma SMALLINT,
    peli_idioma_orig SMALLINT,
    peli_duracion_alq SMALLINT,
    peli_tarifa MONEY,
    peli_reemplazo MONEY,
    peli_duracion INTERVAL,
    peli_clasificacion VARCHAR(5)
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO pelicula (
    titulo,
    descripcion,
    anio_estreno,
    id_idioma,
    id_idioma_original,
    duracion_alquiler,
    tarifa_alquiler,
    costo_reemplazo,
    duracion,
    clasificacion
    ) 
    VALUES (peli_titulo,
    peli_desc,
    peli_anio,
    peli_idioma,
    peli_idioma_orig,
    peli_duracion_alq,
    peli_tarifa,
    peli_reemplazo,
    peli_duracion,
    peli_clasificacion
    );
END;
$$ LANGUAGE plpgsql;
`);
}

export async function fetchFilteredClients(
  query: string,
  currentPage: number,
): Promise<Cliente[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const queryText = `
      SELECT
        cliente.id_cliente,
        cliente.nombre,
        cliente.apellido,
        cliente.correo_electronico,
        cliente.telefono,
        cliente.activo
      FROM cliente
      WHERE
        cliente.nombre ILIKE $1 OR
        cliente.apellido ILIKE $2 OR
        cliente.correo_electronico ILIKE $3
      ORDER BY cliente.nombre DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

  const values = [`%${query}%`, `%${query}%`, `%${query}%`];

  try {
    const clients = await pool.query<Cliente>(queryText, values);
    return clients.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchClientsPages(query: string) {
  try {
    const queryText = `
      SELECT COUNT(*)
      FROM cliente
      WHERE
        cliente.nombre ILIKE $1 OR
        cliente.apellido ILIKE $2 OR
        cliente.correo_electronico ILIKE $3
    `;

    const values = [`%${query}%`, `%${query}%`, `%${query}%`];
    const count = await pool.query(queryText, values);

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchClientById(id: string): Promise<Cliente>{
  try {
    const query = `SELECT * FROM cliente WHERE id_cliente = $1;`;
    const value = [id];
    const client = await pool.query<Cliente>(query, value);
    return client.rows[0];
  }catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch client data.");
  }
}
