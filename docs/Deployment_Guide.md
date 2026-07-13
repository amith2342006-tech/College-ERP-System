# Deployment Guide

# College ERP System

## 1. Overview

This guide explains how to set up, configure, and deploy the College ERP System. Follow the steps below to run the application in a local development environment or prepare it for production deployment.

---

# 2. Prerequisites

Before starting, ensure the following software is installed:

* Git
* Node.js (v18 or later)
* npm (comes with Node.js)
* PostgreSQL (v15 or later)
* pgAdmin 4 (optional, for database management)
* Visual Studio Code
* Postman (for API testing)

Verify the installations:

```bash
git --version
node --version
npm --version
psql --version
```

---

# 3. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/<your-username>/college-erp-system.git
cd college-erp-system
```

Replace `<your-username>` with your GitHub username.

---

# 4. Install Dependencies

## Frontend

```bash
cd client
npm install
```

## Backend

```bash
cd ../server
npm install
```

---

# 5. Configure the Database

Create a PostgreSQL database.

Example:

```sql
CREATE DATABASE college_erp;
```

Update the database connection settings in the backend `.env` file.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=college_erp
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
```

Never commit the `.env` file to GitHub.

---

# 6. Run Database Migrations

If your project uses database migrations:

```bash
npm run migrate
```

If migrations are not implemented, manually create the required tables or execute the provided SQL scripts.

---

# 7. Start the Application

## Start Backend

```bash
cd server
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

## Start Frontend

Open another terminal.

```bash
cd client
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 8. Verify the Installation

Check that:

* Frontend loads successfully.
* Backend starts without errors.
* PostgreSQL connection is successful.
* Login page is accessible.
* APIs return expected responses.
* Database records can be created and retrieved.

---

# 9. Production Deployment

For production deployment:

## Frontend

Build the React application.

```bash
npm run build
```

Deploy the generated build files to a web server or hosting platform.

---

## Backend

Deploy the Node.js server to a hosting provider.

Common options include:

* Render
* Railway
* DigitalOcean
* AWS
* Microsoft Azure

---

## Database

Deploy PostgreSQL using:

* Neon
* Supabase
* Railway PostgreSQL
* Amazon RDS
* Self-hosted PostgreSQL

---

# 10. Environment Variables

The following environment variables are required:

```env
PORT=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

---

# 11. Troubleshooting

## Database Connection Failed

* Ensure PostgreSQL is running.
* Verify database credentials.
* Confirm the database exists.
* Check firewall settings.

---

## npm Install Errors

Run:

```bash
npm install
```

If problems continue:

```bash
npm cache clean --force
npm install
```

---

## Port Already in Use

Change the application's port or stop the process using the current port.

---

## CORS Errors

Verify that CORS is configured correctly in the backend and that the frontend is using the correct API URL.

---

# 12. Updating the Application

To update the project with the latest changes:

```bash
git pull
npm install
```

Restart both the frontend and backend after updating.

---

# 13. Backup and Recovery

* Perform regular PostgreSQL database backups.
* Store backups securely.
* Test restoration procedures periodically.

---

# 14. Security Recommendations

* Use HTTPS in production.
* Store secrets in environment variables.
* Encrypt user passwords.
* Keep dependencies up to date.
* Restrict database access to trusted sources.
* Enable regular database backups.

---

# 15. Deployment Checklist

* Git installed
* Node.js installed
* PostgreSQL configured
* Environment variables configured
* Dependencies installed
* Database created
* Backend running
* Frontend running
* API endpoints tested
* Login verified
* Reports generated successfully

---

# Summary

The College ERP System can be deployed locally for development or hosted on a cloud platform for production. Following this guide ensures that the frontend, backend, and PostgreSQL database are configured correctly and that the application runs securely and reliably.
