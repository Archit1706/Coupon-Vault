import React from "react";

type Props = {};

const userCard = (props: Props) => {
  const name = "First Name Last Name";
  const email = "fname@gmail.com";
  const sourceId = "123456";
  const createdOn = "Jan 1, 2022";
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden dark:bg-gray-800 card-zoom1">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">{name}</h3>
        <p className="text-gray-600 mb-2 dark:text-gray-300">{email}</p>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          Source Id: #{sourceId}
        </p>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          Created on: {createdOn}
        </p>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 dark:bg-blue-700 dark:hover:bg-blue-800">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded dark:bg-red-700 dark:hover:bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default userCard;
