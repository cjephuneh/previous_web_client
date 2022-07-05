/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/chatbot.jpg";
function ChatbotBanner() {
  return (
    <div className=" scrollbar-hide grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-8 shadow-sm ">
      <div className="relative h-[400px] w-[350px] sm:w-[400px] ml-4 md:ml-0 md:w-[600px] rounded-md cursor-pointer shadow-md">
        <Image
          src={BannerImage}
          layout="fill"
          objectFit="fill"
          className="rounded-md"
        />
      </div>
      <div className="">
        <h1 className="p-2 text-3xl md:p-3 md:text-4xl text-gray-700">
          Virtual Agents
        </h1>
        <p className="p-4 text-xl  md:text-2xl">
          Every agent is basically built to suit the needs of a specific group
          of customers based on the history of their interaction with the parent
          organizations or groups (But not limited to). Conversation experts
          work around streamlining objectives to facilitate conversations that
          are dynamic in regard to responses given by our agents. Two different
          people could receive different responses to the same query but all
          within context.
        </p>
      </div>
    </div>
  );
}

export default ChatbotBanner;
