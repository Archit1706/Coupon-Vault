import React, { useContext } from "react";
import Checkout from "components/Checkout/Checkout";
import { prods } from "staticProducts";
import { AppContext } from "context/AppContext";

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

// const products =

const page = () => {
    const products1 = prods.filter((p) => p.category === "Fruits");
    return (
        <div>
            <Checkout products={products1} />
        </div>
    );
};

export default page;
