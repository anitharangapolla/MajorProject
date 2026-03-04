import React from "react";
// import "../styles/dashboard.css";


function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard 🛠️</h2>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Total Users</h3>
          <p>124</p>
        </div>

        <div className="dash-card">
          <h3>Active Students</h3>
          <p>97</p>
        </div>

        <div className="dash-card">
          <h3>New Registrations</h3>
          <p>+18 this week</p>
        </div>

        <div className="dash-card">
          <h3>Trending Skills</h3>
          <p>React • Python • ML</p>
        </div>

        <div className="dash-card">
          <h3>System Alerts</h3>
          <p>⚠️ Resume service delay</p>
        </div>

        <div className="dash-card">
          <h3>Platform Health</h3>
          <p>99.2% uptime</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
