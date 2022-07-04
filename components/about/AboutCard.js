/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/DSC_5784.jpg";

function AboutCard() {
  return (
    <div>
      <div className=" scrollbar-hide mt-10 grid grid-cols-3 overflow-hidden rounded-lg bg-gray-50 shadow-sm">
        <div className="">
          <h1 className="p-3 text-4xl text-gray-900 text-center">PROXIMA</h1>
          <p className="p-4">
            Proxima is a Kenyan based organization building virtual agents for
            organizations to serve their customers. Our Agents are built using
            AI and we hope to improve customer success using our customer
            service agents and speedup conversion of prospects
          </p>
          <h1 className="p-3 text-xl text-gray-900 text-center">
            Mission Statement
          </h1>
          <p className="p-4">
            Foster strong bonds beetween organizations and their customers
            through a clear and coincise communication loop.
          </p>
          <h1 className="p-3 text-xl text-gray-900 text-center">Vision</h1>
          <p className="p-4">
            Make sure that organizations achieve customer satisfaction though
            efficient interactions.
          </p>
        </div>
        <div className="m-28 space-y-1">
          <h3>Branch: JUJA</h3>
          <h6>PO BOX: Nairobi 3505-100</h6>
          <h6>Nairobi - Kenya</h6>
          <h6>(+254)793681840</h6>
        </div>
        <div className="relative h-[400px] w-[400px] rounded-md">
          <Image src={BannerImage} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
