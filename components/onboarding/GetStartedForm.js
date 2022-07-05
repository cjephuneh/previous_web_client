/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import Typical from "react-typical";

const GetStartedForm = (props) => {
  const router = useRouter();
  //const { isLoggedIn } = useSelector((state) => state.auth);
  //const { message } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    organization_name: "",
    location: "",
    email: "",
    phonenumber: "",
    country: "",
    description: "",
  });

  const {
    organization_name,
    location,
    email,
    phonenumber,
    country,
    description,
  } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    let formField = new FormData();

    formField.append("organization_name", organization_name);
    formField.append("location", location);
    formField.append("email", email);
    formField.append("phonenumber", phonenumber);
    formField.append("country", country);
    formField.append("description", description);

    await axios({
      method: "post",
      url: "https://murmuring-spire-64412.herokuapp.com/api/onboarding/getstarted",
      data: formField,
    })
      .then((response) => {
        //console.log(response.data.token);
        if (response.data.token) {
          console.log(response.data);
        }

        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
        } else if (error.request) {
        }
      });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:m-12">
      <div className="bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl md:text-3xl p-14">
          You can have what you want if you help other people get what they
          want.” “A lot of people have fancy things to say about customer
          service, but it's just a day-in, day-out, ongoing, never-ending,
          persevering, compassionate kind of activity.”
        </h2>

        <h2 className="text-2xl md:text-3xl text-gray-700  p-2 text-center">
          <Typical
            wrapper="b"
            //loop={Infinity}
            steps={[
              "'Your most unhappy customers are your greatest source of learning.' - Bill Gates - Amanda Austin",
              1000,
              "Ubuntu – I am because we are.....",
              1000,
              "Customer service should not be a department. It should be the entire company. - Tony Hsieh - Taylor Chastain",
            ]}
          />
        </h2>
      </div>
      <div className="">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold  dark:text-gray-200">
                Get Started
              </h1>
            </div>
            <div className="m-7">
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <label
                    for="organization_name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Organization Name
                  </label>
                  <input
                    type="organization_name"
                    name="organization_name"
                    id="organization_name"
                    placeholder="Organization Name"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={organization_name}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="Location"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Location
                  </label>
                  <input
                    type="location"
                    name="location"
                    id="location"
                    placeholder="Location"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={location}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="phonenumber"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="Phonenumber"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={phonenumber}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="country"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Country
                  </label>
                  <input
                    type="country"
                    name="country"
                    id="country"
                    placeholder="Country"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={country}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="description"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Organization Descripton
                  </label>
                  <textarea
                    type="description"
                    name="description"
                    id="description"
                    placeholder="Organization Description"
                    className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={description}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none"
                    onClick={onSubmit}
                  >
                    GetStarted
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
