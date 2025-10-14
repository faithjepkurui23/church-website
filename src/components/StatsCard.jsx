import React from 'react';
import './StatsCard.css';

function StatsCard({ icon, number, label }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div>
        <h3>{number}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default StatsCard;
