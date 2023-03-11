"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./styles.css";
import Image from "next/image";

import logo from "assets/logo.png";
type Props = {};
const coupon = {
    _id: { $oid: "640b77a52aeee1856cfde1fb" },
    name: "Hot Promotion",
    code: "HOT-$$$-123123123",
    startDate: "2023-03-04",
    endDate: "Inf",
    couponCount: "1000",
    enabled: false,
    discountType: "1",
    discount: { $numberInt: "100" },
    discountPect: { $numberInt: "10" },
    SKUs: [],
    conditions: [{ parameter: "cart.value", compare: "greater", value: "999" }],
    redemption: { $numberInt: "142" },
    title: "Hot Promotion",
    desc: "Get flat Rs.100 off on orders above Rs.999",
    createdAt: { $date: { $numberLong: "1678473125291" } },
    updatedAt: { $date: { $numberLong: "1678473125291" } },
    __v: { $numberInt: "0" },
    format: "HOT-$$$",
    campainId: { $oid: "640b77a52aeee1856cfde1fb" },
    isStatic: true,
    isRedeemed: false,
};

const CouponIdDetails = ({ params }: any) => {
    function nanosecondsToDays(nanoseconds) {
        const seconds = nanoseconds / 1000000000;
        const days = seconds / 86400;
        return days;
    }
    function getDateFromDays(days) {
        const date = new Date();
        date.setDate(date.getDate() - days);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const bid = params["bid"];
    const isOwner = false;
    const [copy, setCopy] = React.useState(false);
    return (
        <div>
            <div className="">
                <div className="flex flex-col items-center py-12 ">
                    <div className="card shadow-lg dark:bg-gray-300">
                        <div className="main">
                            <div className="co-img">
                                <Image src={logo.src} alt="" />
                            </div>
                            <div className="vertical"></div>
                            <div className="content">
                                <h2>{coupon.title}</h2>
                                <h1>
                                    <span>Coupon</span>
                                </h1>
                                <p>
                                    Valid till{" "}
                                    {coupon.endDate === "Inf" ? (
                                        <>Marne Tak</>
                                    ) : (
                                        <>coupon.endDate</>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="copy-button">
                            <input
                                id="copyvalue"
                                type="text"
                                readOnly
                                value={coupon.code}
                            />
                            <button
                                className="copybtn"
                                onClick={() =>
                                    navigator.clipboard.writeText(coupon.code)
                                }
                            >
                                COPY
                            </button>
                        </div>
                    </div>
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
                                <td className="px-6 py-4">
                                    {coupon.discountType}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Discount Value
                                </th>
                                <td className="px-6 py-4">
                                    {" "}
                                    Rs {coupon.discountPect.$numberInt}
                                </td>
                            </tr>
                            <tr className="border-b bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Discount Effect
                                </th>
                                <td className="px-6 py-4">
                                    {coupon.conditions[0].parameter +
                                        " " +
                                        coupon.conditions[0].compare +
                                        " " +
                                        coupon.conditions[0].value}
                                </td>
                            </tr>
                            {coupon.isStatic ? (
                                <tr className=" border-b bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Campaign
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`/merchant/campaigns/${coupon.campainId.$oid}`}
                                        >
                                            <h1 className="hover:underline text-blue-500">
                                                {coupon.title}
                                            </h1>
                                        </Link>
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}

                            {isOwner ? (
                                <tr className=" border-b bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Redeemed At
                                    </th>
                                    <td className="px-6 py-4">
                                        {coupon.isRedeemed ? <>Yes</> : <>NO</>}
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}

                            <tr className="border-b bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Who Ows this Coupon Currently
                                </th>
                                {!isOwner ? (
                                    <td className="px-6 py-4">
                                        Not Redeemed Yet
                                    </td>
                                ) : (
                                    <td className="px-6 py-4">Vaibhav</td>
                                )}
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
                                <td className="px-6 py-4">
                                    {getDateFromDays(
                                        nanosecondsToDays(
                                            coupon.createdAt.$date.$numberLong
                                        )
                                    )}
                                </td>
                            </tr>

                            <tr className=" border-b bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Expiry
                                </th>
                                {coupon.isRedeemed ? (
                                    <td className="px-6 py-4">Expired</td>
                                ) : (
                                    <td className="px-6 py-4">unlimited</td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CouponIdDetails;
