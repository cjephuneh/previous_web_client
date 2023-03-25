/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PendoImage from '../../images/p agent v1 (1).png' 
import Modeltwo from '../../images/Modeltwo.jpg'  
import Modelthree from '../../images/Modelthree.jpg'  

import Image from "next/image";

function Modelscard() {
  return (
    <div className="">
      <div className=" py-8 w-3/4 ">
        <h1 className="font-serif text-4xl md:text-6xl p-4">
          Happy Customers Happy Life{" "}
        </h1>
      </div>
      <div className="flex flex-row space-x-6 justify-center">
      <div className="relative h-[70px] w-[150px] md:h-[350px] md:w-[350px] rounded-md shadow-md">
            <Image src={Modeltwo} layout="fill" objectFit="cover" alt=""/>
      </div>
      <div className="relative h-[70px] w-[150px] md:h-[350px] md:w-[350px] rounded-md shadow-md">
            <Image src={Modelthree} layout="fill" objectFit="cover" alt=""/>
      </div>
      </div>
    </div>
  );
}

export default Modelscard;
