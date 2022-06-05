/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/bannerimage.jpg";
function ChatbotBanner() {
  return (
    <div className=" scrollbar-hide grid grid-cols-2 overflow-hidden pt-8 shadow-sm ">
      <div className="relative h-[400px] w-[600px] rounded-md cursor-pointer shadow-md">
        <Image src={BannerImage} layout="fill" objectFit="cover" />
      </div>
      <div className="">
        <h1 className="p-3 text-4xl text-gray-700">Virtual Agents</h1>
        <p className="p-4 text-2xl">
          Every agent is basically built to suit the needs of a specific group
          of customers based on the history of their interaction with the parent
          organizations or groups. Conversation experts work around having
          smooth flowing conversations that are abit dynamic with the responses
          given by our agents. Two different people could receive different
          answers to the same question but all within context.
        </p>
      </div>
    </div>
  );
}

export default ChatbotBanner;
