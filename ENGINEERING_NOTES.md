# ENGINEERING_NOTES.md

# Engineering Notes

## Project Overview

TaskFlow is a full-stack task management application developed as part of a Full Stack Developer assignment. The application allows users to manage multiple workspaces, access different project boards, create and organize tasks, and share boards publicly in a read-only mode.

The project follows a simple client-server architecture with a React frontend and an Express.js backend communicating through REST APIs.

---

# Architecture

The application is divided into two independent applications:

## Frontend

* React
* TypeScript
* React Router DOM
* Axios
* CSS
* Lucide React Icons

The frontend is responsible for:

* User Interface
* Client-side Routing
* API Requests
* Authentication Handling
* State Management

---

## Backend

The backend is built using Express.js.

Responsibilities include:

* User Authentication
* Workspace APIs
* Board APIs
* Task CRUD APIs
* Public Board APIs

The backend currently uses in-memory JavaScript arrays to simulate database operations for simplicity.

---

# Folder Structure

```text
taskflow-frontend-assignment/

├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.tsx
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── README.md
└── ENGINEERING_NOTES.md
```

---

# Authentication

Authentication is implemented using a simple login endpoint.

After successful login:

* A token is returned by the backend.
* The token is stored in Local Storage.
* Protected routes verify the existence of the token before allowing access.

This approach was selected because the assignment did not require JWT implementation.

---

# Routing

React Router is used for client-side navigation.

Routes include:

* Login
* Dashboard
* Board
* Public Board

Protected routes prevent unauthorized access to internal pages.

---

# State Management

The application uses React Hooks.

Main hooks used:

* useState
* useEffect

Since the application is relatively small, Context API or Redux was not required.

---

# API Design

RESTful APIs were implemented for all resources.

Examples include:

* POST /login
* GET /boards
* GET /tasks
* POST /tasks
* PATCH /tasks/:id
* DELETE /tasks/:id
* GET /public/board/:id

---

# Responsive Design

The UI was designed to work across:

* Desktop
* Tablet
* Mobile

Media queries were added to:

* Login Page
* Dashboard
* Board
* Task Cards
* Public Board

This ensures a consistent experience across different screen sizes.

---

# Deployment

Frontend:

* Hosted on Vercel

Backend:

* Hosted on Render

The frontend communicates with the deployed backend through Axios using the Render API URL.

---

# Engineering Decisions

Several implementation decisions were made during development:

* Separate frontend and backend repositories within a single project structure.
* Component-based UI for improved reusability.
* REST APIs for clear separation of concerns.
* CSS Modules (plain CSS files) instead of UI libraries to keep the project lightweight.
* Board-specific task management to support multiple project boards.

---

# Challenges Faced

Some of the challenges encountered during development included:

* Configuring React Router for deployment on Vercel.
* Deploying the Express backend on Render.
* Ensuring tasks belonged to the correct board.
* Making the Kanban board responsive for smaller screens.
* Configuring GitHub permissions for deployment.

Each issue was resolved through incremental testing and deployment verification.

---

# Future Improvements

If the project were extended further, the following features would be added:

* JWT Authentication
* MongoDB or PostgreSQL integration
* Drag-and-drop task movement
* Task priorities
* Due dates
* User roles and permissions
* Search and filtering
* Activity logs
* Dark mode
* Real-time collaboration using WebSockets

---

# Conclusion

The project successfully demonstrates a complete Frontend application using React and Express.js while implementing authentication, CRUD operations, multiple workspaces, board management, responsive design, protected routes, public sharing, and cloud deployment.
