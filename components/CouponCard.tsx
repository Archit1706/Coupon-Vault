import Link from "next/link";
import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";
import "flowbite";
interface Coupon {
  couponCode: string;
  creationDate: string;
  expiryDate: string;
  discountType: string;
  discountAmt: number;
  discountPect: number;
  discountItem: number;
  freeItem: string;
  enabled: boolean;
  skuIds: string[];
  conditions: {
    parameter: string;
    compare: string;
    value: string;
  }[];
  title: string;
  desc: string;
  userLimit: number;
  format: string;
}

type Props = {
  coupon: Coupon;
};

const CouponCard = (props: Props) => {
  const { coupon } = props;
  const isDynamic = coupon.conditions[0].parameter === "customer.customer_For";
  return (
    <div className="bg-white shadow-md rounded-md p-4 overflow-hidden dark:bg-gray-800 card-zoom1 justify-between">
      <div>
        <div className="flex items-center mb-4 justify-between">
          <div className="flex flex-row items center space-x-2">
            <RiCoupon4Fill className="text-blue-400  text-start w-8 h-8 " />
            <Link href={`merchant/coupons/${coupon.couponCode}`}>
              {" "}
              <h3 className="text-lg font-semibold dark:text-white ">
                {coupon.couponCode}
              </h3>
            </Link>
          </div>
          <div className="">
            <Link href={`/merchant/skues/`}>
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
        <div className="text-gray-600">
          <span className="text-lg font-semibold">
            $20 off the entire order
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600">
          <span className="block">Redemption limit: unlimited</span>
          <span className="block">Redeemed quantity: 0</span>
          <span className="block">Timeframe: 03/10/2023 13:28:21</span>
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
          <span className="block text-sm">Apply to whole cart</span>
        </div>
      </div>
    </div>
  );
};
export default CouponCard;
