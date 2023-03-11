"use client";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [showEmailError, setShowEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, phone);
    // const res = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         email,
    //         password,
    //         phone,
    //     }),
    // });
    // const data = await res.json();
    if (false) {
      toast.error("Sorry Something went wrong!");
      return;
    }

    toast.success("Successfully Registered!");
  };

  return (
    <section className="text-gray-600 lg:mb-40 mb-72 my-4  px-16 sm:pt-2">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" px-5 h-screen m-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 sm:pt-12">
          <h1 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
            Setting <span className="text-blue-500">up your Coupons.</span>
          </h1>
       

          <p className="leading-relaxed mt-4 dark:text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "Get Your Marchant Registration Done",
                  "Keep a positive attitude",
                  "Take necessary precautions and get regular checkups.",
                  "Get enough sleep",
                  "Eat a well-balanced diet",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-md font-medium title-font mb-5">
            Merchant Registration Page
          </h2>
          <p style={{ color: "red" }}>{message}</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              required
              className="peer relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 invalid:text-pink-600 focus:z-10 focus:border-indigo-500 focus:outline-none  focus:ring-indigo-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:text-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setShowEmailError(false);
              }}
              onBlur={(_) => setShowEmailError(true)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              min="50"
              max="250"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Enter Your Phone Number
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              pattern="^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
