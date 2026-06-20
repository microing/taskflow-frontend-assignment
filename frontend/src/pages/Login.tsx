import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <h1>TaskFlow</h1>
          <p>Manage workspaces, boards and tasks efficiently.</p>
        </div>

        <h2>Welcome Back 👋</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Sign In</button>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Demo Login
          <br />
          <strong>Email:</strong> admin@test.com
          <br />
          <strong>Password:</strong> 123456
        </p>
      </div>
    </div>
  );
}