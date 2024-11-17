# pruebaTecnicaFooTalent

Este proyecto consiste en un sistema CRUD (Crear, Leer, Actualizar, Eliminar) desarrollado para una empresa. El sistema permite gestionar tanto los departamentos como los empleados de una empresa. Está compuesto por dos partes: un **API backend** y una **interfaz frontend**.

El **frontend** está desarrollado en **Angular**, mientras que el **backend** utiliza **Node.js** junto con **MongoDB** para el manejo de la base de datos.

## Requisitos

Para poder ejecutar el proyecto, es necesario contar con:

- Node.js (v14 o superior)
- Angular CLI
- MongoDB

## Instalación

### Clonar el repositorio

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/lmendieta06/pruebaTecnica1.git
    cd pruebaTecnica1
    ```

### Backend

1. Accede a la carpeta del backend:

    ```bash
    cd backend
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Inicia el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

    El servidor backend comenzará a ejecutarse en modo de desarrollo.

**Se usaron dos entidades (empleados y departamentos), por lo que la condicion de que las rutas deben ser items/:_id no se cumple, em lugar de items se tiene employees y departments**

### Frontend

1. Accede a la carpeta del frontend:

    ```bash
    cd frontend/PruebaTecnica
    ```

2. Instala las dependencias de Angular:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Angular:

    ```bash
    ng serve -o
    ```

    Esto abrirá automáticamente la aplicación en el navegador.

## Funcionalidades del Sistema

Este sistema ofrece las siguientes funcionalidades:

- **Crear**: Permite agregar nuevos departamentos y empleados.
- **Leer**: Muestra la lista de departamentos y empleados existentes.
- **Actualizar**: Permite modificar la información de los departamentos y empleados.
- **Eliminar**: Permite eliminar departamentos y empleados de la base de datos.

### Tecnologías Utilizadas

- **Frontend**: Desarrollado con Angular, para ofrecer una interfaz gráfica y experiencia de usuario dinámica.
- **Backend**: Desarrollado con Node.js, que maneja las peticiones HTTP y la lógica del servidor.
- **Base de Datos**: MongoDB se utiliza para almacenar la información de los departamentos y empleados.

## Posibles Problemas

- **Conexión a la Base de Datos**: Si la aplicación no se puede conectar a la base de datos, puede deberse a problemas con la **IP** del servidor de MongoDB. Asegúrate de que el servidor de MongoDB esté en funcionamiento y que la configuración de la red permita la conexión.
- **Acceso a variables de entorno**: En caso de poseer otros problemas, se puede deber al acceso al archivo ".env" el cual almacena información de bases de datos y puertos; para el correcto funcionamiento del proyecto, estas variables se encuentran en el repositorio.

## Ejecución

Para ejecutar este proyecto, asegúrate de seguir los pasos de instalación mencionados anteriormente. Una vez que ambos servidores (backend y frontend) estén en ejecución, deberías poder interactuar con el sistema mediante la interfaz gráfica.

- **Backend**: Se ejecuta en `http://localhost:3000`.
- **Frontend**: Se ejecuta en `http://localhost:4200`.

## Visualización
