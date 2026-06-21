# TaskFlow – Multi-Workspace Task Management System

## Overview

TaskFlow is a full-stack task management application that allows teams to organize projects across multiple workspaces and boards. Users can create, manage, and track tasks through different workflow stages while also sharing boards publicly in a read-only mode.

The application demonstrates authentication, protected routes, REST API integration, CRUD operations, and responsive UI design.

---

## Features

### Authentication

* User Login
* Protected Dashboard
* Token-based authentication using Local Storage

### Dashboard

* Multiple Workspaces
* Workspace Switcher
* Board Listing
* Responsive Dashboard UI

### Task Board

* Create Tasks
* Delete Tasks
* Move Tasks between workflow stages
* Todo
* In Progress
* Done

### Public Board

* Shareable public board
* Read-only access
* No authentication required

### Responsive Design

* Mobile Friendly
* Tablet Friendly
* Desktop Friendly

---

## Tech Stack

### Frontend

* React
* TypeScript
* React Router DOM
* Axios
* Lucide React
* CSS

### Backend

* Node.js
* Express.js
* CORS

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Folder Structure

```
project/

├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── server.js
│   └── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/microing/taskflow-frontend-assignment.git
```

---

### Backend

```bash
cd backend

npm install

npm start
```

Runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

```
POST /login
```

---

### Boards

```
GET /boards
```

---

### Tasks

```
GET /tasks

POST /tasks

PATCH /tasks/:id

DELETE /tasks/:id
```

---

### Public Board

```
GET /public/board/:id
```

---

## Deployment

### Frontend

Hosted on **Vercel**

### Backend

Hosted on **Render**

## Live Demo

Frontend:
https://taskflow-frontend-assignment.vercel.app/

Backend:
https://taskflow-backend-m09m.onrender.com/

---

## Future Improvements

* Drag and Drop Task Movement
* JWT Authentication
* Database Integration (MongoDB/PostgreSQL)
* User Roles & Permissions
* Task Due Dates
* Task Priorities
* Search & Filters
* Dark Mode

---

## Author

Developed as part of a Frontend Development Assignment.
