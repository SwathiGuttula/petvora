import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Send data to backend (optional, can ignore errors)
    try {
      await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
    } catch (err) {
      console.error("Fetch error:", err);
    }

    // Always navigate to login
    navigate("/login");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242424",
      color: "white"
    }}>
      <form onSubmit={handleRegister} style={{
        backgroundColor: "#2a2a2a",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        textAlign: "center"
      }}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "90%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "none" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "90%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "none" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "90%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "none" }}
        />
        <button type="submit" style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff6f61",
          color: "white",
          cursor: "pointer",
          marginTop: "10px"
        }}>Register</button>
      </form>
    </div>
  );
}
