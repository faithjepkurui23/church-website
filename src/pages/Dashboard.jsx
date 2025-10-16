import React from 'react';
import StatsCard from '../components/StatsCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <main className="dashboard-content">
        <h1>Dashboard Overview</h1>

        <div className="stats-section">
          <StatsCard icon="👥" number="1,230" label="Church Members" />
          <StatsCard icon="🎤" number="85" label="Sermons Uploaded" />
          <StatsCard icon="📅" number="24" label="Upcoming Events" />
          <StatsCard icon="💰" number="$10K" label="Donations" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
