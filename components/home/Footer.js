/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import KoseSymbol from "../../images/kosselogo.png";
import Calltoaction from "./Calltoaction";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto divide-y divide-black">
      <section className="py-6">
        <Calltoaction />
      </section>
      <div className="flex flex-column items-center justify-between py-6">
        <div>
        <div className="hidden items-center space-x-5 md:inline-flex">
            {/* <Link href="/getstarted">
            <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
                Get Started
              </a>
            </Link> */}
            <Link href="/internship">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
              Internship
              </a>
            </Link>
            <Link href="/investment">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
              Invest
              </a>
            </Link>
            <Link href="/blogs">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
              Blogs 
              </a>
            </Link>
            </div>
          <p className="text-xl pt-2">©2022 Proxima Software</p>
          <p className="text-xl">All rights reserved.</p>
         

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
