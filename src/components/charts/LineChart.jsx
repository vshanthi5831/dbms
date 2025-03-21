import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    axios.get("http://localhost:3001/yearly_donations") // Fetch data from JSON server
      .then((response) => {
        const years = response.data.map((item) => item.year);
        const donations = response.data.map((item) => item.total_donations);

        setChartData({
          labels: years,
          datasets: [
            {
              label: "Total Donations ($)",
              data: donations,
              borderColor: "white", 
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              pointBackgroundColor: "#168d8f", 
              pointBorderColor: "white", 
              borderWidth: 3, 
              tension: 0.4, 
              fill: true
            }
          ]
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ width: "60%", height: "300px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>Yearly Donation Trends</h2>
      <Line 
        data={chartData} 
        options={{ 
          responsive: true, 
          maintainAspectRatio: false, 
          scales: {
            x: { grid: { color: "rgba(255, 255, 255, 0.2)" }, ticks: { color: "white" } }, 
            y: { grid: { color: "rgba(255, 255, 255, 0.2)" }, ticks: { color: "white" } }  
          }
        }} 
      />
    </div>
  );
};

export default LineChart;
