"use client";
import React, { useState } from "react";
import Checkout from "components/Checkout/Checkout";
import { prods } from "staticProducts";

import banana from "assets/products/banana.jpeg";
import apple from "assets/products/apple.jpeg";
import oranges from "assets/products/oranges.jpeg";
import tomatoes from "assets/products/tomatoes.jpeg";
import carrot from "assets/products/carrot.jpeg";

const coupon = [
    {
        _id: "640c1e1ba11d211e5cbdbc37",
        couponCode: "COUPON-U9P",
        userid: "", //optional
        creationDate: "2023-03-11",
        expiryDate: "2023-04-11",
        discountType: "4",
        discountAmt: 0, //optional
        discountPect: 0, //optional
        discountItem: 0, //optional
        freeItem: "123", //optional
        skuIds: [], //optional
        conditions: [], //optional
        campaign: "", //optional
        title: "HOT Promotion",
        desc: "",
        userLimit: 5, //optional
        enabled: true,
        redeemedBy: [],
        format: "COUPON-$*$",
        createdAt: "2023-03-11T06:22:19.441Z",
        updatedAt: "2023-03-11T06:22:19.441Z",
        __v: 0,
    },
];

const page = () => {
    const [products1Data, setProducts1Data] = useState([
        {
            skuId: 1,
            name: "Banana",
            category: "Fruits",
            description: "A sweet, yellow fruit with a soft texture.",
            price: 59,
            image: banana,
            quantity: 1,
        },
        {
            skuId: 11,
            name: "Apple",
            category: "Fruits",
            description:
                "A round fruit with firm, juicy flesh and typically red, yellow, or green skin. Apples are high in fiber, vitamin C, and various antioxidants.",
            price: 83,
            image: apple,
            quantity: 2,
        },
        {
            skuId: 8,
            name: "Tomatoes",
            category: "Vegetables",
            description:
                "A juicy, red fruit that is commonly used in many recipes.",
            price: 324,
            image: tomatoes,
            quantity: 1,
        },
        {
            skuId: 12,
            name: "Carrots",
            category: "Vegetables",
            description: "A crunchy root vegetable that is high in vitamin A.",
            price: 20,
            image: carrot,
            quantity: 1,
        },
        {
            skuId: 18,
            name: "Oranges",
            category: "Fruits",
            description: "A sweet, juicy fruit that is high in vitamin C.",
            price: 67,
            image: oranges,
            quantity: 1,
        },
    ]);
    return (
        <div>
            <Checkout products={products1Data} customerId={24} />
        </div>
    );
};

export default page;
