import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { getLast7Days } from "../lib/features";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const labels = getLast7Days();

export const LineChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Users Joined",
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: true,
        backgroundColor: "rgba(53,162,235,0.3)",
        borderColor: "rgba(53,162,235,1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false } },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: ["#4caf50", "#ff9800"],
        borderWidth: 5,
        offset: 20,
      },
    ],
  };

  return (
    <div style={{ height: "250px", width: "250px" }}>
      <Doughnut data={data} />
    </div>
  );
};
