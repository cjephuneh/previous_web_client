/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import AtiamImage from "../../images/AtiamPatnership.jpg";
import { SearchIcon } from "@heroicons/react/solid";
import AtiamImage from '../../../images/AtiamPatnership.jpg'  
import AtiamImage2 from '../../../images/AtiamPatnerships2.jpg'

function JoindedOrganizations() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>

      <div className="flex flex-col p-2 md:flex-row md:justify-between md:p-4">
        
        <div className="max-w-7xl space-y-5 px-10 text-center">
          <h1 className="max-w-7xl text-3xl font-serif p-2 md:text-5xl  md:p-3 lg:text-6xl lg:p-4">
          <span className="underline decoration-black decoration-4">
              Our Customers. {" "}
            </span>
            <span className="underline decoration-black decoration-4 pt-4">
              Atiam College
            </span>
          </h1>
          <p>Atiam College is an institution in Komarock offering quality education. Feel free to try out their virtual agent from here.</p>
          <h1>WhatsApp [+254706048504]</h1>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="relative h-[600px] w-[150px] md:h-[400px] md:w-[400px] rounded-md">
            <Image src={AtiamImage} layout="fill" objectFit="cover" className="rounded-md"/>
          </div>
          <div className="relative h-[600px] w-[150px] md:h-[400px] md:w-[400px] rounded-md">
            <Image src={AtiamImage2} layout="fill" objectFit="cover" className="rounded-md"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default JoindedOrganizations;
