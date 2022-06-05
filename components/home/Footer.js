/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import KoseSymbol from "../../images/kosselogo.png";

function Footer() {
  return (
    <div className=" pt-20 p-5 md:px-10 w-3/4 mx-auto rounded-md shadow-lg border-1 border-blue:100">
      <div className="flex flex-row justify-center space-x-12">
        <Link href="/getstarted">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black  items-center justify-center hover:bg-gray-400 hover:text-white hover:shadow-md">
            Get Started
          </a>
        </Link>
        <Link href="/pricing">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black  items-center justify-center hover:bg-gray-400 hover:text-white hover:shadow-md">
            Pricing
          </a>
        </Link>

        <Link href="/about">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black  items-center justify-center hover:bg-gray-400 hover:text-white hover:shadow-md">
            About
          </a>
        </Link>
      </div>
      <div className="flex flex-column items-center justify-between py-6">
        <div>
          <p className="text-xl">
            ©2022 Proxima Software. All rights reserved.
          </p>
        </div>
        <div className="relative h-[100px] w-[200px] rounded-md">
          <Image
            src={KoseSymbol}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
