import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    axios.get("http://localhost:3001/causes") // Fetch data from JSON server
      .then((response) => {
        const causes = response.data.map((cause) => cause.cause);
        const amounts = response.data.map((cause) => cause.amount);

        setChartData({
          labels: causes,
          datasets: [
            {
              label: "Donation Amount ($)",
              data: amounts,
              backgroundColor: ["#168d8f", "#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
              borderColor: "white",
              borderWidth: 2,
              barThickness: 20 // Ensuring same thickness as OrgBarChart
            }
          ]
        });
      })
      .catch((error) => console.error("Error fetching chart data:", error));
  }, []);

  return (
    <div style={{ width: "80%", height: "350px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>Donation Amounts per Cause</h2>
      <Bar 
        data={chartData} 
        options={{ 
          responsive: true, 
          maintainAspectRatio: false, 
          scales: {
            x: { 
              grid: { color: "rgba(255, 255, 255, 0.2)" },
              ticks: { color: "white", font: { size: 14 } } 
            }, 
            y: { 
              grid: { color: "rgba(255, 255, 255, 0.2)" },
              ticks: { color: "white", font: { size: 14 } } 
            }
          }
        }} 
      />
    </div>
  );
};

export default BarChart;
