import React from 'react'
import StudentsImage from '../../images/students.jpg'
import PendoImage from '../../images/p agent v1 (1).png'
import Image from "next/image";
import ChatbotCard from '../chatbot/ChatbotCard';

function DemoBanner() {
  return (
    <div className=''>
        <section>

        <h1 className='text-center text-xl'>Proxima School</h1>

        <div className='flex flex-row py-4'>
          <div>
          <div className="relative h-[250px] w-[250px] ml-4 rounded-md cursor-pointer shadow-md">
          <Image
            src={StudentsImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
            
          </div>

        <div>
        <p className='text-gray-600 p-2 pl-4'>Proxima School is an imaginative school located in Juja, "affiliated with Proxima". Proxima is a school that values quality education
        and uplifting students to become leaders. Proxima School is an imaginative school located in Juja, "affiliated with Proxima". Proxima is a school that values quality education
        and uplifting students to become leaders. Proxima School is an imaginative school located in Juja, "affiliated with Proxima". Proxima is a school that values quality education
        and uplifting students to become leaders. Proxima School is an imaginative school located in Juja, "affiliated with Proxima". Proxima is a school that values quality education
        and uplifting students to become leaders.
        </p>
        <p className='text-gray-400 p-2 pl-4 text-center'> <i>Feel free to inquire about Proxima below!</i></p>
        </div>
        </div>

        <div className='text-center'>
        <h1 className='text-lg text-gray-700'><i>Try out our demo. Ask about Proxima School</i></h1>
        <h1 className='text-lg text-gray-400 animate-bounce pt-2'>Talk to Pendo !!</h1>
        </div>
        </section>
        
<section className='flex flex-row justify-center space-x-16 pt-4'>
<div className="scale-105 transform flex-col transition duration-300 ease-out hover:scale-110 relative h-[160px] w-[160px] text-center ml-4 rounded-md cursor-pointer shadow-md">
          <Image
            src={PendoImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
                      <h1 className="text-center absolute bottom-3 right-1 text-gray-500  animate-pulse hover:scale-105 hover">
            Pendo
        </h1>
        </div>
        <div>
        <ChatbotCard />

        </div>

</section>

    </div>
  )
}

export default DemoBanner