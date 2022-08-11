/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerImage from "../../images/bannerimage.jpg";
import { SearchIcon } from "@heroicons/react/solid";
import SearchModal from "./Modal/SearchModal";
import KoseSymbol from "../../images/kossesymbol.jpg";
import ReactPlayer from "react-player";

function Banner() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      {isOpened && (
        <div className="bg-white pin">
          <span className="absolute pin-t pin-b pin-r " onClick={toggle}>
            <svg
              className="h-12 w-12 fill-current text-grey hover:text-grey-darkest hover:animate-pulse"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
          <SearchModal />
        </div>
      )}
      <div className="flex flex-col p-2 md:flex-row md:justify-between md:p-4">
        
        <div className="max-w-7xl space-y-5 px-10 text-center">
          <h1 className="max-w-7xl text-3xl font-serif p-2 md:text-5xl  md:p-3 lg:text-6xl lg:p-4">
            <span className="underline decoration-black decoration-4">
              Connecting Organizations | Brands | Groups to their Customers Through
              Interaction{" "} & Inclusivity
            </span>
          </h1>
        </div>
        <div className="">
          {/* <div className="relative h-[70px] w-[150px] md:h-[100px] md:w-[200px] rounded-md">
            <Image src={KoseSymbol} layout="fill" objectFit="cover" />
          </div> */}
          <a
            className="no-underline border-b border-blue text-blue"
            href="/getstarted"
          >
            <button className=" text-black p-4 rounded-md m-2  md:m-6 md:mt-2 hover:animate-pulse md:h-16 border-2 border-black w-52">
              Get Started
            </button>
          </a>
        
        </div>
      </div>
     
      <div className="p-4 md:hidden">
        <ReactPlayer
          url="https://youtu.be/5lXbzzKvA8U"
          width="350px"
          height="400px"
          controls={true}
        />
      </div>
      <div className="p-4 hidden md:block">
        <ReactPlayer
          url="https://youtu.be/5lXbzzKvA8U"
          width="1280"
          height="800px"
          controls={true}
        />
      </div>
    </div>
  );
}

export default Banner;
