import React, { useState } from "react";
import Footer from "../components/home/Footer";
import GetStartedForm from "../components/onboarding/GetStartedForm";
import Patners from "../components/onboarding/Patners";
import Header from "../components/ui/Header";
import { ChatIcon } from "@heroicons/react/solid";
import ChatbotCard from "../components/chatbot/ChatbotCard";

function Getstarted() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="bg-gray-50">
      <Header />

      <div className="fixed bottom-0 right-0 hover:animate-pulse">
        <ChatIcon
          className="h-16 bg-white text-gray-500 rounded-full p-2 cursor-pointer "
          onClick={toggle}
        />
      </div>

      {isOpened && (
        <section className="fixed pin bottom-12 right-0 overflow-auto z-50">
          <ChatbotCard />
        </section>
      )}
      <main className="divide-y divide-black">
        <section className="m-24">
          <GetStartedForm />
        </section>
        {/*
              <section className="max-w-7xl mx-auto ">
          <Patners />
        </section> */}

        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
export default Getstarted;
