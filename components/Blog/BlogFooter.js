import React, { useState } from "react";
import Image from "next/image";
// import AuthorImage from '../../images/customers1.jpeg'


function BlogFooter({AuthorImage,authorname,background }) {

  
  return (
    <div className="bg-gray-50">
     
      <main className="mx-auto ">
        <section className="flex flex-row space-x-4">
            
        <div className="scale-105 transform flex-col transition duration-300 ease-out hover:scale-110 relative h-[100px] w-[100px] text-center ml-4 rounded-md cursor-pointer shadow-md">
          <Image
            src={AuthorImage}
            layout="fill"
            alt=""
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="p-4 max-w-4xl">
        <p className="text-sm font-extralight">
            Blog post by
            <span className="text-gray-600 pl-2">{authorname}</span> -
            Published at 12.39 am
            {/* {new Date(post._createdAt).toLocaleString()} */}
          </p>

        <h1 className="pt-1 text-sm  text-gray-500">
          <i>
            {background} 
          </i>
        </h1>

        </div>

       


        </section>
        
      </main>
    </div>
  );
}

export default BlogFooter;
