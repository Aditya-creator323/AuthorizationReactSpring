import React from "react";
import './Dashboard.css'; // Import the CSS for styling

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <section className="stats">
          <div className="stat-card">
            <h2>Current Balance</h2>
            <p>$10,500</p>
          </div>
          <div className="stat-card">
            <h2>Total Income</h2>
            <p>$12,000</p>
          </div>
          <div className="stat-card">
            <h2>Total Expenses</h2>
            <p>$1,500</p>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Salary received: $5,000</li>
            <li>Grocery shopping: $200</li>
            <li>Investment income: $500</li>
            <li>Rent payment: $1,000</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
