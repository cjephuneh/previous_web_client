/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
function ContactList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("email", email);
    formField.append("subject", subject);
    formField.append("message", message);

    await axios({
      method: "post",
      url: "https://murmuring-spire-64412.herokuapp.com/api/onboarding/contact",
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
    <div className="">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold animate-bounce dark:text-gray-200">
              Contact Us
            </h1>
          </div>
          <div className="m-7">
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <label
                  for="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={name}
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
                  email="email"
                  id="email"
                  placeholder="Email"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  for="subject"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={subject}
                  onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  for="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={message}
                  onChange={onChange}
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none"
                  onClick={onSubmit}
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
