/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Calltoaction from "./Calltoaction";
import ProximaAiLogo from '../../images/proximasvglogo.svg'

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
            {/* <Link href="/investment">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
              Invest
              </a>
            </Link> */}
            <Link href="/blogs">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2  duration-200 bg-black text-white hover:shadow-md lg:inline-flex lg:w-auto">
              Blogs 
              </a>
            </Link>
            </div>
          <p className="text-xl pt-2">©2023 Proxima Software</p>
          <p className="text-xl">All rights reserved.</p>
         

        </div>
        <div className="relative h-[40px] w-[200px] rounded-md">

        <Image
          priority
          src={ProximaAiLogo}
          height={40}
          width={200}
          alt="Follow us on Twitter"
        />
        </div>
      </div>
    </div>
  );
}

export default Footer;
