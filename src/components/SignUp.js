import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { username, password, profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : '' };

    localStorage.setItem('user', JSON.stringify(newUser));
    alert('User signed up successfully');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Profile Picture:</label>
        <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
