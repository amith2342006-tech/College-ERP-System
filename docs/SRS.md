# Software Requirements Specification (SRS)

# College ERP System

## 1. Introduction

### 1.1 Purpose

The purpose of the College ERP System is to provide a centralized web-based platform for managing academic and administrative activities within a college. The system aims to simplify daily operations, improve communication, and reduce manual paperwork.

### 1.2 Scope

The College ERP System allows students, faculty, and administrators to perform their respective tasks through a secure online platform. The system manages student records, attendance, marks, courses, fees, timetables, notifications, and reports.

### 1.3 Intended Users

* Students
* Faculty
* Administrators

---

## 2. Overall Description

### 2.1 Product Perspective

The College ERP System is an independent web application that provides centralized access to academic and administrative information. It integrates multiple college management functions into a single system.

### 2.2 Product Features

* Secure Login and Authentication
* Role-Based Access Control
* Student Management
* Faculty Management
* Attendance Management
* Marks Management
* Course Management
* Department Management
* Timetable Management
* Fee Management
* Notification System
* Dashboard
* Report Generation
* Profile Management

### 2.3 User Roles

#### Student

* View attendance
* View marks
* View timetable
* Check fee status
* Receive notifications
* Update profile

#### Faculty

* Mark attendance
* Upload marks
* View assigned courses
* Manage student records
* Send notifications

#### Administrator

* Manage students
* Manage faculty
* Manage departments
* Manage courses
* Manage fees
* Generate reports
* Manage user accounts

---

## 3. Functional Requirements

### FR-1 User Authentication

The system shall allow users to log in securely based on their assigned roles.

### FR-2 Student Management

The system shall allow administrators to add, update, view, and remove student records.

### FR-3 Faculty Management

The system shall allow administrators to manage faculty information.

### FR-4 Attendance Management

Faculty shall be able to record attendance, and students shall be able to view their attendance records.

### FR-5 Marks Management

Faculty shall upload marks, and students shall be able to view their academic results.

### FR-6 Course Management

Administrators shall manage departments, courses, and subjects.

### FR-7 Fee Management

The system shall maintain student fee records and display payment status.

### FR-8 Timetable Management

The system shall provide class schedules for students and faculty.

### FR-9 Notification System

The system shall allow administrators and faculty to publish important announcements.

### FR-10 Report Generation

The system shall generate reports related to attendance, marks, students, faculty, departments, and fees.

---

## 4. Non-Functional Requirements

### Performance

* The system should respond quickly to user requests.
* Reports should be generated efficiently.

### Security

* Passwords should be stored securely.
* Users should access only authorized information.
* Role-based authorization should be implemented.

### Reliability

* The system should provide consistent and accurate data.
* Database backups should be performed regularly.

### Usability

* The interface should be simple, responsive, and easy to navigate.

### Scalability

* The system should support future enhancements and additional users.

---

## 5. System Requirements

### Software Requirements

* Operating System: Windows 10/11 or Linux
* Frontend: HTML, CSS, JavaScript, React.js
* Backend: Node.js, Express.js
* Database: PostgreSQL
* Version Control: Git and GitHub
* API Testing: Postman
* UI Design: Figma

### Hardware Requirements

* Processor: Intel Core i3 or higher
* RAM: 4 GB minimum (8 GB recommended)
* Storage: 10 GB free disk space
* Internet connection for deployment and updates

---

## 6. Reports

The system shall generate the following reports:

* Student Report
* Attendance Report
* Marks Report
* Fee Report
* Faculty Report
* Department Report

---

## 7. Assumptions and Constraints

### Assumptions

* Users have valid login credentials.
* Internet connectivity is available when accessing the system.
* The PostgreSQL database server is operational.

### Constraints

* Only authorized users can access protected modules.
* Data integrity must be maintained.
* The application depends on the availability of the database server.

---

## 8. Future Enhancements

* Online fee payment integration
* SMS and email notifications
* Mobile application
* AI-powered student performance analysis
* QR code attendance
* Cloud deployment
* Multi-college support

---

## 9. Conclusion

The College ERP System is designed to provide a secure, efficient, and centralized solution for managing college operations. By automating academic and administrative processes, the system improves productivity, minimizes manual effort, enhances communication, and provides accurate information to students, faculty, and administrators.
