/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AtiamImage from '../../images/AtiamPatnership.jpg'  

function CumulativeTrends() {

  return (
    <div className="flex flex-col p-1">
      <div className="sm:object-cover object-center relative h-[200px] w-[300px] sm:h-[300px] sm:w-[400px]  object-cover lg:h-[400px] lg:w-[500px] xl:h-[500px] ">
        <Image
          src={AtiamImage}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
      <div className="flex-col pt-2 bg-gray-100  text-center">
        <h1 className="text-4xl text-black m-2">
          10000
        </h1>
        <p className="text-3xl text-blue-900 m-2">Total Interactions</p>
      </div>
      <div className="flex-col pt-2  text-center">
        <h1 className="text-4xl text-black text-center m-2">
          200
        </h1>
        <p className="text-3xl text-blue-900 m-2">Total Issues escalated</p>
      </div>

      <div className="flex-col pt-2  text-center">
        <h1 className="text-4xl text-black text-center m-2">
          3min
        </h1>
        <p className="text-3xl text-blue-900 m-2">Average Interaction Time</p>
      </div>
    </div>
  );
}

export default CumulativeTrends;
