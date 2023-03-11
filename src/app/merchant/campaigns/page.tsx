"use client";
import CampaignCard from "components/CampaignCard";
import CouponCard from "components/CouponCard";
import React from "react";

type Props = {};
let campaigns = [
  {
    _id: { $oid: "640b77a52aeee1856cfde1fb" },
    name: "Hot Promotion",
    startDate: "2023-03-04",
    endDate: "Inf",
    couponCount: "1000",
    enabled: false,
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
  },
  {
    _id: { $oid: "640b7cada2c606466cb4e6d5" },
    name: "Rs.50 off the entire order",
    startDate: "2023-03-04",
    endDate: "2023-04-04",
    couponCount: "900",
    enabled: true,
    discountType: "2",
    discount: { $numberInt: "0" },
    discountPect: { $numberInt: "10" },
    SKUs: [],
    conditions: [{ parameter: "cart.value", compare: "greater", value: "0" }],
    redemption: { $numberInt: "30" },
    title: "Rs.50 off the entire order",
    desc: "Get flat Rs.50 off on your order",
    createdAt: { $date: { $numberLong: "1678473125291" } },
    updatedAt: { $date: { $numberLong: "1678473125291" } },
    __v: { $numberInt: "0" },
    format: "50OFF-***",
  },
  {
    _id: { $oid: "640b7e54a2c606466cb4e6d7" },
    name: "Free 1x item",
    startDate: "2023-03-04",
    endDate: "2023-03-20",
    couponCount: "3000",
    enabled: true,
    discountType: "3",
    discount: { $numberInt: "0" },
    discountPect: { $numberInt: "0" },
    SKUs: [{ $numberInt: "0" }],
    conditions: [
      { parameter: "customer.Customer_For", compare: "greater", value: "365" },
    ],
    redemption: { $numberInt: "163" },
    title: "Free 1x item",
    desc: "Get a free item with your order",
    createdAt: { $date: { $numberLong: "1678473125291" } },
    updatedAt: { $date: { $numberLong: "1678473125291" } },
    __v: { $numberInt: "0" },
    format: "FREE-%%%",
  },
];

const Camapins = (props: Props) => {
  return (
    <div className="p-2 space-y-5">
      
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign._id.$oid} data={campaign} />
      ))}
    </div>
  );
};

export default Camapins;
