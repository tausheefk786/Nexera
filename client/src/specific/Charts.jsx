import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const LineChart = () => {
  const data = {
    labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
    datasets: [
      {
        label: "Messages",
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.4,
        pointBackgroundColor: "#36A2EB",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#333", titleColor: "#fff" },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(200,200,200,0.2)" } },
    },
  };

  return (
    <div style={{ width: "100%", height: "20rem" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export const DoughnutChart = ({ labels, value }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: ["#4CAF50", "#FF9800"],
        hoverBackgroundColor: ["#45A049", "#FB8C00"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#333", font: { size: 13 } },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "20rem" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
