import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Sign_up = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",

  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
   

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    localStorage.setItem("isAuthenticated", "true");
    

    const { username,email, password } = formData;

    if (!username || !email|| !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,email, password }),
      });
localStorage.setItem("username", username); 
      const data = await response.json();

      if (response.ok) {
        setSuccess(data.msg);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setError(data.msg || "Signup failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input 
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <a href="/signin">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Sign_up;
