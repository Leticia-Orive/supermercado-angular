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
4. Configuración tabla 
    4.1 en el html app pongo esto para que cargue esa pagina <app-list-personas></app-list-personas>
    4.2 Empezamos a añadir angular Material
    4.3 Vamos a esta pagina de google https://angular.io/api/common/DatePipe para ver como colocamos la fecha.
5. Paginación
    5.1 Vamos a Angular material y buscamos paginación
6. Ordenamiento y filtro
    6.1 Vamos a Angular material y buscamos sort-header
    6.2 Vamos a Angular material a componentes y buscamos form-field
    6.3 Vamos a Angular material y buscamos input
7. Modulo shared y agregamos botones
    7.1 Vamos a Angular material a componentes y buscamos icon
        - Vamos a esta pagina https://developers.google.com/fonts/docs/material_icons?hl=es-419 y pinchamos en biblioteca de iconos de material
    7.2 Vamos a Angular material y buscamos tooltip
    7.3 Vamos a Angular material y buscamos button
    7.4 Creamos un nuevo modulo dentro de la carpeta shared donde pasaremos todos los material angular de app.module.ts que lo podemos hacer asi ng g m shared
8. Modal Agregar persona HTML
    8.1 Vamos a Angular material a componentes y buscamos dialog
    8.2 Vamos a Angular material y buscamos select
    8.3 Vamos a Angular material y buscamos datepicker y me dara un error en consola porque tambien hay que importar este archivo import { MatNativeDateModule } from '@angular/material/core';
9. Modal Persona - Configuración Reactive Forms
    9.1 vamos al shared y importamos ReactiveFormsModule
    
