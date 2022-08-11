import React, { useState } from "react";
import Image from "next/image";


function BlogFooter() {

  
  return (
    <div className="bg-gray-50">
     
      <main className="mx-auto ">
        <section>
            <h1>
                {authorname}
            </h1>
        <div className="relative h-[200px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[800px] rounded-md cursor-pointer shadow-md">
          <Image
            src={AuthorImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h1>
            {background}
        </h1>

        </section>
        
      </main>
    </div>
  );
}

export default BlogFooter;
