import React from 'react'
import Image from "next/image";
import PendoImage from '../../images/p agent v1 (1).png'
import ProximaAiLogo from '../../images/proximasvglogo.svg'

function Predictiveanalytics() {
  return (
<div>
<div className="relative h-[40px] w-[200px] rounded-md">

<Image
  priority
  src={ProximaAiLogo}
  height={40}
  width={200}
  alt="Follow us on Twitter"
/>
</div>

<div className='flex flex-row justify-between p-6'>
        <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
          </div>
          <div className='w-[350px] pt-12'>
            <h1 className='text-gray-600 text-xl'>IVA - Intelligent Virtual Agent</h1>
            <p className="p-4 txt-xl">
            Improving customer interaction is at the core of every organization's
          daily activities. This is easily simplified by our virtual
          conversational agents that are built around understanding customers
          intents and queries from different conversational interfaces.
            </p>
          </div>
          <div className='w-[350px] pt-12'>
            <h1 className='text-gray-600 text-xl'>IVA - Intelligent Virtual Agent</h1>
            <p className="p-4 txt-xl">
            Improving customer interaction is at the core of every organization's
          daily activities. This is easily simplified by our virtual
          conversational agents that are built around understanding customers
          intents and queries from different conversational interfaces.
            </p>
          </div>
    </div>
    <div className='flex flex-row justify-between p-6'>
        <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
          </div>
          <div className='w-[350px] pt-12'>
            <h1 className='text-gray-600 text-xl'>IVA - Intelligent Virtual Agent</h1>
            <p className="p-4 txt-xl">
            Improving customer interaction is at the core of every organization's
          daily activities. This is easily simplified by our virtual
          conversational agents that are built around understanding customers
          intents and queries from different conversational interfaces.
            </p>
          </div>
          <div className="relative h-[70px] w-[150px] md:h-[300px] md:w-[200px] rounded-md">
            <Image src={PendoImage} layout="fill" objectFit="cover" />
          </div>
    </div>
    <div className="flex flex-row justify-between">
          {/* <div className="relative h-[70px] w-[150px] md:h-[100px] md:w-[200px] rounded-md">
            <Image src={KoseSymbol} layout="fill" objectFit="cover" />
          </div> */}
          <a
            className="no-underline border-b border-blue text-blue mx-auto"
            href="/getstarted"
          >
            <button className=" text-black p-4 rounded-md m-2  md:m-6 md:mt-2 hover:animate-pulse md:h-16 border-2 border-black w-52 ">
              Get Started
            </button>
          </a>
          <a
            className="no-underline border-b border-blue text-blue mx-auto"
            href="/getstarted"
          >
            <button className=" text-black p-4 rounded-md m-2  md:m-6 md:mt-2 hover:animate-pulse md:h-16 border-2 border-black w-52 ">
              Products
            </button>
          </a>
          <a
            className="no-underline border-b border-blue text-blue mx-auto"
            href="/getstarted"
          >
            <button className=" text-black p-4 rounded-md m-2  md:m-6 md:mt-2 hover:animate-pulse md:h-16 border-2 border-black w-52 ">
              Products
            </button>
          </a>
        
        </div>
</div>
  )
}

export default Predictiveanalytics