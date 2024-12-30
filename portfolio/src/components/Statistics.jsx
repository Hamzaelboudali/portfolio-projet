import React from "react";
import "../styles/Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="stats">
        <div className="stat">
          <h3>90+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Certifications</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
