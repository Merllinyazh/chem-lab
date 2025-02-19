import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check for email and password
    if (email === 'student@example.com' && password === 'password123') {
      // Store user data in localStorage (for demo purpose)
      localStorage.setItem('user', JSON.stringify({ email }));
      
      // Redirect to student dashboard
      navigate('/studentdash');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
