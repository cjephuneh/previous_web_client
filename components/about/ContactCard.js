/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BannerImage from "../../images/bannerimage.jpg";
import Image from "next/image";
import WhatsAppLogo from "../../images/whatsapplogo.jpeg";
import InstagramLogo from "../../images/instagramlogo.jpeg";
import facebookLogo from "../../images/facebook.jpeg";
import TwitterLogo from "../../images/twitterlogo.png";

function ContactCard() {
  return (
    <div>
      <div className=" py-8">
        <h1 className="font-serif text-6xl p-4">REAch Us THRough...</h1>
      </div>
      <div className="flex flex-row space-x-4 justify-center">
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-20 w-20">
            <a
              className="no-underline border-b border-blue text-blue"
              href="/signin/"
            >
              <Image
                src={WhatsAppLogo}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-20 w-20">
            <a
              className="no-underline border-b border-blue text-blue"
              href="https://www.instagram.com/proxima_agents/"
            >
              <Image
                src={InstagramLogo}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-20 w-20">
            <a
              className="no-underline border-b border-blue text-blue"
              href="https://www.facebook.com/Proxima-104109735661633"
            >
              <Image
                src={facebookLogo}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
          <div className="relative h-20 w-20">
            <a
              className="no-underline border-b border-blue text-blue"
              href="https://twitter.com/home"
            >
              <Image
                src={TwitterLogo}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
