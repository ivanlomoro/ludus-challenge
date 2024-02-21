<div align="center">
  <img src="https://res.cloudinary.com/dgxkfjsbz/image/upload/v1708350058/Ludus/favicon_imniut.svg" alt="Ludus" width="300">
</div>

# Ludus-Challenge 🍸

## Introducción

Ludus-Challenge es una aplicación web desarrollada como parte de una prueba técnica para el puesto de React Developer Junior en Ludus utilizando la API TheCocktailDB. Su objetivo es ayudar a los usuarios a descubrir recetas de cócteles basadas en el ingrediente principal introducido, mostrando cócteles con y sin alcohol y que tengan como máximo 6 ingredientes, facilitando así la organización de eventos y reuniones.

## Características

- Formulario de búsqueda que permite al usuario introducir el ingrediente principal.
- Muestra una lista con un máximo de 6 cócteles que contengan el ingrediente introducido. Muestra primero los cócteles sin alcohol con un máximo de 6 ingredientes.
- Por cada cóctel se muestra imagen, nombre del cóctel, si tiene o no alcohol y en un modal (ingredientes, cantidades e intrucciones de preparacón).
- La web cumple la estructura establecida.
- La aplicación web es SPA, responsiva y con un diseño atractivo.
- Funcionalidad extra de obtener un cocktail aleatorio.

## Requerimientos

- Tener instalado Node.js y pnpm.
- Conocimientos básicos de JavaScript, React y TypeScript.
- Familiaridad con los conceptos de desarrollo frontend.

## Instalación y configuración

1. Clona este repositorio: `git clone https://github.com/ivanlomoro/ludus-challenge.git`
2. Navegue a la carpeta del cliente: `cd ludus-challenge`
3. Instalar dependencias: `pnpm install`
4. Configure las variables de entorno.
5. Cree un archivo `.env` en la raíz de su proyecto con el siguiente contenido:
```sh
VITE_API_BASE_URL=https://www.thecocktaildb.com/api/json/v1/1
```
Además, puede encontrar un ejemplo del .env en el archivo denominado env.example. Este archivo sirve como plantilla para su configuración.

6. Ejecute el servidor de desarrollo: `pnpm run dev`

## Tecnologías utilizadas

- Git
- HTML, CSS
- Tailwindcss
- TypeScript
- React
- Axios
- Vite
- react-query
- react-hook-form
- react-hot-toast
- react-icons

## Deployment

Puedes probar la aplicación accediendo a este enlace <a href="https://ludus-challenge.vercel.app/" target="_blank">Ludus-Challenge</a>.

## Documentación de la API de TheCocktailDB

Puedes encontrar más información sobre cómo utilizar esta API en su documentación en https://www.thecocktaildb.com/api.php.

## Vista previa

<table>
  <tr>
    <td><img src="./src/assets/previews/ludus-desktop.gif" alt="Desktop Version" width="400"/></td>
    <td><img src="./src/assets/previews/ludus-mobile.gif" alt="Mobile Version" width="400"/></td>
  </tr>
</table>
