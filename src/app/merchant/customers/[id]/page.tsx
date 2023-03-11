import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdVerified } from "react-icons/md";
import { users } from '../customers'
type Props = {};

const UserProfile = ({params}) => {
  const bid = params['id']
  const  user = users[bid];
  function nanosecondsToDays(nanoseconds) {
    const seconds = nanoseconds / 1000000000;
    const days = seconds / 86400;
    return days;
  }
  function getDateFromDays(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
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
          <span className="text-gray-500">Joined:</span> {getDateFromDays(nanosecondsToDays(user.Customer_For))}
        </p>

        {/* <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
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
        </div> */}
      </div>

      
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ">
        <div className="w-full flex flex-col 2xl:w-1/3 ">
          <div className="flex-1 bg-white dark:bg-black rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 dark:text-white font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24 dark:text-gray-300">Name:</span>
                <span className="text-gray-700  ">Demo{user.id}</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24 dark:text-gray-300">Age:</span>
                <span className="text-gray-700 ">{user.Age} Years</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">Total Spent Till Now:</span>
                <span className="text-gray-700">Total of Rs. {user.Spent} Spent</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">Customer Since:</span>
                <span className="text-gray-700">{getDateFromDays(nanosecondsToDays(user.Customer_For))} ( {nanosecondsToDays(user.Customer_For) } Days from today)</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">Cluster No:</span>
                <span className="text-gray-700 ">Belongs to Cluster No : {user.Clusters}</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300 ">Number of Deals Made:</span>
                <span className="text-gray-700">{user.NumDealsPurchases} Deals Made in Total</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">Number Web Visites per Month:</span>
                <span className="text-gray-700">{user.NumWebVisitsMonth} No of times visits per months</span>
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
