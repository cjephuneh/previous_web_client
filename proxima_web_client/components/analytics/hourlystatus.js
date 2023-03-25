/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

function Hourlystatus() {
  

  return (
    <div>
      <h1 className="text-center text-3xl text-blue-900 m-2">
        Engagemnet Hourly Status
      </h1>
      <h4 className="text-center text-xl text-blue-900 m-2">
        {/* Time: {hourlyengagement?.created_at} Analysis */}
      </h4>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            40
          </h1>
          <p className="text-3xl text-blue-900 m-2">Current Interactions</p>
        </div>
        <div className="flex-col pt-2 text-center">
          <h1 className="text-4xl text-black text-center m-2">
            10
          </h1>
          <p className="text-3xl text-blue-900 m-2">Isssues Escalated</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black m-2">
            40
          </h1>
          <p className="text-3xl text-blue-900 m-2">Queries Received</p>
        </div>

        <div className="flex-col pt-2   text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {/* {hourlyclientsatisfaction?.client_satisfaction}% */}
          </h1>
          <p className="text-3xl text-blue-900 m-2">Client Satisfaction</p>
        </div>
        <div className="flex-col pt-2 bg-gray-100  text-center">
          <h1 className="text-4xl text-black text-center m-2">
            {/* {hourlyaverageresponsetime?.average_response_time} min */}
          </h1>
          <p className="text-3xl text-blue-900 m-2">
            Average User response Time
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hourlystatus;
