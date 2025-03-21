import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ImpactStats.css";

const ImpactStats = () => {
  const [totalDonors, setTotalDonors] = useState(0);
  const [causesSupported, setCausesSupported] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/causes") // Fetch causes data
      .then((response) => {
        const causesData = response.data;

        setCausesSupported(causesData.length); // Count number of causes

        const totalFunds = causesData.reduce((sum, cause) => sum + cause.amount, 0);
        setFundsRaised(totalFunds); // Sum of all donation amounts

        // Assuming each cause has unique donors, we take the same count as causes
        setTotalDonors(causesData.length * 10); // Simulated donor count (Assumption)
      })
      .catch((error) => console.error("Error fetching impact stats:", error));
  }, []);

  return (
    <div className="impact-stats">
      <div className="stat-card">
        <h2>{totalDonors.toLocaleString()}+</h2>
        <p>Total Donors</p>
      </div>
      <div className="stat-card">
        <h2>{causesSupported.toLocaleString()}+</h2>
        <p>Causes Supported</p>
      </div>
      <div className="stat-card">
        <h2>${(fundsRaised).toFixed(1)}M+</h2>
        <p>Funds Raised</p>
      </div>
    </div>
  );
};

export default ImpactStats;
