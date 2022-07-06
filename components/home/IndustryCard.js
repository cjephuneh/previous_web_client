/* eslint-disable react/no-unescaped-entities */
import React from "react";

function IndustryCard() {
  return (
    <div className="divide-y divide-gray-400">
      <div className=" py-8 w-3/4 md:w-1/2">
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
          <div className=" bg-gray-200 w-[250px] h-[80px] shadow-lg">
            <p className="p-1">
              user query: "What flights are available from pittsburgh to
              baltimore on thursday morning"
            </p>
          </div>
          <div className=" bg-gray-200 w-[250px] h-[80px] shadow-lg">
            <p className="p-1">
              user query: "Can I be able to book that hotel ?"
            </p>
          </div>
          <div className=" bg-gray-200 w-[250px] h-[80px] shadow-lg">
            <p className="p-1">
              user query: "Will I be able to easily use your product ?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
