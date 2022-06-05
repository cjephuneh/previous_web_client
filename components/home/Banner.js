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
      <div className="flex flex-row justify-between p-4">
        <div className="max-w-7xl space-y-5 px-10 text-center">
          <h1 className="max-w-xl font-serif text-6xl p-4">
            <span className="underline decoration-black decoration-4">
              Proxima Improve's Organization-Customer Interaction{" "}
            </span>
            in every possible aspect.
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="relative h-[100px] w-[200px] rounded-md">
            <Image src={KoseSymbol} layout="fill" objectFit="cover" />
          </div>
          <a
            className="no-underline border-b border-blue text-blue"
            href="/getstarted"
          >
            <button className=" text-black p-4 rounded-md m-6 mt-2 hover:animate-pulse h-16 border-2 border-black w-52">
              Get Started
            </button>
          </a>
          {/*
          
               <div className="border-2 border-black h-14 rounded-sm shadow-md  m-6 mt-2">
            <SearchIcon
              className=" h-12 bg-white text-black rounded-full p-2 cursor-pointer "
              onClick={toggle}
            />
          </div>
          
          */}
        </div>
      </div>

      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] ">
        <Image
          src={BannerImage}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}

export default Banner;
