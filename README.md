# 🌐 Riposis — Portfolio & Project Showcase

Welcome — this repository hosts my portfolio site and featured projects.  
I’m a **Java Backend Developer (Spring Boot)** focused on building **production-ready backend systems** with clean architecture, secure REST APIs, validation, observability, and deployable configurations.

---

## 🚀 Featured Project — Spring Boot To-Do Management Application

A production-style **To-Do Management System** built with **Spring Boot**, exposing the same business domain through both a **JSP-based MVC UI** and a **JSON REST API**.

This project demonstrates how backend logic can be **cleanly reused**, validated, secured, documented, and prepared for production-like environments.

### 🔹 Quick Facts
- **Scope:** 15+ REST endpoints  
- **Architecture:** Layered (Controller → Service → Repository)  
- **Databases:** H2 (dev) & MySQL (production-ready)  
- **Focus:** Backend engineering, API design, security & observability  
- **Repository:** https://github.com/RIP0SIS/Todo-Management-Web-Application

---

## ✨ Key Features

- **Hybrid Backend**
  - Same domain exposed via **JSP MVC UI** and **REST API**
  - Clear separation of concerns and reusable business logic

- **REST API Design**
  - Full CRUD operations
  - Proper HTTP verbs and `ResponseEntity` usage
  - DTO-based request/response contracts

- **Validation & Error Handling**
  - Bean Validation using `@Valid`
  - Centralized exception handling using `@ControllerAdvice`
  - Consistent structured JSON error responses (`errorDetails`)

- **Security**
  - Spring Security with BCrypt password encoding
  - In-memory user store for demo & authentication flows
  - Role-based access control
  - Session-based handling for MVC flows

- **Persistence**
  - Spring Data JPA + Hibernate
  - H2 database for fast local development
  - MySQL configuration included (Docker-ready)

- **API Documentation & Observability**
  - `springdoc-openapi` for auto-generated Swagger / OpenAPI docs
  - Spring Boot Actuator for health and metrics endpoints
  - Static filtering applied to REST responses for controlled data exposure

- **Developer Experience**
  - `data.sql` for bootstrapped demo data
  - Maven build
  - Docker-friendly configuration

---

## 📸 Application Screenshots

Screenshots are available in the `Todo-App-Screenshots/` folder:

### 1️⃣ Login Page
Authenticate the user.

![Todo List](Todo-App-Screenshots/1.png)

---

### 2️⃣ Add New To-Do
Form to create a new To-Do item with target date and status.

![Add Todo](Todo-App-Screenshots/4.png)

---

### 3️⃣ CRUD Dashboard & Update Existing To-Do
Shows all existing To-Dos with Update/Delete actions.
Edit an existing To-Do while reusing the same form logic.

![Update Todo](Todo-App-Screenshots/3.png)

---

### 4️⃣ Validation Errors (@Valid)
Server-side validation errors handled using Bean Validation.

![Validation Error](Todo-App-Screenshots/5.png)

---

### 5️⃣ REST API – JSON Response
REST endpoint returning structured JSON data for API consumers.

![REST API JSON](Todo-App-Screenshots/7.png)

---

### 6️⃣ Centralized Error Handling
Consistent error response using `@ControllerAdvice`.

![API Error Response](Todo-App-Screenshots/8.png)

---

> 💡 Tip: The validation error screenshot is especially useful during interviews to demonstrate server-side validation and centralized error handling.

---

## 🛠️ Tech Stack

- **Language:** Java  
- **Frameworks:** Spring Boot, Spring MVC, Spring Security  
- **Persistence:** Spring Data JPA, Hibernate  
- **Validation:** Bean Validation (`@Valid`)  
- **API Docs:** springdoc-openapi (Swagger UI)  
- **Observability:** Spring Boot Actuator  
- **UI:** JSP, JSTL, Bootstrap  
- **Databases:** H2, MySQL  
- **Build Tool:** Maven  
- **Containerization:** Docker  

---


## 🧪 Testing

- Wrote **JUnit tests** for the repository layer using **@DataJpaTest** to verify persistence behavior in an **isolated in-memory H2 database**.
- Tested core JPA operations such as **save**, **find**, and **delete**, along with **custom query methods** like `findByUsername`.
- Ensured repository correctness independently of web and service layers.

---

## ▶️ Running the Application

### Prerequisites
- Java 17+
- Maven
- (Optional) Docker for MySQL

### Run with Maven (H2 – default)
```bash
git clone https://github.com/RIP0SIS/Todo-Management-Web-Application.git
cd Todo-Management-Web-Application
mvn spring-boot:run
```
MVC UI: http://localhost:8080

REST API: http://localhost:8080/api/todos

Swagger UI: http://localhost:8080/swagger-ui.html

Actuator Health: http://localhost:8080/actuator/health

---

🧩 Other Projects
🛒 Amazon Clone (Frontend)

A frontend demo showcasing UI development and API integration.

Built with JavaScript & Bootstrap

Product listing, cart, checkout flow

🔗 Live: https://riposis.me/Amazon/amazon.html

📂 Source: https://github.com/RIP0SIS/Amazon

---

🎮 Browser Game

A small interactive browser game demonstrating JavaScript fundamentals.

---

🧾 Certifications

AICTE Certified Java Backend Developer — 2025
https://drive.google.com/file/d/1PHUHbhTZPs4FQw-0Zjy4cZy4VhKlMS1q/view

AWS Certified Solutions Architect – Associate
(In progress, expected 2026)

---

👨‍💻 About Me

I’m a Java Backend Developer focused on building clean, scalable Spring Boot applications with REST APIs, validation, security, and database integration.
I enjoy designing production-ready backend systems and am seeking opportunities to contribute backend expertise while growing in cloud-native development.

---

📫 Contact

Email: restinpeace869@gmail.com

GitHub: https://github.com/RIP0SIS

Portfolio: https://riposis.me
