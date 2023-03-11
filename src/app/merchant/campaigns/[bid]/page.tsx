import React from "react";

type Props = {};

const CampaignsBid = (props: Props) => {
 
  return (
    <div>
      <div className="">
        <div className="flex flex-col items-center pb-12">
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl pb-4 dark:">Campain Name</p>
          </div>
          <p className="text-gray-700">
            Description :Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed
          </p>
        </div>
        <div className="relative overflow-x-auto px-4 rounded-lg ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 rounded-lg">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Discount Type
                </th>
                <td className="px-6 py-4">Amount</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Discount Value
                </th>
                <td className="px-6 py-4">Rs 2000</td>
              </tr>
              <tr className="border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Discount Effect
                </th>
                <td className="px-6 py-4">Apply to whole card</td>
              </tr>

              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Total Coupons
                </th>
                <td className="px-6 py-4">100/200</td>
              </tr>

              <tr className="border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email Delivered
                </th>
                <td className="px-6 py-4">10/11</td>
              </tr>

              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Message Delivered
                </th>
                <td className="px-6 py-4">10/11</td>
              </tr>
              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Redemption limit per voucher
                </th>
                <td className="px-6 py-4">unlimited</td>
              </tr>

              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Category
                </th>
                <td className="px-6 py-4">ShowCase</td>
              </tr>

              
              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Created At
                </th>
                <td className="px-6 py-4">20/2/2022</td>
              </tr>

              <tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expires At
                </th>
                <td className="px-6 py-4">unlimited</td>
              </tr>

            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default CampaignsBid;
