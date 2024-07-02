import { pool } from "@/utils/connector";
import { Actor, Categoria, Cliente, Pelicula } from "@/app/lib/definitions";

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
