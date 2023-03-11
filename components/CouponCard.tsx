import Link from "next/link";
import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";
type Props = {};

const CouponCard = (props: Props) => {

return (


  <div className="bg-white rounded-lg shadow-md p-4 card-zoom1">
    <div className="flex items-center mb-4">
      <RiCoupon4Fill className="text-green-400" />
      <Link href={`merchant/coupons/`}>  <h3 className="text-lg font-semibold text-gray-800">H12312-123210-xl</h3></Link>
    
    </div>
    <div className="flex justify-between items-center">
      <div className="text-gray-600">
        <span className="text-lg font-semibold">
          $20 off the entire order
        </span>
      </div>
      <div className="bg-green-500 text-white rounded-lg py-2 px-4">
        <span className="text-lg font-semibold">Rs.2000 </span>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="text-gray-600">
        <span className="block">Redemption limit: unlimited</span>
        <span className="block">Redeemed quantity: 0</span>
        <span className="block">Timeframe: 03/10/2023 13:28:21</span>
      </div>

      <div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">InActive</span>
          </label>
        </div>
        <span className="block text-sm">Apply to whole cart</span>
      </div>
    </div>
  </div>
);
};
export default CouponCard;
