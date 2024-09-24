import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const authorizeUser = (token) => {
    fetch(`https://authorizationbackend-production-9b62.up.railway.app/api/v1/demo-controller`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Final Data : ", data);
        navigate("/dashboard"); // navigate to dashboard page
      })
      .catch((error) => console.log("Error from get method : ", error));

    console.log("Token value : ", token.token);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to log in the user
    fetch(`https://authorizationbackend-production-9b62.up.railway.app/api/v1/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        authorizeUser(data);
        console.log("Login form data : ", data);
      })
      .catch((error) => {
        console.log("Error : ", error);
        alert("Access Denied", error);
      });
    console.log("Login form submitted", formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
