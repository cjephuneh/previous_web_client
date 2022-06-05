/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/bannerimage.jpg";
import webSiteImage from "../../images/websiteimage.webp";
import WhatsAppLogo from "../../images/whatsapplogo.jpeg";
import InstagramLogo from "../../images/instagramlogo.jpeg";
import facebookLogo from "../../images/facebook.jpeg";
function DifferentPlatforms() {
  return (
    <div>
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">
          WHere we serve our agents...
        </h1>
      </div>
      <div className="grid grid-cols-4">
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={webSiteImage}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-2xl mt-3 ">Personal Website</h3>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={WhatsAppLogo}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-2xl mt-3 ">WhatsApp</h3>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={InstagramLogo}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-2xl mt-3 ">Instagram</h3>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-40 w-40">
            <Image
              src={facebookLogo}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-2xl mt-3 ">Facebook</h3>
        </div>
      </div>
    </div>
  );
}

export default DifferentPlatforms;
