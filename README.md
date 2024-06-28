# Proyecto de taller de Base de Datos

## Tecnologías utilizadas

- TypeScript para el backend
- React para el frontend
- PostgreSQL para la base de datos
- PG como cliente de PostgreSQL para Node.js

## Instrucciones para correr el proyecto

1. Clonar el repositorio
2. Instalar las dependencias del proyecto con

```bash
npm install
# or
yarn install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno que se encuentran en el archivo `.env.example`
4. Correr el servidor con

```bash
npm run dev
# or
yarn dev
```

## Intrucciones para trabajar con la base de datos

- En el archivo `utils/connector.ts` se encuentra la configuración de la conexión a la base de datos
- En el archivo `app/lib/queries.ts` debera definir las queries que necesite para trabajar con la base de datos, como ejemplo de referencia revise el archivo `app/lib/data.ts`

## Mucha suerte en el proyecto
