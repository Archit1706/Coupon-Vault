import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";
import Link from "next/link";
import { BsArrow90DegRight, BsInfinity } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Campains {
  _id: {
    $oid: string;
  };
  name: string;
  startDate: string;
  endDate: string;
  couponCount: string;
  enabled: boolean;
  discountType: string;
  discount: {
    $numberInt: string;
  };
  discountPect: {
    $numberInt: string;
  };
  SKUs: {
    $numberInt: string;
  }[];
  conditions: {
    parameter: string;
    compare: string;
    value: string;
  }[];
  redemption: {
    $numberInt: string;
  };
  title: string;
  desc: string;
  createdAt: {
    $date: {
      $numberLong: string;
    };
  };
  updatedAt: {
    $date: {
      $numberLong: string;
    };
  };
  __v: {
    $numberInt: string;
  };
  format: string;
}

type Props = {
  data: Campains;
};

const CampaignCard = (props: Props) => {
  const data = props.data;
  const [checked, setChecked] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  console.log(props.data.name);
  return (
    <div className="dark:bg-gray-800  rounded-lg shadow-md p-4 card-zoom1">
      <div className=" flex justify-between items-center">
        <Link href={`merchant/campaigns/${data._id.$oid}`}>
          {" "}
          <h3 className="text-lg font-bold text-blue-500 hover:underline ">{data.name}</h3>
        </Link>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            {data.enabled ? (
              <div>
                {" "}
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />{" "}
                <div className="w-11 h-6 bg-gray-200  dark:text-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="flex dark:text-gray-400 text-center">Active</span>
              </div>
            ) : (
              <div>
                <input type="checkbox" value="" className="sr-only peer" />{" "}
                <div className="w-11 h-6 bg-gray-200 dark:text-gray-400  rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="flex dark:text-gray-400 text-center">Not Active</span>
              </div>
            )}
          </label>
        </div>
      </div>
      <div className="flex items-center mb-2 dark:text-gray-200">
        <span className="block">Created At : {data.startDate}</span>
      </div>
      <div className="flex items-center dark:text-gray-200">
        <span className="block">Description : {data.desc}</span>
      </div>
      <div className="mt-4 space-x-2 flex justify-between items-center">
        <div className="text-gray-600 dark:text-gray-400">
          <span className="block">Type : {data.discountType}</span>
          <span className="block">Discount : {data.discount.$numberInt} %</span>
          <span className="block">Apply to Cart items</span>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <span className="block">Redemption limit: {data.couponCount}</span>
          <span className="block">
            Redeemed quantity: {data.redemption.$numberInt}
          </span>
          <span className="block flex flex-row items-center space-x-1">
            Timeframe: {data.startDate} <AiOutlineArrowRight /> <BsInfinity />
          </span>
        </div>
        <div className="text-gray-600"></div>
      </div>
    </div>
  );
};

export default CampaignCard;
