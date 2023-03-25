/* eslint-disable react/no-unescaped-entities */
import React from "react";

function ProductIntro() {
  return (
    <div className=" scrollbar-hide flex flex-col md:flex-row overflow-hidden pt-8">
      <div className="">
        <h1 className="p-1 md:p-3 text-3xl md:text-6xl text-gray-700 hover:animate-pulse cursor-pointer">
          Our Products
        </h1>
        <p className="p-4 txt-xl md:text-2xl">
          Improving customer interaction is at the core of every organization's
          daily activities. This is easily simplified by our virtual
          conversational agents that are built around understanding customers
          intents and queries from different conversational interfaces.
        </p>
      </div>
      <div className="">
        <p className="p-2 text-2xl md:p-4 md:text-3xl animate-pulse md:hover:animate-pulse">
          Proxima leverages on modern practices to not only improve interaction,
          but to also simplify and smoothen it.
        </p>
      </div>
    </div>
  );
}

export default ProductIntro;
