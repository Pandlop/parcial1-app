# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencias a instalar

`npm install`

`npm install react-bootstrap bootstrap`

`npm install react-router-dom`

`npm install react-i18next i18next`

## Descripción

El parcial se compone de dos paginas: la de login y la del usuario. Cuando el usuario se loggea con un email y contraseña (mayor o igual a 8 caracteres) se redirige a la pagina de deportes. En esta pagina se ve la informacion del usuario en la parte de abajo y la informacion de las sesiones de cada deporte en la parte de arriba.

Para cambiar de idioma en cada pagina hay un header donde se selecciona el idioma de preferencia.

El codigo tiene los siguentes componentes:
- El componente de login
- Para la pagina del usuario hay varios componentes:
-   El componente de home que aloja tanto el footer con la informacion del usuario y la grilla de los deportes (este incluye los componentes userData y homeGrid) 
-   El componente de userData contiene el footer con la foto, el nombre y los tiempos del usuario
-   El componente de homeGrid contiene la grilla de deportes con sus tarjetas de las sesiones.

- El componente de deporteCard es el que se renderiza en la grilla de los deportes. Este contiene la informacion de la lozalizacion, la distancia y el tiempo de la sesion.

## Ejecución
Se deben instalar las dependencias mostradas arriba y luego dar `npm start`. Luego de esto para dirigirse a las paginas hay varias rutas:
- Para el login es ruta base ("/")
- Para la pagina de deportes e informacion del usuario ("/deportes")
  
Para acceder a las paginas hay varias maneras:
- La primera es acceder con un email y contraseña ( mas de 8 caracteres) y loggearse. Esto redigirige a "/deportes"
- La otra es simplemente escribir el path en la url
