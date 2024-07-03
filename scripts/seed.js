const { pool } = require("../src/utils/connector");

async function seedActor() {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS actor (
        id_actor SERIAL PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        ultima_actualizacion TIMESTAMP NOT NULL
      );
    `)

    console.log(`Created "actor" table`);
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding invoices:", error);
    throw error;
  }
}

async function seedCategoria() {
  try {
    // Create the "customers" table if it doesn't exist
    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS categoria (
        id_categoria INT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL UNIQUE,
        ultima_actualizacion TIMESTAMP NOT NULL
      );
    `)

    console.log(`Created "categories" table`);

    return {
      createTable
    }
    
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function seedCliente() {
  try {
    const createTable = await pool.query(`
       CREATE TABLE IF NOT EXISTS  cliente (
          id_cliente SERIAL PRIMARY KEY,
          nombre VARCHAR(50) NOT NULL,
          apellido VARCHAR(50) NOT NULL,
          correo_electronico VARCHAR(50) NOT NULL UNIQUE,
          activo BOOLEAN NOT NULL,
          telefono INT UNIQUE
      );
    `)
    console.log(`Created "cliente" table`);
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function seedIdioma() {
  try {
    const createTable = await pool.query(`
        CREATE TABLE IF NOT EXISTS idioma (
          id_idioma SERIAL PRIMARY KEY,
          nombre_idioma VARCHAR(20) NOT NULL UNIQUE,
          ultima_actualizacion TIMESTAMP NOT NULL
        );
    `)
    console.log(`Created "language" table`)
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function seedPelicula() {
  try {
    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS pelicula (
        id_pelicula SERIAL PRIMARY KEY,
        titulo VARCHAR(50) NOT NULL UNIQUE,
        descripcion VARCHAR(50) UNIQUE,
        anio_estreno SMALLINT NOT NULL,
        id_idioma SMALLINT,
        id_idioma_original SMALLINT NOT NULL,
        duracion_alquiler SMALLINT NOT NULL CHECK (duracion_alquiler > 0),
        tarifa_alquiler MONEY NOT NULL,
        duracion INTERVAL NOT NULL CHECK (duracion > '00:30:00'),
        costo_reemplazo MONEY NOT NULL,
        clasificacion VARCHAR(50),
        ultima_actualizacion TIMESTAMP NOT NULL,
        FOREIGN KEY (id_idioma) REFERENCES idioma(id_idioma)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
        FOREIGN KEY (id_idioma_original) REFERENCES idioma(id_idioma)
        ON UPDATE CASCADE
        ON DELETE CASCADE);
    `)

    console.log(`Created "movie" table`)
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}


async function seedActor_Pelicula() {
  try {
    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS actor_pelicula (
        id_actor INT NOT NULL,
        id_pelicula INT NOT NULL,
        ultima_actualizacion TIMESTAMP NOT NULL,
        FOREIGN KEY (id_actor) REFERENCES actor(id_actor)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
        FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
        ON UPDATE CASCADE
        ON DELETE CASCADE
      );
    `)

    console.log(`Created "actor_pelicula" table`);

    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}


async function seedCategoria_Pelicula() {
  try {
    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS categoria_pelicula (
        id_pelicula INT NOT NULL,
        id_categoria INT NOT NULL,
        ultima_actualizacion TIMESTAMP NOT NULL,
        FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
        FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
        ON UPDATE CASCADE
        ON DELETE CASCADE
      );
    `)
    console.log(`Created "categoria_pelicula" table`);

    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function seedInventario() {
  try {

    const createTable = await pool.query(`
      CREATE TABLE IF NOT EXISTS inventario (
        id_inventario SERIAL PRIMARY KEY,
        id_pelicula INT NOT NULL,
        ultima_actualizacion TIMESTAMP NOT NULL,
        FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
        ON UPDATE CASCADE
        ON DELETE CASCADE 
      );
    `)

    console.log(`Created "inventario" table`);
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}


async function seedRenta() {
  try {
    const createTable = await pool.query(`
        CREATE TABLE IF NOT EXISTS renta (
          id_renta SERIAL PRIMARY KEY,
          fecha_renta TIMESTAMP NOT NULL,
          id_cliente SMALLINT NOT NULL,
          fecha_pago TIMESTAMP NOT NULL,
          ultima_actualizacion TIMESTAMP NOT NULL,
          FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
          ON UPDATE CASCADE
          ON DELETE CASCADE);`
    );
    console.log(`Created "renta" table`)
    return {
      createTable
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}



async function buildCreateMovie() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION agregar_peli(
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
  console.log("Created agregar_peli function")
}

async function listeMovie() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION buscar_peli(peli_titulo varchar)
    RETURNS TABLE(
        id_pelicula INTEGER,
        titulo VARCHAR,
        descripcion VARCHAR,
        anio_estreno SMALLINT,
        id_idioma SMALLINT,
        id_idioma_original SMALLINT,
        duracion_alquiler SMALLINT,
        tarifa_alquiler MONEY,
        costo_reemplazo MONEY,
        duracion INTERVAL,
        clasificacion VARCHAR,
        ultima_actualizacion TIMESTAMP
    ) AS $$
    BEGIN
        RETURN QUERY
        SELECT * FROM pelicula p
        WHERE peli_titulo = p.titulo;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created buscar_peli function")
}

async function updateMovie() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION actualizar_peli(
        peli_id INTEGER,
        peli_titulo VARCHAR,
        peli_desc VARCHAR,
        peli_anio SMALLINT,
        peli_idioma SMALLINT,
        peli_idioma_orig SMALLINT,
        peli_duracion_alq SMALLINT,
        peli_tarifa MONEY,
        peli_reemplazo MONEY,
        peli_duracion INTERVAL,
        peli_clasificacion VARCHAR
    )
    RETURNS VOID AS $$
    BEGIN
        UPDATE pelicula SET
        titulo = peli_titulo,
        descripcion = peli_desc,
        anio_estreno = peli_anio,
        id_idioma = peli_idioma,
        id_idioma_original = peli_idioma_orig,
        duracion_alquiler = peli_duracion_alq,
        tarifa_alquiler = peli_tarifa,
        costo_reemplazo = peli_reemplazo,
        duracion = peli_duracion,
        clasificacion = peli_clasificacion,
        ultima_actualizacion = NOW()
        WHERE peli_id = id_pelicula;
    END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created actualizar_peli function")
}

async function dropMovie() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION borrar_peli(id_peli INTEGER)
    RETURNS VOID AS $$
    BEGIN
        DELETE FROM pelicula
        WHERE id_peli = id_pelicula;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created borrar_peli function")
}

async function createActors() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION agregar_actor( cliente_nombre VARCHAR, cliente_apellido VARCHAR)
    RETURNS VOID AS $$
    BEGIN
        INSERT INTO actor (
            nombre,
            apellido,
            ultima_actualizacion
        )
        VALUES(
            cliente_nombre,
            cliente_apellido,
            NOW()
        );
    END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created agregar_actor function")
}

async function createClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION agregar_cliente(
        cliente_nombre VARCHAR,
        cliente_apellido VARCHAR,
        cliente_correo VARCHAR,
        cliente_telefono INT
    )
    RETURNS VOID AS $$
    BEGIN
        INSERT INTO cliente ( nombre, apellido, correo_electronico, telefono)
        VALUES( cliente_nombre, cliente_apellido, cliente_correo, cliente_telefono);
    END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created agregar_cliente function")
}

async function listClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION buscar_cliente(ide_cliente INTEGER)
    RETURNS TABLE(
        id_cliente INTEGER,
        nombre VARCHAR,
        apellido VARCHAR,
        correo_electronico VARCHAR,
        activo BOOLEAN,
        telefono INT
    ) AS $$
    BEGIN
        RETURN QUERY
        SELECT * FROM cliente c
        WHERE c.id_cliente = ide_cliente;
    END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created buscar_cliente function")
}

async function updateClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION actualizar_cliente(
      cliente_id INTEGER,
      cliente_name VARCHAR,
      cliente_apellido VARCHAR,
      cliente_correo VARCHAR,
      cliente_activo BOOLEAN,
      cliente_telefono INT
    )
    RETURNS VOID AS $$
    BEGIN
        UPDATE cliente SET
                       nombre = cliente_name,
                       apellido = cliente_apellido,
                       correo_electronico = cliente_correo,
                       activo = cliente_activo,
                       telefono = cliente_telefono
                       WHERE id_cliente = cliente_id;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created actualizar_cliente function")
}

async function dropClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION eliminar_cliente(ide_cliente INTEGER)
    RETURNS VOID AS $$
    BEGIN
        DELETE FROM cliente
                    WHERE ide_cliente = id_cliente;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created eliminar_cliente function")
}

async function disableClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION dar_de_baja(ide_cliente INTEGER)
    RETURNS VOID AS $$
    BEGIN
        UPDATE cliente SET
               activo = FALSE
               WHERE ide_cliente = id_cliente;
    END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created dar_de_baja function")
}

async function ableClient() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION dar_de_alta(ide_cliente INTEGER)
      RETURNS VOID AS $$
      BEGIN
        UPDATE cliente SET
               activo = TRUE
               WHERE ide_cliente = id_cliente;
      END;
    $$ LANGUAGE plpgsql;
  `);
    console.log("Created dar_de_alta function")
}

//procesos almacenados

async function getAllActors() {
  await pool.query(`
    CREATE OR REPLACE PROCEDURE sp_GetAllActors()
    AS $$
    BEGIN
        SELECT * FROM actor;
    END;
    $$ LANGUAGE plpgsql;
  `);
}

async function getAllClients() {
  await pool.query(`
    CREATE OR REPLACE PROCEDURE sp_GetAllClients()
    AS $$
    BEGIN
         SELECT * FROM cliente;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created sp_GetAllClients function")
}

async function getMoviesByDuration() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION sp_get_movies_by_duration(max_duration INTERVAL)
    RETURNS TABLE (
      id INTEGER,
      nombre VARCHAR,
      duracion INTERVAL
    ) 
    AS $$
    BEGIN
      RETURN QUERY
      SELECT * FROM pelicula WHERE duracion <= max_duration;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created sp_get_movies_by_duration function")
}

async function getRecentlyRentedMovies() {
  await pool.query(`
    CREATE OR REPLACE PROCEDURE sp_GetRecentlyRentedMovies()
    AS $$
    BEGIN
          SELECT p.titulo, p.descripcion, p.ano_estreno, r.fecha_renta, r.fecha_pago FROM pelicula p 
          INNER JOIN inventario i ON p.id_pelicula = i.id_pelicula
          INNER JOIN renta r ON i.id_inventario = r.id_inventario
          WHERE r.fecha_renta >= DATEADD(day, -7, CURRENT_TIMESTAMP); 
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("Created sp_GetRecentlyRentedMovies function")
}

//tiggers

async function avoidUpdateLanguage() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION trg_evitar_actualizar_idioma()
      RETURNS TRIGGER AS $$
      BEGIN
          IF TG_OP = 'UPDATE' THEN
              RAISE EXCEPTION 'No se puede actualizar el nombre de un idioma.';
          END IF;
          RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
      
      CREATE OR REPLACE TRIGGER trg_evitar_actualizar_idioma
      BEFORE UPDATE ON idioma
      FOR EACH ROW
      EXECUTE FUNCTION trg_evitar_actualizar_idioma();
  `);
  console.log("Created trg_evitar_actualizar_idioma trigger")
}

async function avoidEraseCategory() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION trg_evitar_eliminar_categoria()
      RETURNS TRIGGER AS $$
      BEGIN
          IF EXISTS (
              SELECT 1
              FROM categoria_pelicula
              WHERE id_categoria = OLD.id_categoria
              LIMIT 1
          ) THEN
              RAISE EXCEPTION 'No se puede eliminar esta categoría porque está asociada a una película.';
          END IF;
          RETURN OLD;
      END;
      $$ LANGUAGE plpgsql;
      
      CREATE OR REPLACE  TRIGGER trg_evitar_eliminar_categoria
      BEFORE DELETE ON categoria
      FOR EACH ROW
      EXECUTE FUNCTION trg_evitar_eliminar_categoria();
  `);
  console.log("Created trg_evitar_eliminar_categoria trigger")
}

async function updateChangesInMovies() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION trg_actualizar_ultima_actualizacion_categoria()
      RETURNS TRIGGER AS $$
      BEGIN
          UPDATE categoria
          SET ultima_actualizacion = CURRENT_TIMESTAMP
          WHERE id_categoria = NEW.id_categoria;
          RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
      
      CREATE OR REPLACE TRIGGER trg_actualizar_ultima_actualizacion_categoria
      AFTER INSERT ON categoria_pelicula
      FOR EACH ROW
      EXECUTE FUNCTION trg_actualizar_ultima_actualizacion_categoria();
  `);
  console.log("Created trg_actualizar_ultima_actualizacion_categoria trigger")
}
async function uniqueEmail() {
  await pool.query(`
    CREATE OR REPLACE FUNCTION validar_email_unico()
      RETURNS TRIGGER AS $$
      BEGIN
          IF EXISTS (SELECT 1 FROM cliente WHERE correo_electronico = NEW.correo_electronico) THEN
              RAISE EXCEPTION 'El correo electrónico ya está registrado.';
          END IF;
          RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
      
      CREATE OR REPLACE TRIGGER trigger_validar_email_unico
      BEFORE INSERT ON cliente
      FOR EACH ROW
      EXECUTE FUNCTION validar_email_unico();
  `);
    console.log("Created trigger_validar_email_unico trigger")
}

async function main() {

  await seedActor();
  await seedIdioma();
  await seedCategoria();
  await seedCategoria_Pelicula();
  await seedPelicula();
  await seedActor_Pelicula();
  await seedInventario();
  await seedRenta();
  await seedCliente()
  await buildCreateMovie()
  await listeMovie()
  await updateMovie()
  await dropMovie()
  await createActors()
  await createClient()
  await listClient()
  await updateClient()
  await dropClient()
  await disableClient()
  await ableClient()
  await getAllActors()
  await getAllClients()
  await getMoviesByDuration()
  await getRecentlyRentedMovies()
  await avoidUpdateLanguage()
  await avoidEraseCategory()
  await updateChangesInMovies()
  await uniqueEmail()
  await pool.end();
}

main().catch((err) => {
  console.error(
      "An error occurred while attempting to seed the database:", err);
});
