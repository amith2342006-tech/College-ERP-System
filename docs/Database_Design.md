# Database Design

# College ERP System

## Overview

The College ERP System uses **PostgreSQL** as its relational database management system. The database is designed to securely store and manage academic and administrative data while maintaining data integrity through primary keys, foreign keys, and relationships.

---

# Database Management System

* Database: PostgreSQL
* Database Type: Relational Database Management System (RDBMS)

---

# Database Tables

## 1. Users

Stores login information for all users.

| Column     | Data Type    | Description             |
| ---------- | ------------ | ----------------------- |
| user_id    | SERIAL (PK)  | Unique user ID          |
| full_name  | VARCHAR(100) | User's full name        |
| email      | VARCHAR(100) | User email (unique)     |
| password   | VARCHAR(255) | Encrypted password      |
| role       | VARCHAR(20)  | Admin, Faculty, Student |
| created_at | TIMESTAMP    | Account creation date   |

---

## 2. Students

Stores student information.

| Column        | Data Type   | Description            |
| ------------- | ----------- | ---------------------- |
| student_id    | SERIAL (PK) | Unique student ID      |
| user_id       | INT (FK)    | References Users       |
| roll_number   | VARCHAR(20) | Student roll number    |
| department_id | INT (FK)    | References Departments |
| semester      | INT         | Current semester       |
| phone         | VARCHAR(15) | Contact number         |
| address       | TEXT        | Student address        |

---

## 3. Faculty

Stores faculty information.

| Column        | Data Type   | Description            |
| ------------- | ----------- | ---------------------- |
| faculty_id    | SERIAL (PK) | Unique faculty ID      |
| user_id       | INT (FK)    | References Users       |
| department_id | INT (FK)    | References Departments |
| designation   | VARCHAR(50) | Faculty designation    |
| phone         | VARCHAR(15) | Contact number         |

---

## 4. Departments

Stores department details.

| Column          | Data Type    | Description     |
| --------------- | ------------ | --------------- |
| department_id   | SERIAL (PK)  | Department ID   |
| department_name | VARCHAR(100) | Department name |

---

## 5. Courses

Stores course information.

| Column        | Data Type    | Description            |
| ------------- | ------------ | ---------------------- |
| course_id     | SERIAL (PK)  | Course ID              |
| course_name   | VARCHAR(100) | Course name            |
| department_id | INT (FK)     | References Departments |
| semester      | INT          | Semester               |

---

## 6. Attendance

Stores attendance records.

| Column          | Data Type   | Description         |
| --------------- | ----------- | ------------------- |
| attendance_id   | SERIAL (PK) | Attendance ID       |
| student_id      | INT (FK)    | References Students |
| course_id       | INT (FK)    | References Courses  |
| attendance_date | DATE        | Attendance date     |
| status          | VARCHAR(10) | Present / Absent    |

---

## 7. Marks

Stores examination marks.

| Column         | Data Type   | Description         |
| -------------- | ----------- | ------------------- |
| mark_id        | SERIAL (PK) | Mark ID             |
| student_id     | INT (FK)    | References Students |
| course_id      | INT (FK)    | References Courses  |
| internal_marks | INT         | Internal marks      |
| external_marks | INT         | External marks      |
| total_marks    | INT         | Total marks         |
| grade          | VARCHAR(5)  | Grade               |

---

## 8. Fees

Stores fee details.

| Column         | Data Type     | Description         |
| -------------- | ------------- | ------------------- |
| fee_id         | SERIAL (PK)   | Fee record ID       |
| student_id     | INT (FK)      | References Students |
| total_fee      | DECIMAL(10,2) | Total fee           |
| paid_amount    | DECIMAL(10,2) | Amount paid         |
| pending_amount | DECIMAL(10,2) | Remaining amount    |
| payment_status | VARCHAR(20)   | Paid / Pending      |

---

## 9. Timetable

Stores class schedules.

| Column       | Data Type   | Description        |
| ------------ | ----------- | ------------------ |
| timetable_id | SERIAL (PK) | Timetable ID       |
| course_id    | INT (FK)    | References Courses |
| faculty_id   | INT (FK)    | References Faculty |
| day          | VARCHAR(20) | Day of the week    |
| start_time   | TIME        | Class start time   |
| end_time     | TIME        | Class end time     |
| room_number  | VARCHAR(20) | Classroom          |

---

## 10. Notifications

Stores announcements and notices.

| Column          | Data Type    | Description          |
| --------------- | ------------ | -------------------- |
| notification_id | SERIAL (PK)  | Notification ID      |
| title           | VARCHAR(150) | Notification title   |
| message         | TEXT         | Notification content |
| created_by      | INT (FK)     | References Users     |
| created_at      | TIMESTAMP    | Date created         |

---

# Entity Relationships

* One User can be linked to one Student or one Faculty profile.
* One Department can have many Students.
* One Department can have many Faculty members.
* One Department can offer many Courses.
* One Course can have many Attendance records.
* One Course can have many Marks records.
* One Student can have many Attendance records.
* One Student can have many Marks records.
* One Student can have many Fee records.
* One Faculty member can teach many Courses.
* One User can create many Notifications.

---

# Primary Keys

* user_id
* student_id
* faculty_id
* department_id
* course_id
* attendance_id
* mark_id
* fee_id
* timetable_id
* notification_id

---

# Foreign Keys

* Students.user_id → Users.user_id
* Faculty.user_id → Users.user_id
* Students.department_id → Departments.department_id
* Faculty.department_id → Departments.department_id
* Courses.department_id → Departments.department_id
* Attendance.student_id → Students.student_id
* Attendance.course_id → Courses.course_id
* Marks.student_id → Students.student_id
* Marks.course_id → Courses.course_id
* Fees.student_id → Students.student_id
* Timetable.course_id → Courses.course_id
* Timetable.faculty_id → Faculty.faculty_id
* Notifications.created_by → Users.user_id

---

# Database Design Principles

* Normalize data to reduce redundancy.
* Use primary keys to uniquely identify records.
* Use foreign keys to maintain relationships.
* Store passwords in encrypted form.
* Validate all input before saving to the database.
* Perform regular database backups.

---

# Future Enhancements

* Library Management tables
* Hostel Management tables
* Placement Management tables
* Parent Portal support
* Audit Logs
* Online Fee Payment transactions
* Attendance using QR Codes
* Multi-campus database support

---

# Summary

The PostgreSQL database for the College ERP System is designed to provide secure, efficient, and scalable storage for academic and administrative data. The relational structure ensures data consistency, supports role-based operations, and enables reliable reporting across all modules.
