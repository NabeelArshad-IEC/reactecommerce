// LoginButton.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Dummy credentials for demonstration purposes
    const dummyUsername = "nabeel";
    const dummyPassword = "1234";

    if (username === dummyUsername && password === dummyPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <button className="navbar-link user-logout" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Use NavLink to navigate to the login page */}
      <NavLink to="/login" className="navbar-link user-login">
        Login
      </NavLink>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default LoginButton;
