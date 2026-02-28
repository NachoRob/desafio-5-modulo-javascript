# 🚀 Todo List Dashboard 

Un panel de control de tareas dinámico desarrollado con **HTML5**, **CSS3** (Flexbox/Grid) y **JavaScript (DOM Manipulation)**. Este proyecto fue diseñado siguiendo una estética de dashboard profesional, optimizando la visualización de datos en formato tabular.

## 📋 Características

* **Gestión Dinámica**: Agregar, tachar y eliminar tareas en tiempo real mediante manipulación del DOM.
* **Identificadores Únicos**: Generación automática de IDs incrementales para cada tarea.
* **Panel de Estadísticas**: Contador automático de tareas totales y tareas completadas.
* **Diseño Responsivo**: Contenedor principal adaptable con un ancho máximo de 900px, centrado y con sombras para profundidad.
* **Arquitectura de Datos**: Uso de arreglos de objetos para mantener la integridad de la información antes del renderizado.

## 🛠️ Tecnologías Utilizadas

* **HTML5**: Estructura semántica utilizando tablas para la visualización de datos.
* **CSS3**: 
    * **Flexbox**: Utilizado para el sistema de dos columnas (Stats | Lista) y el alineamiento de acciones.
    * **Estilos Dinámicos**: Clases para estados de tareas (tachado, checked).
* **JavaScript (ES6+)**:
    * `document.createElement`: Creación eficiente de nodos.
    * `Array Methods`: Uso de `find`, `findIndex`, `splice` y `forEach` para lógica de negocio.
    * `Event Listeners`: Manejo de interactividad en el botón de agregar.

## 🎨 Vista Previa del Diseño

El proyecto implementa un sistema de alineación perfecta para la columna de **Acciones**, asegurando que el checkbox y el botón de eliminar se mantengan centrados y organizados independientemente del largo del texto.



## 🚀 Instalación y Uso

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/NachoRob/todo-list-ace.git](https://github.com/NachoRob/todo-list-ace.git)
    ```
2.  Abre el archivo `index.html` en tu navegador preferido.

## 🧠 Lógica de Desarrollo

Como parte de mi proceso de aprendizaje y mejora continua, este proyecto aplica principios de:
* **Clean Code**: Funciones con responsabilidades únicas (`renderRows`, `actualizarStats`, `borrar`).
* **Separación de Preocupaciones**: HTML para estructura, CSS para presentación y JS para comportamiento.

---
Desarrollado con ❤️ por [Ignacio Robles](https://github.com/NachoRob)