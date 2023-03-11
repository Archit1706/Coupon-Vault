"use client";
import React, { useState } from "react";
import { prods } from 'staticProducts';
// import Coupon from "@/types/Coupon";
// import Product from "@/types/Product";


export const AppContext = React.createContext();
// import { getCoupons, getCampaigns } from "./apis";

const AppProvider = ({ children }) => {
  const [data, setData] = useState("Test Data");

  const [couponCode, setCouponCode] = useState([]);
  const [couponValid, setCouponValid] = useState(false);

  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState([]);
  const getTotal = (products) => products.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const [price, setPrice] = useState(getTotal(products));
  const discouuntedPrice = price - discount;

  const [total, setTotal] = useState(0);

  // const [coupons, setCoupons] = useState(getCoupons());

  // const [campaigns, setCampaigns] = useState(getCampaigns());


  const [products1, setProducts1] = useState(
    prods.filter(item => item.category === "Fruits")
  );

  // console.log("products1", products1)
  const [products2, setProducts2] = useState(prods.filter(item => item.category === "Dairy" || item.category === "Grains"));
  // console.log(products2)

  const [products3, setProducts3] = useState(prods.filter(item => item.category === "Vegetables"));

  // const filteredData = prods.filter(item => item.category === "Fruits");

  // console.log("filteredData", products1)

  // filteredData.forEach(item => console.log(`ID: ${item.skuId}, Name: ${item.name}, Category: ${item.category}`));

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        couponValid,
        setCouponValid,
        discount,
        setDiscount,
        products,
        setProducts,
        price,
        setPrice,
        discouuntedPrice,
        // coupons,
        // setCoupons,
        // campaigns,
        // setCampaigns,
        products1,
        // products2,
        // products3,
        setProducts1,
        // setProducts2,
        // setProducts3,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
