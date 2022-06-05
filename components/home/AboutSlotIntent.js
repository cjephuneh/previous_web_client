/* eslint-disable react/no-unescaped-entities */
import React from "react";

function AboutSlotIntent() {
  return (
    <div className="divide-y divide-gray-400">
      <div className=" py-8 w-1/2">
        <h1 className="font-serif text-6xl p-4">
          Understand your{" "}
          <span className="underline decoration-black decoration-4">
            Customers Purpose and place them in Slots
          </span>
        </h1>
      </div>
      {/* */}
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">User Queries:</h1>
        <div className="flex flex-row justify-center space-x-4">
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
              user query: "Will I be able to understand everything about your
              products ?"
            </p>
          </div>
        </div>
      </div>
      {/* */}
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">Purpose:</h1>
        <div className="flex flex-row justify-center space-x-4">
          <div className=" bg-gray-200 w-[105px] h-[80px] shadow-lg">
            <p className="p-4">Purpose: "flight info"</p>
          </div>
          <div className=" bg-gray-200 w-[105px] h-[80px] shadow-lg">
            <p className="p-4">Purpose: "booking"</p>
          </div>
          <div className=" bg-gray-200 w-[105px] h-[80px] shadow-lg">
            <p className="p-4">Purpose: "products"</p>
          </div>
        </div>
      </div>
      {/* */}
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">Slots:</h1>
        <div className="flex flex-row justify-center space-x-4">
          <div className=" bg-gray-200 w-[200px] h-[200px] shadow-lg">
            <h1 className="p-2 text-center">Slots:</h1>
            <ul className="p-2">
              <li className="p-1">- from_city: pittsburgh</li>
              <li className="p-1">- to_city: baltimore</li>
              <li className="p-1">- depart_date: thursday</li>
              <li className="p-1"> - depart_time: morning</li>
            </ul>
          </div>
          <div className=" bg-gray-200 w-[200px] h-[200px] shadow-lg">
            <h1 className="p-2 text-center">Intentions:</h1>
            <ul className="p-2">
              <li className="p-1">booking: hotel</li>
              {/* 
                          <li className="p-1">First Intention</li>
              <li className="p-1">First Intention</li>
              <li className="p-1">First Intention</li>
              */}
            </ul>
          </div>
          <div className=" bg-gray-200 w-[200px] h-[200px] shadow-lg">
            <h1 className="p-2 text-center">Intentions:</h1>
            <ul className="p-2">
              <li className="p-1">First Intention</li>
              {/* 
              <li className="p-1">First Intention</li>
              <li className="p-1">First Intention</li>
              <li className="p-1">First Intention</li>
                            */}
            </ul>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
}

export default AboutSlotIntent;
