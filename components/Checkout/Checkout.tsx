"use client";
import React, { useState, useEffect, useContext } from "react";
import "./Checkout.css";
import Coupon from "@/types/Coupon";
import Product from "@/types/Product";
import { campaigns, prods } from "staticProducts";
import { AppContext } from "../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

interface CheckoutProps {
    products: Product[];
}

const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
    const BASE_URL = "http://localhost:3000";
    const {
        context,
        data,
        couponCode,
        setCouponCode,
        coupons,
        setCoupons,
        campaign,
        setCampaign,
        discount,
        setDiscount,
        total,
        setTotal,
        couponValid,
        setCouponValid,
    } = useContext(AppContext);
    // console.log(data);

    const handleClick = (e: any) => {
        e.preventDefault();
        if (couponCode.length < 0) {
            alert("Please enter a coupon code.");
            setCouponValid(false);
        } else {
            try {
                fetch(`${BASE_URL}/api/coupon/` + couponCode)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.length > 0) {
                            setCoupons(data);
                            setCouponValid(true);
                            console.log("Coupon Valid");
                            console.log(data);
                            console.log(coupons);
                        } else {
                            alert("Invalid coupon code.");
                            setCouponValid(false);
                            console.log("Coupon Invalid");
                        }
                    });
            } catch (err) {
                alert("Invalid coupon code.");
                console.log(err);
                setCouponValid(false);
                console.log("Coupon Invalid");
            }
        }
        console.log(e.target);
        console.log("The link was clicked.");
    };

    const notify = () => toast("Wow so easy!");

    useEffect(() => {
        setTotal(props.products.reduce((a, b) => a + b.quantity * b.price, 0));
    }, []);
    return (
        <div className="min-w-screen min-h-screen pt-16 bg-gray-50 py-5">
            <div className="px-5">
                <div className="mb-2">
                    <a
                        href="#"
                        className="focus:outline-none hover:underline text-gray-500 text-sm"
                    >
                        <i className="mdi mdi-arrow-left text-gray-400" />
                        Back
                    </a>
                </div>
                <div className="mb-2">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
                        Checkout.
                    </h1>
                </div>
                <div className="mb-5 text-gray-400">
                    <a
                        href="#"
                        className="focus:outline-none hover:underline text-gray-500"
                    >
                        Home
                    </a>{" "}
                    /{" "}
                    <a
                        href="/user/cart"
                        className="focus:outline-none hover:underline text-gray-500"
                    >
                        Cart
                    </a>{" "}
                    / <span className="text-gray-600">Checkout</span>
                </div>
            </div>
            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            {props.products.map((product) => {
                                return (
                                    <div
                                        key={product.skuId}
                                        className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
                                    >
                                        <div className="w-full flex items-center">
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <Image
                                                    src={product.image.src}
                                                    alt=""
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                            <div className="flex-grow pl-3 gap-2 justify-center items-center">
                                                <div className="flex justify-start items-center flex-row gap-2">
                                                    <h6 className="font-semibold uppercase text-gray-600">
                                                        {product.name}
                                                    </h6>
                                                    <p>{"-"}</p>
                                                    <p> {product.category}</p>
                                                </div>

                                                <p className="text-gray-400">
                                                    <button
                                                        className="bg-blue-400 text-black font-bold text-xl hover:border-blue-600 hover:bordee px-2 m-2 rounded-md"
                                                        onClick={() =>
                                                            (product.quantity -= 1)
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    {product.quantity}
                                                    <button
                                                        className="bg-blue-400 text-black font-bold text-xl hover:border-blue-600 hover:bordee px-2 m-2 rounded-md"
                                                        onClick={() =>
                                                            (product.quantity += 1)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-600 text-xl">
                                                    ₹{product.price}
                                                </span>
                                                <span className="font-semibold text-gray-600 text-sm">
                                                    .00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {couponValid && (
                                <p className="">
                                    The Code is applied successfully!
                                </p>
                            )}
                            <div className="">
                                <table className="w-full">
                                    <th>Title</th>
                                    <th>Discount</th>
                                    <th>Description</th>
                                    <th></th>
                                    {campaigns.map((campaign) => {
                                        return (
                                            <tr key={campaign.id}>
                                                <td>{campaign.title}</td>
                                                {campaign.discountType === 1 ? (
                                                    <td>
                                                        {
                                                            campaign.discount[
                                                                "$numberInt"
                                                            ]
                                                        }
                                                    </td>
                                                ) : campaign.discountType ===
                                                  2 ? (
                                                    <td>
                                                        {
                                                            campaign
                                                                .discountPect[
                                                                "$numberInt"
                                                            ]
                                                        }
                                                    </td>
                                                ) : (
                                                    <td>{"Free Item"}</td>
                                                )}
                                                <td>{campaign.description}</td>
                                                <td>
                                                    <button className="text-gray-200 bg-blue-500 font-bold text-xl p-4 rounded-md shadow-md">
                                                        Apply
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="-mx-2 flex items-end justify-end">
                                    <div className="flex-grow px-2 lg:max-w-xs">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                            Discount code
                                        </label>
                                        <div>
                                            <input
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                placeholder="XXXXXX"
                                                type="text"
                                                value={couponCode}
                                                onChange={(e) =>
                                                    setCouponCode(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <button
                                            className="block w-full max-w-xs mx-auto border border-transparent disabled:bg-gray-400 hover:bg-blue-500 bg-blue-600 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold cursor-pointer disabled:cursor-not-allowed"
                                            disabled={
                                                couponCode &&
                                                couponCode.length === 0
                                            }
                                            title={
                                                couponCode &&
                                                couponCode?.length === 0
                                                    ? "Enter a coupon code"
                                                    : "Get discount!"
                                            }
                                            onClick={handleClick}
                                        >
                                            APPLY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">
                                            Subtotal
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">
                                            ₹{total}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">
                                            Taxes (GST)
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">
                                            ₹{(total * 0.18).toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {couponValid && (
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">
                                                Discount
                                            </span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">
                                                ₹{discount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">
                                            Total
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold text-gray-400 text-sm">
                                            INR
                                        </span>{" "}
                                        <span className="font-semibold">
                                            ₹
                                            {(
                                                total +
                                                total * 0.18 -
                                                discount
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">
                                            Contact
                                        </span>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <span>Archit Rathod</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">
                                            Billing Address
                                        </span>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <span>
                                            123, ABC Street, XYZ City, 123456
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="type1"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-500"
                                                name="type"
                                                id="type1"
                                            />
                                            <Image
                                                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                                className="h-6 ml-3 aspect-video"
                                                width={24}
                                                height={24}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                Name on card
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="John Smith"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                Card number
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="0000 0000 0000 0000"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 -mx-2 flex items-end">
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                    Expiration date
                                                </label>
                                                <div>
                                                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                        <option value={"01"}>
                                                            01 - January
                                                        </option>
                                                        <option value={"02"}>
                                                            02 - February
                                                        </option>
                                                        <option value={"03"}>
                                                            03 - March
                                                        </option>
                                                        <option value={"04"}>
                                                            04 - April
                                                        </option>
                                                        <option value={"05"}>
                                                            05 - May
                                                        </option>
                                                        <option value={"06"}>
                                                            06 - June
                                                        </option>
                                                        <option value={"07"}>
                                                            07 - July
                                                        </option>
                                                        <option value={"08"}>
                                                            08 - August
                                                        </option>
                                                        <option value={"09"}>
                                                            09 - September
                                                        </option>
                                                        <option value={"10"}>
                                                            10 - October
                                                        </option>
                                                        <option value={"11"}>
                                                            11 - November
                                                        </option>
                                                        <option value={"12"}>
                                                            12 - December
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value={2020}>
                                                        2020
                                                    </option>
                                                    <option value={2021}>
                                                        2021
                                                    </option>
                                                    <option value={2022}>
                                                        2022
                                                    </option>
                                                    <option value={2023}>
                                                        2023
                                                    </option>
                                                    <option value={2024}>
                                                        2024
                                                    </option>
                                                    <option value={2025}>
                                                        2025
                                                    </option>
                                                    <option value={2026}>
                                                        2026
                                                    </option>
                                                    <option value={2027}>
                                                        2027
                                                    </option>
                                                    <option value={2028}>
                                                        2028
                                                    </option>
                                                    <option value={2029}>
                                                        2029
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                    Security code
                                                </label>
                                                <div>
                                                    <input
                                                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                        placeholder={"000"}
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <label
                                        htmlFor="type2"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            className="form-radio h-5 w-5 text-indigo-500"
                                            name="type"
                                            id="type2"
                                        />
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                                            width={80}
                                            height={24}
                                            className="ml-3 aspect-video"
                                        />
                                    </label>
                                </div>
                                <div className="w-full p-3">
                                    <label
                                        htmlFor="type2"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            className="form-radio h-5 w-5 text-indigo-500"
                                            name="type"
                                            id="type2"
                                        />
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                                            width={80}
                                            height={24}
                                            className="ml-3 aspect-video"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                                    <i className="mdi mdi-lock-outline mr-1" />{" "}
                                    PAY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
