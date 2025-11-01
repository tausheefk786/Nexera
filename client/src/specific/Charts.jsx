import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

// ✅ Line Chart (same as image)
export const LineChart = () => {
  const data = {
    labels: ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "Messages",
        data: [20, 55, 35, 68, 40, 15, 0],
        fill: true,
        backgroundColor: "rgba(166, 109, 241, 0.3)", // light purple area
        borderColor: "#8b47df", // purple border
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgba(0,0,0,0.6)" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "rgba(0,0,0,0.6)" },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "20rem" }}>
      <Line data={data} options={options} />
    </div>
  );
};

// ✅ Doughnut Chart (like in your screenshot)
export const DoughnutChart = ({ labels = ["Group Chats", "Single Chats"], value = [66, 34] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: ["rgba(153,102,255,0.4)", "rgba(255,99,132,0.4)"], // purple & pink
        borderColor: ["#9966ff", "#ff6384"], // darker outlines
        borderWidth: 2,
        cutout: "80%", // creates the donut ring
        spacing: 10, // small gap between arcs
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#333", font: { size: 13 } },
      },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "20rem" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
