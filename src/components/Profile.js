import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      <p>Username: {user.username}</p>
    </div>
  );
};

export default Profile;
