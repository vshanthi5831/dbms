import React from "react";
import "./ImpactStats.css";

const stats = [
  { label: "Total Donors", value: "5,200+" },
  { label: "Causes Supported", value: "250+" },
  { label: "Funds Raised", value: "$1.2M+" },
];

const ImpactStats = () => {
  return (
    <div className="impact-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactStats;
