import React, { useState } from 'react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login functionality
    console.log('Logged in with:', credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          value={credentials.username} 
          onChange={handleChange} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
