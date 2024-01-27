import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { JanDrishtiContext } from "../../context/Context";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  tension: 0.4,
  plugins: { legend: { position: "top" } },
};

const labels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
];

const data = {
  labels,
  datasets: [{
    label: "Expenses",
    data: [15000, 10000, 14000, 11000, 16000, 12000, 8000, 14000, 11000, 12000, 23000, 12000],
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  }],
};

const ChartComponent = () => <Line className="w-unit-9xl" options={options} data={data} />;

export default ChartComponent;
