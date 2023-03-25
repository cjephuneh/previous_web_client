/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
function WaitList() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const { first_name, last_name, email } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    let formField = new FormData();

    formField.append("first_name", first_name);
    formField.append("last_name", last_name);
    formField.append("email", email);

    await axios({
      method: "post",
      url: "https://murmuring-spire-64412.herokuapp.com/api/onboarding/waitlist",
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
    <div className="">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold animate-bounce dark:text-gray-200">
              Join wait List
            </h1>
          </div>
          <div className="m-7">
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <label
                  for="first_name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  First Name
                </label>
                <input
                  type="first_name"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={first_name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  for="last_name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Last Name
                </label>
                <input
                  type="last_name"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={last_name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none"
                  onClick={onSubmit}
                >
                  WaitList
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitList;
