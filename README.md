# supermercado-angular
1. Introducción
Voy a crear un proyecto con angular 16
2. Creación del proyecto front
    2.1 ng new nombre de nuestro proyecto.
    2.2 Nos movemos a nuestro proyecto cd nombre de proyecto
    2.3 En el caso de que estemos trabajando fuera del visual code con code . nos lleva directamente al visual
    2.4 Arrancamos nuestro proyecto con ng serve --o (--o significa que nos abre el navegador con el que estamos trabajando si que nosotros pongamos localhost:4000)
3. Estructura del proyecto y configuración Angular Material
    3.1 Creamos una carpeta que se va a llamar components dentro de la carpeta app.
    3.2 Creamos un  componente nuevo dentro de la carpeta components ng g c components/nombre del nuevo component
    3.3 Agregamos un nuevo componente
    3.4 Creamos una carpeta que se va llamar services
    3.5 Creamos dentro de la carpeta services un nuevo servicio ng g s services/nombre del servicio
        -Nos va a generar dos archivos el spec.ts si queremos lo podemos borrar porque no lo voy a utilizar
    3.6 Creo otra carpeta que la voy a llamar shared y otra interfaces
        -Dentro de la carpeta interfaces creamos un archivo llamado persona.ts
    3.7 Vamos a configuarar Angular Material para ello vamos a google y buscamos Angular material.
        1. Pinchamos en get started y ejecutamos este comando ng add @angular/material
        Respuestas de las preguntas que nos van a salir
            1.yes
            2.En esta respuesta podemos elegir la que queramos ya que es la paleta de colores de angular
            3.yes
            4. Pinchamos en la primera ya que si queremos las animaciones