/* eslint-disable react/no-unescaped-entities */
import React from "react";

function IndustryCard() {
  return (
    <div className="divide-y divide-gray-400">
      <div className=" py-8 w-3/4 ">
        <h1 className="font-serif text-4xl md:text-6xl p-4">
          Building for all{" "}
          <span className="underline decoration-black decoration-4">
            Industries
          </span>
        </h1>
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
