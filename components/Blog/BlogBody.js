import React, { useState } from "react";
import Footer from "../components/home/Footer";
import Header from "../components/ui/Header";
import Head from "next/head";
import Image from "next/image";


function BlogBody() {

  
  return (
    <div className="bg-gray-50">
     
      <main className="">
        <section>
            <div className="flex flex-row space-x-4">
            <h1>
                {firstparagraph}
            </h1>
        <div className="relative h-[300px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[600px] rounded-md cursor-pointer shadow-md">
          <Image
            src={FirstImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
            </div>

        </section>
        {/*  */}
        <section>
            <div className="flex flex-row space-x-4">
            <div className="relative h-[300px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[600px] rounded-md cursor-pointer shadow-md">
          <Image
            src={SecondImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
            <h1>
                {secondparagraph}
            </h1>
            <div className="relative h-[300px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[600px] rounded-md cursor-pointer shadow-md">
          <Image
            src={SecondImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        
            </div>
        </section>
        {/*  */}
        <section>
            <div className="flex flex-row space-x-4">

            <h1>
                {thirdparagraph}
            </h1>
            <div className="relative h-[300px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[600px] rounded-md cursor-pointer shadow-md">
          <Image
            src={SecondImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h1>
            {fourthparagraph}
            </h1>
        
            </div>
        </section>

        
      </main>
    </div>
  );
}

export default BlogBody;
