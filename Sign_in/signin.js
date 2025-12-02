import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Sign_in = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("authToken", data.token);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        navigate("/dashboard");
      } else {
        setError(data.msg || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        {error && <p className="signin-error">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />

        <button type="submit" className="signin-button">Login</button>
      </form>
    </div>
  );
};

export default Sign_in;
