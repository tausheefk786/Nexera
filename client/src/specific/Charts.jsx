import {
  Chart as ChartJS,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { getLast7Days } from "../lib/features";
ChartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

import moment from "moment";
import { aquamelime, black } from "../constants/color";
import { purple } from "@mui/material/colors";

const labels = getLast7Days();


const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [1, 2, 34],
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={data} options={LineChartOptions} />;
};

const DoughnutChart = ({value =[],labels=[]}) => {
    const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats vs Group Chats",
        fill: true,
        backgroundColor: [aquamelime ,purple],
        borderColor: [black ,purple],
      },
    ],
  };

  return <DoughnutChart data = {data} />;
};

export { LineChart, DoughnutChart };
