# Setup Instructions

## Prerequisites

Ensure the following are installed:

* Node.js (v18 or later recommended)
* npm
* Git

---

# Clone the Repository

```bash
git clone https://github.com/microing/taskflow-frontend-assignment.git
cd taskflow-frontend-assignment
```

---

# Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

The backend will run at:

```text
http://localhost:5000
```

---

# Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# Production Deployment

## Backend

The backend is deployed on Render:

```text
https://taskflow-backend-m09m.onrender.com
```

## Frontend

The frontend is deployed on Vercel:

```text
https://taskflow-frontend-assignment.vercel.app/
```

Replace the placeholder above with your actual Vercel URL.

---

# Local API Configuration

For local development, ensure the Axios base URL points to:

```text
http://localhost:5000
```

For production deployment, update the Axios base URL to:

```text
https://taskflow-backend-m09m.onrender.com
```

---

# Running the Application

1. Start the backend server.
2. Start the frontend development server.
3. Open:

```text
http://localhost:5173
```

4. Log in using the provided credentials.
5. Access the dashboard and begin managing tasks.
