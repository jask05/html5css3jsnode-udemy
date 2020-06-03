# Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero

Curso de Udemy en el cual se aprenderá HTML5, CSS3, JS ES9 y Node JS. [Curso](https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/)

## Sección 1: Introducción

    - HTML5
    - CSS3
    - Javascript
        - DOM
        - Eventos: capturar eventos del usuario
        - JSON
        - LocalStorage
        - Promesas: peticiones asíncronas
        - Operaciones matemáticas y lógicas
        - Control de flujo
        - Funciones
        - NodeJS
        - MondoDB
        - Restful API
        - Serverless
        - Proyectos

## Sección 2: HTML Básico

- Lenguaje de marcado utilizado en la gran mayoría de los sitios webs.
- HTML está formado por etiquetas de marcado con los caracteres **<** y **>**.
- Con la etiqueta **<!DOCTYPE html>** se indica que se está utilizando **HTML5**.

## Javascript

- Para ejecutar los cambios de Node hay que ejecutar **node js/index.js**.

- **Spread operator**

  - Se utiliza cuando se quiere generar una copia **exacta** del objeto, pero si esta se modifica, que no cambie la original.

    ```javascript
    const a = { b: 1 }
    const b = a
    b === a // true
    b.c = 2
    // a tiene b y c
    const c = { ... a } // crea un objeto, toma las propiedades de A y asígnalas a "C"
    c.d = 10 // no se asigna este valor a "A"
    ```

- **Promesas**
  - Valor que se va a resolver en un futuro.
  - Se pueden encadenar.
  - Se pueden rechazar, por ej si te quedas sin conexión a internet o si el servidor arroja un error ahí entra el *rechazo*.

    ```javascript
    // resuelve (en un futuro muy rápido), de manera asíncrona, valores. 
    Promise.resolve(2) // se indica que este valor estará resuelto
        .then(valor => console.log(valor))
    ```

## Sección NoseJS

    - **npm init -y**: crea package.json, archivo con configuración básica.
    - **npm i -S express**: **i** especifica la instalación, **-S** sirve para que se guarde dentro de las dependencias.

### Api Rest

    - Interfaz que se encuentra en la nube, que permite que los clientes se conenten a esta 'nube' para ir a solicitar datos. La API se conecta con una BD, busca los datos solicitados, y lo devuelve a la API, y esta contesta al cliente con los datos que solicitó.
    - La API puede ser consumida por varios tipos de clientes (móvil, web, relojes, controladores, etc).
    - ¿Cómo se consume? Se utilizan verbos HTTP. GET, POST, PUT, PATCH y DELETE.
        - **GET**: se usa para listar elementos o para buscar un elemento en particular. Devuelve código **200**.
        - **POST**: se utiliza cuando se quiere crear un recurso. Devuelve código **201**.
        - **PUT**: se utiliza cuando se quiere reemplazar un recurso. Devuelve código **204**.
        - **PATCH**: se utiliza cuando se quiere actualizar o reemplazar parcialmente un recurso, sin eliminar todas las otras propiedades que pueda haber. Devuelve código **204**.
        - **DELETE**: se utiliza para eliminar recursos. Devuelve código **204**.
    - Cada vez que se quiera coenctar a la API hay que indicarle un recurso, lo cual es una entidad en la BD (por ej usuario: /users/id).

### Arquitectura serverless

    - **Modelo tradicional**: cliente se conecta al servidor. Se realiza una petición al servidor y administran y gestionan las cargas. Los servidores deben tolerar estas cargas (loadbalancer)
    - **Serverles o FassS (Function as a Service)**
        - El developer lo sube a una nube, y según se hagan peticiones a una ruta, se encarga de buscar el archivo que se sube, lo busca en la infra de servidores, ejecuta la función en el archivo, espera un tiempo y desmonta el archivo (js) y lo deja guardado en una BD. Cuando se vuelva a llamar a la ruta (users) va a buscar el archivo a la BD y lo va a volver a ejecutar. Cuando se deje de ejectuar en un tiempo, lo saca de la memoria de los servidores.
        - Beneficios
            - No se administran servidores.
            - Más barato.
        - **Ejecución en frío**: cuando se tiene el archivo FaaS (JS, por ej), la nube cuando recibe peticiones busca los archivos, los carga y los ejecuta. Los recursos que usa la máquina son limitados, por lo que cuando pasa mucho tiempo el procesamiento de la máquina sube, lo que hace es liberar memoria. Todos los archivos cargados en ram, los desmonta y los manda al HD, por lo que solo tendrá cargado en memoria cuando el archivo haya sido ejecutado hace poco tiempo. Resumiendo: va a buscar el archivo/función al HD.
        - **Ejecución en caliente**: cuando va a buscar el archivo a la memoria y no al HD.
    - **vercel.com**: despliegue de aplicaciones.

### Aplicación "Almuerzi"

    - **Almuerzi**
        - **Platos**
            - Id
            - Nombre
            - Descripción del plato
        - **Pedidos**
            - Id
            - Meal_ID
            - User_id
    - [MongoDB](https://www.mongodb.com/)
        ´´´bash
        # Añadir URI mongodb
        mongodb+srv://<usuario>:<password>@<todo-lo-demás>

        # Eliminar
        now secrets rm mongodb-uri
        ```