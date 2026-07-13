# API Design

# College ERP System

## Overview

The College ERP System provides a RESTful API that enables communication between the frontend and the backend. The API follows REST principles and exchanges data in JSON format. Authentication is implemented using JSON Web Tokens (JWT), and access to protected resources is controlled through Role-Based Access Control (RBAC).

---

# Base URL

```text
http://localhost:5000/api
```

---

# Authentication

Protected endpoints require a valid JWT token.

Example HTTP Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# Authentication APIs

## Login

**POST** `/auth/login`

### Request

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "token": "<jwt_token>",
  "role": "Student"
}
```

---

## Logout

**POST** `/auth/logout`

---

# Student APIs

## Get All Students

**GET** `/students`

Returns a list of all students.

---

## Get Student by ID

**GET** `/students/{id}`

Returns details of a specific student.

---

## Create Student

**POST** `/students`

Creates a new student record.

---

## Update Student

**PUT** `/students/{id}`

Updates student information.

---

## Delete Student

**DELETE** `/students/{id}`

Deletes a student record.

---

# Faculty APIs

## Get All Faculty

**GET** `/faculty`

## Get Faculty by ID

**GET** `/faculty/{id}`

## Create Faculty

**POST** `/faculty`

## Update Faculty

**PUT** `/faculty/{id}`

## Delete Faculty

**DELETE** `/faculty/{id}`

---

# Department APIs

## Get Departments

**GET** `/departments`

## Create Department

**POST** `/departments`

## Update Department

**PUT** `/departments/{id}`

## Delete Department

**DELETE** `/departments/{id}`

---

# Course APIs

## Get Courses

**GET** `/courses`

## Get Course by ID

**GET** `/courses/{id}`

## Create Course

**POST** `/courses`

## Update Course

**PUT** `/courses/{id}`

## Delete Course

**DELETE** `/courses/{id}`

---

# Attendance APIs

## Get Attendance

**GET** `/attendance`

## Mark Attendance

**POST** `/attendance`

## Update Attendance

**PUT** `/attendance/{id}`

## Delete Attendance

**DELETE** `/attendance/{id}`

---

# Marks APIs

## Get Marks

**GET** `/marks`

## Upload Marks

**POST** `/marks`

## Update Marks

**PUT** `/marks/{id}`

## Delete Marks

**DELETE** `/marks/{id}`

---

# Fee APIs

## Get Fee Records

**GET** `/fees`

## Add Fee Record

**POST** `/fees`

## Update Fee Record

**PUT** `/fees/{id}`

---

# Timetable APIs

## Get Timetable

**GET** `/timetable`

## Create Timetable

**POST** `/timetable`

## Update Timetable

**PUT** `/timetable/{id}`

## Delete Timetable

**DELETE** `/timetable/{id}`

---

# Notification APIs

## Get Notifications

**GET** `/notifications`

## Create Notification

**POST** `/notifications`

## Delete Notification

**DELETE** `/notifications/{id}`

---

# Dashboard APIs

## Student Dashboard

**GET** `/dashboard/student`

Returns attendance summary, marks, fee status, and notifications.

---

## Faculty Dashboard

**GET** `/dashboard/faculty`

Returns assigned courses, attendance summary, and recent activities.

---

## Administrator Dashboard

**GET** `/dashboard/admin`

Returns statistics including total students, faculty, departments, courses, and system overview.

---

# Report APIs

## Student Report

**GET** `/reports/students`

## Attendance Report

**GET** `/reports/attendance`

## Marks Report

**GET** `/reports/marks`

## Fee Report

**GET** `/reports/fees`

---

# HTTP Status Codes

| Status Code | Meaning                        |
| ----------- | ------------------------------ |
| 200         | Request completed successfully |
| 201         | Resource created successfully  |
| 400         | Invalid request                |
| 401         | Unauthorized                   |
| 403         | Forbidden                      |
| 404         | Resource not found             |
| 500         | Internal server error          |

---

# API Security

* JWT-based authentication
* Role-Based Access Control (RBAC)
* Password hashing before storage
* Input validation for all requests
* Secure HTTPS communication in production
* Protection against unauthorized access

---

# Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "An error occurred.",
  "error": {}
}
```

---

# API Testing

The API can be tested using:

* Postman
* Thunder Client (VS Code)
* Insomnia
* cURL

---

# Future API Enhancements

* Email notification API
* SMS notification API
* Online payment gateway integration
* File upload API for student documents
* QR code attendance API
* Mobile application API
* Real-time notifications using WebSockets

---

# Summary

The College ERP System API is designed using RESTful principles to provide secure, scalable, and reliable communication between the frontend and backend. It supports role-based access, standardized JSON responses, and modular endpoints that simplify development and future expansion.
