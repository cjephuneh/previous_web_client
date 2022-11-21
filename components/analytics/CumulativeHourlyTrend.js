import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function CumulativeHourlyTrend() {



  const data = {
    labels: [
      "00.00",
      "01.00",
      "02.00",
      "03.00",
      "04.00",
      "05.00",
      "06.00",
      "07.00",
      "08.00",
      "09.00",
      "10.00",
      "11.00",
      "13.00",
      "14.00",
      "15.00",
      "16.00",
      "17.00",
      "18.00",
      "19.00",
      "20.00",
      "21.00",
      "22.00",
      "23.00",
      "00.00",
    ],
    datasets: [
      {
        label: "Total interactions",
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
    <h2 className="text-blue-900 text-2xl text-center">Hourly Interaction</h2>
    <Line data={data} width={300} height={100} />
  </div>  )
}


export default CumulativeHourlyTrend;
