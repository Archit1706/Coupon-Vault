"use client";
import React, { useState } from "react";
import Checkout from "components/Checkout/Checkout";
import { prods } from "staticProducts";

import potatoes from "assets/products/potatoes.jpeg";
import tomatoes from "assets/products/tomatoes.jpeg";
import carrot from "assets/products/carrot.jpeg";
import spinach from "assets/products/spinach.jpeg";
import onions from "assets/products/onions.jpeg";
import greenPeas from "assets/products/greenPeas.jpeg";

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
            skuId: 7,
            name: "Potatoes",
            category: "Vegetables",
            description:
                "A starchy root vegetable that is commonly used in many recipes.",
            price: 50,
            image: potatoes,
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
            skuId: 14,
            name: "Spinach",
            category: "Vegetables",
            description:
                "A leafy green vegetable that is high in iron and other nutrients.",
            price: 36,
            image: spinach,
            quantity: 1,
        },
        {
            skuId: 17,
            name: "Onions",
            category: "Vegetables",
            description:
                "A pungent bulb vegetable that is commonly used in many recipes.",
            price: 67,
            image: onions,
            quantity: 1,
        },
        {
            skuId: 19,
            name: "Green Peas",
            category: "Vegetables",
            description:
                "A variety of leafy greens that are commonly used in salads.",
            price: 31,
            image: greenPeas,
            quantity: 1,
        },
    ]);
    return (
        <div>
            <Checkout products={products1Data} />
        </div>
    );
};

export default page;
