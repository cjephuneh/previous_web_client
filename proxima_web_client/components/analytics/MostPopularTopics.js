import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";


function MostPopularTopics() {

  
  const data = {
    labels: ["Sales", "Account Balance", "Opening Hours", "Refund", "Promotions"],
    datasets: [
      {
        label: "Channels Engagement Pattern",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

 

  return (
    <div className="pt-4 h-[400px] w-[1000px] p-4">
      <h2 className="text-3xl text-center m-2 text-blue-900">
      Conversation Points
      </h2>
      <Bar
        data={data}
        width={400}
        height={100}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}


export default MostPopularTopics;
