import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import Footer from '../components/Footer';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Sidebar />
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
      <Footer />
    </>
  );
}

export default Dashboard;
