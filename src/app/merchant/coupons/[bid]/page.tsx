import React from 'react'
import Link from 'next/link';
type Props = {}

const CouponIdDetails = ({params}:any) => {
   const bid = params['bid'];
   const isOwner = false;
  return (
   <div>
      <div className="">
        <div className="flex flex-col items-center pb-12">
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl pb-4 dark:">{bid}</p>
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
                  Campaign
                </th>
                <td className="px-6 py-4"><Link href="/merchant/campaigns/123"><h1 className='hover:underline text-blue-500'>Campaign Name</h1></Link></td>
              </tr>
              {isOwner ? (<tr className=" border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Redeemed At
                </th>
                <td className="px-6 py-4">12/23/2022</td>
              </tr>) : (<></>)}

              <tr className="border-b bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Who Ows this Coupon Currently
                </th>
                {!isOwner ? <td className="px-6 py-4">Not Redeemed Yet</td> : <td className="px-6 py-4">Vaibhav</td>}
                
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
                {isOwner ? <td className="px-6 py-4">Expired</td> : <td className="px-6 py-4">unlimited</td>}
                
              </tr>

            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default CouponIdDetails