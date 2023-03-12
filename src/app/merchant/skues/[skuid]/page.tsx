import React from "react";
import { prods } from "../staticProducts";
import Image from "next/image";
type Props = {};

const Sku = ({ params }) => {
    const id = params["skuid"] - 1;

    const sku = { ...prods[id] };
    const im = prods[id].image;
    return (
        <div>
            <div className="flex flex-col items-center ">
                <Image
                    src={im.src}
                    width={40}
                    height={100}
                    className="w-40 h-100 border-4 border-white rounded-full "
                    alt={`Product ${im.name}`}
                />

                <h1 className="justify-start p-2">
                    <span className="font-semibold dark:text-white">
                        {" "}
                        Descriptions of the product :{" "}
                    </span>{" "}
                    <span className="dark:text-gray-300">
                        {sku.description}
                    </span>
                </h1>
            </div>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex-1 dark:bg-black  rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold dark:text-white">
                            Product Info
                        </h4>
                        <ul className="mt-2 text-gray-700">
                            <li className="flex border-b justify-between py-2">
                                <span className="font-bold w-24 dark:text-gray-300">
                                    Name:
                                </span>
                                <span className="text-gray-700 dark:text-gray-400 ">
                                    {sku.name}
                                </span>
                                <span className="text-gray-700 "></span>
                            </li>
                            <li className="flex border-b justify-between py-2">
                                <span className="font-bold w-24 dark:text-gray-300">
                                    Cost:
                                </span>
                                <span className="text-gray-700 dark:text-gray-400 ">
                                    Rs. {sku.price}{" "}
                                </span>
                                <span className="text-gray-700 "></span>
                            </li>
                            <li className="flex border-b py-2 justify-between">
                                <span className="font-bold w-24 dark:text-gray-300">
                                    category:
                                </span>
                                <span className="text-gray-700 dark:text-gray-400">
                                    {sku.category}
                                </span>
                                <span className="text-gray-700 "></span>
                            </li>
                            <li className="flex border-b py-2 justify-between">
                                <span className="font-bold w-24 dark:text-gray-300">
                                    Is Available for Offers? :
                                </span>
                                <span className="text-gray-700d dark:text-gray-400">
                                    {true
                                        ? "Currently in Offers"
                                        : "Not in Offers"}
                                </span>
                                <span className="text-gray-700 "></span>
                            </li>
                            <li className="flex border-b py-2 justify-between">
                                <span className="font-bold w-24 dark:text-gray-300">
                                    Sku Id:
                                </span>
                                <span className="text-gray-700 dark:text-gray-400">
                                    {sku.skuId}
                                </span>
                                <span className="text-gray-700 "></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sku;
