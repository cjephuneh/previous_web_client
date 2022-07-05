/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import KosseLogo from "../../images/kosselogo.png";
import Image from "next/image";
import { useState } from "react";
import menuIcon from "../../images/menuicon.png";

function Header() {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <header className="flex flex-col md:w-full xl:flex xl:flex-row sticky xl:w-3/4 top-5 z-50 space-x-20  justify-start  p-5 md:px-10 md:mx-auto bg-gray-100">
      <div className="mx-auto flex items-center space-x-5">
        <Link href="/">
          <div className="relative h-[40px] w-[200px] rounded-md">
            <Image
              src={KosseLogo}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </Link>

        <nav>
          <div className="hidden items-center space-x-5 md:inline-flex">
            <Link href="/getstarted">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                Get Started
              </a>
            </Link>
            <Link href="/learnmore">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                Learn More
              </a>
            </Link>

            <Link href="/about">
              <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                About
              </a>
            </Link>
          </div>

          <div className="sm:hidden relative">
            <div>
              <button
                className="relative h-[50px] w-[50px] rounded-md "
                onClick={() => setShowmenu(!showMenu)}
              >
                <Image
                  src={menuIcon}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </button>
            </div>
            {showMenu && (
              <div className="flex flex-col space-y-2 absolute top-10 righ-0 z-50 bg-gray-100 shadow-xl rounded-md p-2">
                <Link href="/getstarted">
                  <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                    Get Started
                  </a>
                </Link>
                <Link href="/learnmore">
                  <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                    Learn More
                  </a>
                </Link>

                <Link href="/about">
                  <a className="transition-color w-full items-center justify-center rounded-md px-3 py-2 text-black duration-200 hover:bg-gray-400 hover:text-white hover:shadow-md lg:inline-flex lg:w-auto">
                    About
                  </a>
                </Link>
                <div />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
