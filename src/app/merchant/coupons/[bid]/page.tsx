"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import "./styles.css";
import logo from "assets/logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";

import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
type Props = {};

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
    createdAt: string;
}
type params = {
    bid: string;
};

const CouponIdDetails = ({ params }: any) => {
    const [mobile, setMobile] = useState("");

    const forms = useRef();
    const to_name = "User";
    const email = "architrathod77@gmail.com";
    const from_name = "Coupon Vault";

    const bid = params["bid"];
    const isOwner = false;
    const [list, setList] = useState([]);
    const handleQuery = () => {
        const url =
            "https://CouponVault.sidd065.repl.co/api/coupon/static/list";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((res) => res.json())
            .then((data) => {
                setList(data);
            });
    };

    useEffect(() => {
        handleQuery();

        console.log("list", list);
    }, []);

    if (!list) return <div>Loading...</div>;
    const coupon: Coupon = list.filter((item) => item.couponCode === bid)[0];
    console.log("coupon", coupon);

    if (coupon === undefined) return <div>Loading</div>;

    const sendEmail = (e) => {
        e.preventDefault();
        toast("Sending Email...");
        console.log("Run");
        emailjs
            .sendForm(
                "service_xuw0qvq",
                "template_v6r31lq",
                forms.current,
                "ofA0AhGQztY1881q-"
            )

            .then(
                (result) => {
                    toast.success("Email Sent Successfully");
                },
                (error) => {
                    console.log("d");
                    console.log(forms.current);
                }
            );
    };

    const handleWhatsapp = async () => {
        const message =
            "Hey, I have a coupon for you. Check it out! as you are loyalty customer of our store. You can redeem this coupon at our store. Coupon Code: " +
            coupon.couponCode +
            " Coupon Value: " +
            coupon.discount +
            " Valid till: " +
            coupon.expiryDate +
            " Thank You!";
        const url =
            "https://ca1f-2409-40c0-59-5878-48e7-1857-f63e-a63b.in.ngrok.io/send_message/hellower/+918805078063";
        const a = await fetch(url);
        console.log(a);
    };

    const message =
        "Hey, I have a coupon for you. Check it out! as you are loyalty customer of our store. You can redeem this coupon at our store. Coupon Code: " +
        coupon.couponCode +
        " Coupon Value: " +
        coupon.discount +
        " Valid till: " +
        coupon.expiryDate +
        " Thank You!";

    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="">
                <div className="flex flex-col items-center py-12 ">
                    <div className="card shadow-lg dark:bg-gray-300">
                        <div className="main">
                            <div className="co-img">
                                <Image
                                    src={logo.src}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
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
                                        <>Unlimited</>
                                    ) : (
                                        <>{coupon.expiryDate}</>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="copy-button">
                            <input
                                id="copyvalue"
                                type="text"
                                readOnly
                                value={coupon.couponCode}
                            />
                            <button
                                className="copybtn"
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        coupon.couponCode
                                    )
                                }
                            >
                                COPY
                            </button>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center flex pb-4 gap-4">
                    <form ref={forms} onSubmit={sendEmail}>
                        <input type="hidden" name="to_name" value={to_name} />
                        <input
                            type="hidden"
                            name="from_name"
                            value={from_name}
                        />

                        <input type="hidden" name="message" value={message} />
                        <input type="hidden" name="email" value={email} />
                        {/* <input type="text" hidden name="email" value={email} onChange={(e)=>
                setEmail(e.target.value) } placeholder="Enter Email" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" /> */}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Gift Coupon By Email
                        </button>
                    </form>
                </div>

                <div className="justify-center items-center flex pb-4 gap-4">
                    <a
                        onClick={() => toast.success("Message Sent...")}
                        href={`https://ca1f-2409-40c0-59-5878-48e7-1857-f63e-a63b.in.ngrok.io/send_message/${message}/+918805078063`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Gift Coupon By WhatsApp
                        </button>
                    </a>
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
                                <td className="px-6 py-4"> Rs 70</td>
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
                                    {coupon.createdAt}
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
