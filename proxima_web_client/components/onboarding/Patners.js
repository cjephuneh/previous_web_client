/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/bannerimage.jpg";
function Patners() {
  return (
    <div className="divide-y divide-black">
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">Estemeed PATNERs..</h1>
      </div>
      <div className="grid grid-cols-5 divide-x divide-black">
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={BannerImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={BannerImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={BannerImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={BannerImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={BannerImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patners;
