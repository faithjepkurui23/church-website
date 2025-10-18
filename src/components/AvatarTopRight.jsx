import React from "react";
import "./AvatarTopRight.css";

const AvatarTopRight = () => {
  const user = JSON.parse(localStorage.getItem("churchUser"));

  if (!user) return null;

  // Get initials
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="avatar-top-right" title={user.name}>
      {initials}
    </div>
  );
};

export default AvatarTopRight;
