# QA - Sistema de Reservas de Hotel

## 📌 Descripción del proyecto

Proyecto de **Quality Assurance (QA)** orientado a la validación funcional y automatización de pruebas de un sistema web de reservas hoteleras.

El proyecto fue desarrollado como parte del proceso de formación del **SENA**, aplicando conceptos de aseguramiento de calidad, pruebas funcionales, pruebas negativas, automatización de pruebas de interfaz de usuario y validación de servicios API.

Para la automatización se utilizó **Playwright con TypeScript**, permitiendo ejecutar pruebas sobre el frontend y diferentes endpoints de servicios REST.

---

## 🎯 Objetivo general

Diseñar, ejecutar y automatizar pruebas de calidad para validar los principales procesos de un sistema de reservas hoteleras, verificando tanto el comportamiento de la interfaz web como las respuestas proporcionadas por los servicios API.

### Objetivos específicos

* Validar el acceso y navegación del sistema.
* Verificar la consulta de habitaciones.
* Validar el proceso de selección de fechas.
* Comprobar el proceso de creación de una reserva.
* Validar los campos obligatorios del formulario.
* Ejecutar pruebas positivas y negativas.
* Validar respuestas de servicios API.
* Comprobar códigos de respuesta HTTP.
* Validar estructuras de respuestas JSON.
* Automatizar los casos de prueba mediante Playwright.
* Generar evidencias de las ejecuciones.
* Documentar los resultados obtenidos durante las pruebas.

---

## 📌 Información del proyecto

| Información              | Detalle                                  |
| ------------------------ | ---------------------------------------- |
| **Proyecto**             | Sistema de Reservas de Hotel             |
| **Área**                 | Quality Assurance (QA)                   |
| **Institución**          | SENA                                     |
| **Programa**             | Análisis y Desarrollo de Software (ADSO) |
| **Tipo de proyecto**     | Automatización de pruebas                |
| **Lenguaje**             | TypeScript                               |
| **Framework**            | Playwright Test                          |
| **Entorno**              | Node.js                                  |
| **Tipo de pruebas**      | Frontend y Backend/API                   |
| **Control de versiones** | Git                                      |
| **Repositorio**          | GitHub                                   |
| **Metodología**          | Scrum / Kanban                           |

---

# 🌐 Aplicaciones evaluadas

## Frontend

**Automation in Testing - Hotel Reservation**

https://automationintesting.online/

El frontend permite realizar diferentes operaciones relacionadas con la gestión de habitaciones y reservas.

Entre las funcionalidades evaluadas se encuentran:

* Consulta de habitaciones.
* Visualización de habitaciones disponibles.
* Selección de fechas.
* Inicio del proceso de reserva.
* Registro de información del cliente.
* Confirmación de reservas.
* Validación de campos obligatorios.

## Backend / API

### Automation in Testing API

https://automationintesting.online/api/room/

Se utilizaron endpoints de la aplicación para validar la información relacionada con las habitaciones.

Las pruebas permiten comprobar:

* Código HTTP.
* Estructura JSON.
* Existencia de habitaciones.
* Consulta de habitaciones.
* Comportamiento ante identificadores inexistentes.

### Restful Booker API

https://restful-booker.herokuapp.com/apidoc/index.html

También se realizó una prueba sobre la API **Restful Booker**, utilizando el endpoint de consulta de reservas.

Endpoint utilizado:

```text
GET https://restful-booker.herokuapp.com/booking
```

---

# 🧪 Alcance de las pruebas

El proyecto contempla pruebas automatizadas sobre funcionalidades principales del sistema.

### Incluido en el alcance

* Navegac
