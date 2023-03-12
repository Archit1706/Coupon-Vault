import Link from "next/link";
import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";

import "flowbite";
interface Condition {
  parameter: string;
  compare: string;
  value: string | number | boolean;
}

interface Coupon {
  couponCode?: string;
  customerId?: string;
  creationDate: string;
  expiryDate: string;
  discountType: string;
  discountAmt?: number;
  discountPect?: number;
  discountItem?: number;
  freeItem?: string;
  skuIds: string[];
  conditions: Condition[];
  title: string;
  desc: string;
  enabled: boolean;
  redeemed?: boolean;
  userLimit?: number;
  campaign?: string;
  format: string;
  discount?: number;
}

type Props = {
  data: Coupon;
};

const CouponCard = (props: Props) => {
  const coupon = props.data;
  const isDynamic = coupon?.customerId  ? true : false;

  return (
    <div className="bg-white shadow-md rounded-md p-4 overflow-hidden dark:bg-gray-800 card-zoom1 justify-between">
      <div>
        <div className="flex items-center mb-4 justify-between">
          <div className="flex flex-row items center space-x-2">
            <RiCoupon4Fill className="text-blue-400  text-start w-8 h-8 " />
            <Link href={{pathname : `merchant/coupons/${coupon?.couponCode ? coupon.couponCode : coupon.campaign}` ,
              query: {coupon: JSON.stringify(coupon)}}}
            >
              {" "}
              <h3 className="text-lg font-semibold dark:text-white ">
                {coupon.title}
              </h3>
            </Link>
          </div>
          <div className="">
            <Link href={`merchant/coupons/${coupon?.couponCode ? coupon.couponCode : coupon.campaign}`}>
              {isDynamic ? (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                  Dynamic Coupon
                </button>
              ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                  Static Coupon
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-gray-600 dark:text-gray-300">
          <span className="text-lg font-semibold">
            {coupon.desc}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600 dark:text-gray-400">
          <span className="block">Redemption limit: {coupon?.userLimit  ?  coupon.userLimit : 'unlimited'}</span>
          <span className="block">Format : {coupon.format}</span>
          <span className="block">Timeframe: {coupon.expiryDate}</span>
        </div>

        <div>
          <div className="pl-10">
            <label className="relative inline-flex items-center cursor-pointer ">
              
              {coupon.enabled ? (
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />{" "}
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </div>
              ) : (
                <div>
                  <input type="checkbox" value="" className="sr-only peer" />{" "}
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </div>
              )}
            </label>
          </div>
          <span className="block text-sm font-bold dark:text-gray-200">Status of Coupon</span>
        </div>
      </div>
    </div>
  );
};
export default CouponCard;
