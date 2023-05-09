# Express - Rest API - MySQL - DEPLOY

Este proyecto es parte del codigo realizado por el siguiente video [Fazt Code](https://www.youtube.com/watch?v=3dSkc-DIM74&ab_channel=Fazt) donde su uso es a fines de aprender

## Method HTTP 

**URL**: https://express-restapi-mysql-course-production.up.railway.app/

- GET `/api/employess`: Obtiene todos los empleados
- GET `/api/employess/:id`: Obtiene un empleado
- POST `/api/employess/`: Crea un nuevo empleado
- PUT `/api/employess/:id`: Actualiza el empleado registrado
- DELETE `/api/employess/:id`: Elimina un empleado registrado

## Table MySQL

- **id** INT AUTO_INCREMENT PRIMARY KEY
- **name** VARCHAR
- **salary** INT

## CORS

Para este tipo de proyecto instalamos la libreria [npm CORS](https://www.npmjs.com/package/cors) para que nos permita consumir la API desde el FrontEnd

Este principio CORS se puede investigar mas por este link [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ya que nos permite de forma avanzada establecer paginas privadas.

## Deploy

Para este proyecto desplegamos la aplicacion en [railway](https://railway.app/)
