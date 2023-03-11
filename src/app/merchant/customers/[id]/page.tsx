import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdVerified } from "react-icons/md";

type Props = {};

const UserProfile = ({params}) => {
  const bid = params['id']
  return (
    <div>
      <div className="flex flex-col items-center ">
        <img
          src={"https://api.multiavatar.com/demo"+bid+".svg"}
          className="w-40 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl dark:text-white">Demo{bid}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <MdVerified/>
          </span>
        </div>
        <p className="text-gray-700">
          <span className="text-gray-500">Joined:</span> 12/12/2020
        </p>
        <p className="text-sm text-gray-500">India</p>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <BsWhatsapp/>
              <span>Connect</span>
            </button>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <MdEmail/>
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>

      
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24">Name:</span>
                <span className="text-gray-700 ">FirstName</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24">Birthday:</span>
                <span className="text-gray-700 ">24 Jul, 1991</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Joined:</span>
                <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Mobile:</span>
                <span className="text-gray-700">(123) 123-1234</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">amandaross@example.com</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Location:</span>
                <span className="text-gray-700">India, In</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Languages:</span>
                <span className="text-gray-700">Marathi, Hinglish</span>
                <span className="text-gray-700 "></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
