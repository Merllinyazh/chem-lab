import React from "react";
import { useNavigate } from "react-router-dom";


const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to the Chemistry Virtual Lab</h1>
      <p>Explore interactive experiments and enhance your learning experience.</p>
      <div className="button-group">
        <button className="btn login-btn" onClick={() => navigate("/login")}>Login</button>
        <button className="btn signup-btn" onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default WelcomePage;
