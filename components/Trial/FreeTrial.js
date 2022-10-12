/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/chatbot.jpg";

function FreeTrial() {
  return (
    <div className=" scrollbar-hide grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-8 shadow-sm ">
        <div className="">
          <span className="underline decoration-black decoration-4 font-serif text-7xl">
        "Two months free trial."
          </span>
          {" "}
          <span className=" decoration-black decoration-4 font-serif text-3xl">
          For a limited number of organizations, schools, brands, communities and different entities.
          </span>
          {/* Free trial signup */}
          <div className="pt-4 text-center">
          <a
            className="no-underline border-b border-blue text-blue animate-bounce"
            href="/freetrial"
          >
            <button className="animate-bounce animate-pulse text-black p-4 rounded-md m-2  md:m-6 md:mt-2 hover:animate-pulse md:h-16 border-2 border-black w-52">
             Enroll Free Trial !!
            </button>
          </a>

          </div>
      </div>
      <div className="relative h-[400px] w-[350px] sm:w-[400px] ml-4 md:ml-0 md:w-[600px] rounded-md cursor-pointer shadow-md">
        <Image
          src={BannerImage}
          layout="fill"
          objectFit="fill"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default FreeTrial