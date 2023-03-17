"use client";
import React, { useState } from "react";
import Checkout from "components/Checkout/Checkout";
import { prods } from "staticProducts";

import milk from "assets/products/milk.jpeg";
import bread from "assets/products/bread.jpeg";
import lentils from "assets/products/lentils.jpeg";
import rice from "assets/products/rice.jpeg";
import cheese from "assets/products/cheese.jpeg";
import yogurt from "assets/products/yogurt.jpeg";

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
    const products1Data = [
        {
            skuId: 3,
            name: "Milk",
            category: "Dairy",
            description:
                "A white liquid that is rich in calcium and used in many recipes.",
            price: 72,
            image: milk,
            quantity: 1,
        },
        {
            skuId: 4,
            name: "Bread",
            category: "Grains",
            description: "A staple food made from flour, water, and yeast.",
            price: 30,
            image: bread,
            quantity: 1,
        },
        {
            skuId: 5,
            name: "Lentils",
            category: "Grains",
            description: "A common poultry that is a good source of protein.",
            price: 97,
            image: lentils,
            quantity: 1,
        },
        {
            skuId: 6,
            name: "Rice",
            category: "Grains",
            description: "A staple food made from the seeds of the rice plant.",
            price: 248,
            image: rice,
            quantity: 3,
        },
        {
            skuId: 10,
            name: "Cheese",
            category: "Dairy",
            description:
                "A dairy product made from milk and often used in cooking and as a topping.",
            price: 129,
            image: cheese,
            quantity: 1,
        },
        {
            skuId: 13,
            name: "Yogurt",
            category: "Dairy",
            description:
                "A fermented dairy product that is high in protein and good bacteria.",
            price: 60,
            image: yogurt,
            quantity: 2,
        },
    ];
    return (
        <div>
            <Checkout products={products1Data} customerId={0} />
        </div>
    );
};

export default page;
