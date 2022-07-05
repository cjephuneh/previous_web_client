/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import ContactList from "./Modal/ContactModal";
import WaitList from "./Modal/WaitList";

function Calltoaction() {
  const [isOpened, setIsOpened] = useState(false);
  const [openContact, setopenContact] = useState(false);

  function toggle() {
    setIsOpened((isOpened) => !isOpened);
  }

  function toggleOpenContact() {
    setopenContact((openContact) => !openContact);
  }
  return (
    <div>
      {openContact && (
        <>
          <span className="absolute pin-t pin-b pin-r p-4" onClick={toggle}>
            <svg
              className="h-12 w-12 fill-current text-grey hover:text-grey-darkest hover:animate-pulse"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
          <WaitList />
        </>
      )}
      {isOpened && (
        <>
          <span
            className="absolute pin-t pin-b pin-r p-4"
            onClick={toggleOpenContact}
          >
            <svg
              className="h-12 w-12 fill-current text-grey hover:text-grey-darkest hover:animate-pulse"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
          <ContactList />
        </>
      )}
      <div className="flex flex-col items-center md:flex-row justify-between">
        <a
          className="no-underline border-b border-blue text-blue"
          href="/getstarted/"
        >
          <button className=" text-black p-4 rounded-md m-6 mt-2 hover:animate-pulse h-16 border-2 border-black w-52">
            Get Started
          </button>
        </a>
        <button
          className=" text-black p-4 rounded-md m-6 mt-2 hover:animate-pulse h-16 border-2 border-black w-52"
          onClick={toggle}
        >
          Contact us
        </button>
        <button
          className=" text-black p-4 rounded-md m-6 mt-2 hover:animate-pulse h-16 border-2 border-black w-52"
          onClick={toggleOpenContact}
        >
          Wait List
        </button>
        <a
          className="no-underline border-b border-blue text-blue"
          href="/learnmore/"
        >
          <button className=" text-black p-4 rounded-md m-6 mt-2 hover:animate-pulse h-16 border-2 border-black w-52">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default Calltoaction;
