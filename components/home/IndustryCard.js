/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PendoImage from '../../images/p agent v1 (1).png'
import Image from "next/image";

function IndustryCard() {
  return (
    <div className="">
      <div className=" py-8 w-3/4 ">
        <h1 className="font-serif text-4xl md:text-6xl p-4">
          Building for all{" "}
          <span className="underline decoration-black decoration-4">
            Industries
          </span>
        </h1>
      </div>
      <div className="flex flex-row space-x-6 justify-center">
      <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md shadow-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md shadow-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md shadow-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md shadow-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
      </div>
      </div>
      <div className=" py-8">
        <h1 className="font-serif text-4xl md:text-6xl p-4">Diversity</h1>
        <div className="flex flex-col p-2 space-y-4 items-center md:flex-row md:justify-center md:space-x-4">
          <div className="  w-[250px] h-[80px] shadow-lg rounded-md">
            <p className="p-2">
              Diversity means interacting With your customers efficiently.
            </p>
          </div>
          <div className="  w-[250px] h-[80px] shadow-lg rounded-md">
            <p className="p-2">
              It also means interacting with your suppliers and other key
              players.
            </p>
          </div>
          <div className="  w-[250px] h-[80px] shadow-lg rounded-md">
            <p className="p-2">Above all, inclusivity of all diverse groups.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
