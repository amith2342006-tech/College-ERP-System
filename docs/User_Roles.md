# User Roles

# College ERP System

## Overview

The College ERP System uses **Role-Based Access Control (RBAC)** to ensure that each user can access only the features and data relevant to their responsibilities. The system includes three primary user roles: **Administrator**, **Faculty**, and **Student**.

---

# 1. Administrator

The Administrator has full access to the system and is responsible for managing academic and administrative operations.

### Responsibilities

* Manage student records
* Manage faculty records
* Manage departments and courses
* Create and manage user accounts
* Manage academic semesters
* Manage fee records
* Publish announcements
* View system-wide reports
* Monitor overall system activity

### Permissions

* Create, Read, Update, and Delete (CRUD) all records
* Assign user roles
* Generate all reports
* Access all modules
* Configure system settings

---

# 2. Faculty

Faculty members are responsible for managing academic activities related to the students assigned to them.

### Responsibilities

* Mark student attendance
* Upload examination marks
* View assigned classes and subjects
* Update student academic records
* Publish course-related announcements
* View student performance

### Permissions

* Read student information
* Create and update attendance records
* Create and update marks
* View assigned courses and timetable
* Access faculty dashboard
* Update personal profile

---

# 3. Student

Students can access their own academic information and college-related services.

### Responsibilities

* View attendance
* View examination results
* View timetable
* Check fee payment status
* Receive announcements
* Update personal profile

### Permissions

* Read personal academic records
* View attendance history
* View marks and grades
* View fee information
* Access student dashboard
* Update personal profile and password

---

# Role Access Summary

| Module                | Administrator |      Faculty     |      Student     |
| --------------------- | :-----------: | :--------------: | :--------------: |
| Login                 |       ✅       |         ✅        |         ✅        |
| Dashboard             |       ✅       |         ✅        |         ✅        |
| Student Management    |       ✅       |       View       | Own Profile Only |
| Faculty Management    |       ✅       |    Own Profile   |         ❌        |
| Department Management |       ✅       |       View       |         ❌        |
| Course Management     |       ✅       |       View       |       View       |
| Attendance            |       ✅       |      Manage      |       View       |
| Marks                 |       ✅       |      Manage      |       View       |
| Timetable             |       ✅       |       View       |       View       |
| Fee Management        |       ✅       |       View       |       View       |
| Notifications         |     Manage    |   Create & View  |       View       |
| Reports               |  All Reports  | Academic Reports | Personal Reports |
| Profile Management    |       ✅       |         ✅        |         ✅        |

---

# Access Control

* Users must log in using valid credentials.
* Access to features is controlled by the assigned role.
* Users can access only the modules and data permitted for their role.
* Unauthorized access attempts are denied.
* Passwords are stored securely using encryption.

---

# Future Roles (Optional)

The system can be extended to include additional user roles such as:

* Head of Department (HOD)
* Librarian
* Accountant
* Placement Officer
* Hostel Warden
* Parent
