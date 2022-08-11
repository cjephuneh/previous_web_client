import React, { useState } from "react";
import Footer from "../components/home/Footer";
import Header from "../components/ui/Header";
import Head from "next/head";
import Image from "next/image";


function BlogHeader() {

  
  return (
    <div className="bg-gray-50">
     
      <main className="mx-auto divide-y divide-black">
        <section>
            <h1>
                {title}
            </h1>
        <div className="relative h-[200px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[800px] rounded-md cursor-pointer shadow-md">
          <Image
            src={headerImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h1>
            {subtitle}
        </h1>

        </section>
        
      </main>
    </div>
  );
}

export default BlogHeader;
