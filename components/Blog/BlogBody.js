import React from 'react'
import Image from "next/image";

function BlogBody({title,FirstImage,firstparagraph,SecondImage,secondparagraph,ThirdImage,thirdparagraph,FourthImage,fourthparagraph }) {
  return (
    <div className="bg-gray-50">
     
      <main className="">
      <h1 className="mt-8 text-4xl">
        
        {title} 
        
        </h1>
        <section>
            <div className="flex flex-col md:flex md:flex-row space-x-4 p-4 ">
           
        <div className="relative h-[300px] w-[350px] sm:w-[450px] text-center ml-4 md:w-[500px] lg:w-[600px] rounded-md cursor-pointer shadow-md">
          <Image
            src={FirstImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p>
                {firstparagraph}
            </p>
            </div>

        </section>
        {/* Second section */}
        <section>
        <div className="flex flex-col md:flex md:flex-row space-x-4 p-4 ">
        <div className="relative h-[300px] w-[250px] sm:w-[350px] text-center ml-4 md:w-[400px] lg:w-[500px] rounded-md cursor-pointer shadow-md">
          <Image
            src={SecondImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div> 
        <p>
                {secondparagraph}
            </p>
 

        <div className="relative h-[200px] w-[250px]  rounded-md cursor-pointer shadow-md">
          <Image
            src={ThirdImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        
            </div>
        </section>
        {/* Third Section */}
        <section>
        <div className="flex flex-col md:flex md:flex-row space-x-4 p-4 ">

            <p>
                {thirdparagraph}
            </p>
            <div className="relative h-[300px] w-[300px] sm:w-[300px] text-center ml-4 md:w-[300px] lg:w-[300px] rounded-md cursor-pointer shadow-md">
          <Image
            src={FourthImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p>
                {fourthparagraph}
            </p>
        
            </div>
        </section>

        
      </main>
    </div>
      )
}

export default BlogBody