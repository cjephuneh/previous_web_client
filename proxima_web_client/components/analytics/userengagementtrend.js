import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";

import Chart from "chart.js/auto";

function Userengagementtrend() {

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "september",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "User Queries",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 57, 65, 59, 80, 81, 56],
      },
    ],
  };




  return (
    <div>
    <h2 className="text-blue-900 text-2xl text-center">Engagement Frequency</h2>
    <Line data={data} width={300} height={100} />
  </div>  )
}


export default Userengagementtrend;
