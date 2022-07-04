/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/customers1.jpeg";

function LearnMoreCard() {
  return (
    <div className="divide-y divide-black">
      <div className="  overflow-hidden pt-8 shadow-sm py-6 ">
        <video></video>
      </div>
      <div className=" scrollbar-hide grid grid-cols-2 overflow-hidden pt-8 shadow-sm py-6">
        <div className="relative h-[400px] w-[600px] rounded-md cursor-pointer shadow-md">
          <Image src={BannerImage} layout="fill" objectFit="cover" />
        </div>
        <div className="">
          <h1 className="p-3 text-8xl text-gray-700">What we want ?</h1>
          <p className="p-4 text-2xl">
            We aim to help organizatiosn buid better customer relations. this is
            mainly through interactions which is really best when it is
            personalized. Customer needs exceed the current quota of interaction
            which organizations provide. This is mainly because of fewer agents.
            a hybrid model is far much better though. Agents can do tideous
            tasks and be at the beck and call of every customer, ready to serve
            their needs. That is what we aim to build for all businesses. That
            is our goal and vision. It spans the whole organizatins objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearnMoreCard;
