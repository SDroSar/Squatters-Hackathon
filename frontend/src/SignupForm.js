import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [accountname, setAccountname] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:5000/api/accounts/signup', { accountname, password });
      console.log('Signup Success:', res.data);
    } catch (error) {
      if (error.response) {
        console.error('Signup Error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Accountname:</label>
        <input
          type="text"
          value={accountname}
          onChange={(e) => setAccountname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;