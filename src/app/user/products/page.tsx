"use client";
import Image from "next/image";

import Link from "next/link";
// import router from "next/router";
import React from "react";
import { prods } from "../../../../staticProducts";
type Props = {};
const page = (props: Props) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {prods.map((prod) => {
                            return (
                                <div
                                    key={prod.id}
                                    className="lg:w-1/4 md:w-1/2 p-4 w-full"
                                    // onClick={() =>
                                    // router.push(`/user/product/${prod?.id}`)
                                    // }
                                >
                                    <Link
                                        href={`/user/product/${prod.id}`}
                                        className="block relative h-48 rounded overflow-hidden"
                                    >
                                        <Image
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={prod.image.src}
                                        />
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                                            {prod.category}
                                        </h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">
                                            {prod.name}
                                        </h2>
                                        <p className="mt-1">₹{prod.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
