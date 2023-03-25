import React from "react";
import Typical from "react-typical";

function HowItworks() {
  return (
    <div className=" py-8">
      <h1 className="font-serif text-2xl md:text-3xl p-4 text-opacity-70 text-gray-900">
        At Proxima each virtual agent is built using preexisting Customer
        interaction history. Ths enables personalization of responses and each
        agent to be unique in their own way. Research is paramount and a brief
        nature and interest of your organization is also embeded in the
        interactions. All systems are up and running 24/7 meaning that customers
        are being attended to at 2.00 am. Escalation of more dire queries is
        also built in with the aim of a hybrid structure.
      </h1>
      <div className="p-2 flex flex-col  md:flex-row justify-between">
        <ul className="font-serif text-2xl md:text-3xl p-4">
          <li className="p-2">1. Backround Check</li>
          <li className="p-2">2. Customer Research</li>
          <li className="p-2">3. Modelling Interactions</li>
          <li className="p-2">4. Serving via different Platforms</li>
          <li className="p-2">5. Continous Improvement</li>
        </ul>
        <div className=" md:block bg-gray-200 rounded-md shadow-md p-2">
          <h2 className=" text-xl md:text-3xl text-gray-700  p-2">Improving</h2>
          <h2 className="text-xl md:text-3xl text-gray-700  p-2">
            Improving Customer
          </h2>
          <h2 className="text-xl md:text-3xl text-gray-700  p-2">
           Improving Customer Experience
          </h2>
          <h2 className="text-xl md:text-3xl text-gray-700  p-2">
           Improving Customer Experience | Satisfaction
          </h2>
         
          <h2 className="text-xl md:text-3xl p-2 text-center">
            <Typical
              wrapper="b"
              loop={Infinity}
              steps={[
                "Customer Safisfaction at it's core.",
                1000,
                "PROXIMA",
                1000,
              ]}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HowItworks;
