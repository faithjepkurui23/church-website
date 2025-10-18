import React from "react";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("churchUser"));

  if (!user) return null;

  return (
    <div className="profile-header">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <span>Welcome back, {user.name} ✨</span>
    </div>
  );
}

export default UserProfile;
