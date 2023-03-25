/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import BannerImage from "../../images/chatbot.jpg";
import Image from "next/image";
import Typical from "react-typical";

const InternShipForm = (props) => {
  const router = useRouter();
  //const { isLoggedIn } = useSelector((state) => state.auth);
  //const { message } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    names: "",
    field: "",
    email: "",
    phonenumber: "",
    country: "",
    bio: "",
  });

  const {
    names,
    field,
    email,
    phonenumber,
    country,
    bio,
  } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    let formField = new FormData();

    formField.append("names", names);
    formField.append("field", field);
    formField.append("email", email);
    formField.append("phonenumber", phonenumber);
    formField.append("country", country);
    formField.append("bio", bio);

    await axios({
      method: "post",
      url: "https://murmuring-spire-64412.herokuapp.com/api/internship/register",
      data: formField,
    })
      .then((response) => {
        //console.log(response.data.token);
        setFormData("");
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

    <div className="flex flex-col md:m-24">
    <div className=" scrollbar-hide grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-8 shadow-sm ">
      <div className="relative h-[400px] w-[350px] sm:w-[400px] ml-4 md:ml-0 md:w-[600px] rounded-md cursor-pointer shadow-md">
        <Image
          src={BannerImage}
          alt=""
          layout="fill"
          objectFit="fill"
          className="rounded-md"
        />
      </div>
      <div className="">
        <h1 className="p-2 text-3xl md:p-3 md:text-4xl text-gray-700">
          How they work ?
        </h1>
        <p className="p-4 text-xl  md:text-2xl">
          Every virtual agent is basically built to suit the needs of a specific group
          of customers based on the history of their interaction with the parent
          organizations or groups (But not limited to). Conversation experts
          work around streamlining objectives to facilitate conversations that
          are dynamic in regard to responses given by virtual agents. Two different
          people could receive different responses to the same query but all
          within context.
        </p>
      </div>
    </div>
      <div className="">
        <div className="container md:mx-auto">
          <div className="md:max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semiboldtext-gray-900">
                InternShip
              </h1>
            </div>
            <div className="md:m-7">
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  {/* <label
                    for="names"
                    className="block mb-2 text-sm text-gray-900 "
                  >
                    Organization Name
                  </label> */}
                  <input
                    type="names"
                    name="names"
                    id="names"
                    placeholder="Name"
                    className="py-2 p-2 border bg-gray-100 border-gray-600 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={names}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  {/* <label
                    for="field"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    field
                  </label> */}
                  <input
                    type="field"
                    name="field"
                    id="field"
                    placeholder="Specialization"
                    className="py-2 p-2 border bg-gray-100 border-gray-600 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={field}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  {/* <label
                    for="phonenumber"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Phone Number
                  </label> */}
                  <input
                    type="phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="Phonenumber"
                    className="py-2 p-2 border bg-gray-100 border-gray-600 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={phonenumber}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  {/* <label
                    for="country"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Country
                  </label> */}
                  <input
                    type="country"
                    name="country"
                    id="country"
                    placeholder="email"
                    className="py-2 p-2 border bg-gray-100 border-gray-600 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={country}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-6">
                  {/* <label
                    for="bio"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Brief Descripton
                  </label> */}
                  <textarea
                    type="bio"
                    name="bio"
                    id="bio"
                    placeholder="Brief Description"
                    className="py-2 p-2 border bg-gray-100 border-gray-600 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={bio}
                    onChange={onChange}
                  />
                </div>
                {/*  */}
                <div className="mb-6">
                  {/* <label
                    for="bio"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Brief Descripton
                  </label> */}

                </div>
                {/* Uploading a file */}
                        <div class="flex justify-center text-center">
            <div className="max-w-4xl rounded-lg shadow-xl bg-gray-50">
                <div className="m-4">
                    <label className="inline-block mb-2 text-gray-500 text-center">Upload Resume</label>
                    <div className="flex items-center justify-center w-full">
                        <label
                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Attach a file</p>
                            </div>
                            <input type="file" className="opacity-0" />
                        </label>
                    </div>
                </div>
                {/* <div className="flex justify-center p-2">
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Create</button>
                </div> */}
            </div>
        </div> 

                {/* End of uploading a file */}

                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black hover:animate-pulse rounded-lg focus:bg-indigo-600 focus:outline-none"
                    onClick={onSubmit}
                  >
                    Submit
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

export default InternShipForm;
