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
          <p className="text-xl">©2022 Proxima Software</p>
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
