import React from "react";
import "./Dashboard.css";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Church Dashboard</h1>
        <p>Welcome to the admin panel — manage sermons, events, and updates.</p>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Sermons</h2>
          <p>Manage and upload weekly sermons</p>
          <button className="dash-btn">Go</button>
        </div>

        <div className="dashboard-card">
          <h2>Events</h2>
          <p>View, add or edit church events</p>
          <button className="dash-btn">Go</button>
        </div>

        <div className="dashboard-card">
          <h2>Messages</h2>
          <p>Read and respond to community messages</p>
          <button className="dash-btn">Go</button>
        </div>

        <div className="dashboard-card">
          <h2>Analytics</h2>
          <p>Check attendance and engagement stats</p>
          <button className="dash-btn">Go</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
