# Al-Fraggers
# Chistes Malos API

Proyecto fullstack desarrollado con **Spring Boot + Angular**.

La aplicación permite gestionar categorías, chistes y comentarios, cumpliendo una estructura de base de datos con relaciones **1:N**.

---

## Tecnologías usadas

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database
- Lombok

### Frontend
- Angular 21
- Standalone Components
- Signals
- Reactive Forms
- HttpClient

---

## Modelo de datos

Relaciones:

- Una **Categoría** tiene muchos **Chistes**
- Un **Chiste** tiene muchos **Comentarios**
