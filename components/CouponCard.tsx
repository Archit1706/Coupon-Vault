import Link from "next/link";
import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";
import "flowbite";
type Props = {};
const coupon1 = {
  _id: { $oid: "640b77a52aeee1856cfde1fb" },
  name: "Hot Promotion",
  startDate: "2023-03-04",
  endDate: "Inf",
  couponCount: "1000",
  enabled: true,
  discountType: "1",
  discount: { $numberInt: "100" },
  discountPect: { $numberInt: "0" },
  SKUs: [],
  conditions: [{ parameter: "cart.value", compare: "greater", value: "999" }],
  redemption: { $numberInt: "142" },
  title: "Hot Promotion",
  desc: "Get flat Rs.100 off on orders above Rs.999",
  createdAt: { $date: { $numberLong: "1678473125291" } },
  updatedAt: { $date: { $numberLong: "1678473125291" } },
  __v: { $numberInt: "0" },
  format: "HOT-$$$",
};

const dynamic = {
  customerId: "123",
  creationDate: "2023-03-11",
  expiryDate: "2023-04-11",
  discountType: "1",
  discount: 20,
  discountPect: 0,
  discountItem: 0,
  freeItem: "",
  skuIds: [],
  conditions: [
    {
      parameter: "customer.customer_For",
      compare: "greater",
      value: 365,
    },
  ],
  campaign: "640c7d435f1d16ba9301f2e1",
  title: "Loyality Benefit",
  desc: "20% off on whole cart",
  enabled: true,
  redeemed: false,
  format: "YEAR20-$$$",
};
const coupon = {
  couponCode: "PAYTM500",
  creationDate: "2023-03-11",
  expiryDate: "2024-03-11",
  discountType: "1",
  discountAmt: 70,
  discountPect: 0,
  discountItem: 0,
  freeItem: "",
  enabled: true,
  skuIds: ["1", "4", "6"],
  conditions: [
    {
      parameter: "payment.method",
      compare: "equal",
      value: "paytm",
    },
  ],
  title: "Paytm Offer",
  desc: "Get Flat Rs.70 off with Paytm",
  userLimit: 4,
  format: "PAYTM500",
};
const CouponCard = (props: Props) => {
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
