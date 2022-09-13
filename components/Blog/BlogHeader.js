import React, { useState } from "react";
import Image from "next/image";
import KosseLogo from '../../images/blackstudents.avif'

function BlogHeader({title,headerImage, subtitle }) {

  
  return (
    <div className="bg-gray-50">
     
      <main className="mx-auto divide-y divide-black p-4">
        <section className="scale-105 transform cursor-pointer flex-col transition duration-300 ease-out hover:scale-110">
            <h1 className="text-xl font-bold text-gray-600 text-left p-3 pl-16">
            {title}
            </h1>
        {/* <div className="relative h-[300px] w-[300px] sm:w-[450px] text-center ml-4 md:w-[300px] lg:w-[400px] rounded-md cursor-pointer shadow-md"> */}
        <div className="relative h-[300px] w-[300px] sm:w-[450px] text-center ml-4 md:w-[300px] lg:w-[400px] rounded-md cursor-pointer shadow-md ">

          <Image
            src= {headerImage}
            layout="fill"
            alt=""
            objectFit="cover"
            className="rounded-md"
          />
            <h1 className="text-center absolute bottom-3 right-3 p-1 text-white animate-pulse hover:scale-105 hover">
            {subtitle}
        </h1>

        {/* <p className="text-center absolute bottom-3 right-3 p-1 text-white animate-pulse hover:scale-105 hover">
          {post.description} Post Description
          </p> */}

        </div>
      

        </section>
        
      </main>
    </div>
  );
}

export default BlogHeader;
