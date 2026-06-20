import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Board";
import PublicBoard from "./pages/PublicBoard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/board/:id"
  element={
    <ProtectedRoute>
      <Board />
    </ProtectedRoute>
  }
/>

<Route
  path="/public/board/:id"
  element={<PublicBoard />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;