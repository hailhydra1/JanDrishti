import React, {useContext} from "react";
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

const ChartComponent = () => {

  const{Counts} = useContext(JanDrishtiContext)

  const options = {
    responsive: true,
    tension: 0.4,
    plugins: { legend: { position: "top" } },
  };
  
  const labels = [
    "Positive","Neutral","Negative"
  ];

  const data = {
    labels,
    datasets: [{
      label: "Sentiment Breakdown",
      data: [Counts['positive'],Counts['neutral'],Counts['negative']],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }],
  };
  

  return(
    <Line className="w-unit-9xl" options={options} data={data} />
  )

};

export default ChartComponent;
