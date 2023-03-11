"use client";
import React, { useState } from "react";
import { prods } from 'staticProducts';
import Coupon from "@/types/Coupon";
import Product from "@/types/Product";


export const AppContext = React.createContext();
import { getCoupons, getCampaigns } from "./apis";

const AppProvider = ({ children }) => {
  const [data, setData] = useState("Parteek");

  const [couponCode, setCouponCode] = useState([]);
  const [couponValid, setCouponValid] = useState(false);

  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState([]);
  const getTotal = (products) => products.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const [price, setPrice] = useState(getTotal(products));
  const discouuntedPrice = price - discount;

  // const [coupons, setCoupons] = useState(getCoupons());

  // const [campaigns, setCampaigns] = useState(getCampaigns());


  const [products1, setproducts1] = useState(
    prods.filter(product => product.category === "Fruit")
  );

  const [products2, setproducts2] = useState(prods.filter(product => product.category === "Dairy" || product.category === "Grains"));

  const [products3, setproducts3] = useState(prods.filter(product => product.category === "Vegetables"));

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        couponCode,
        setCouponCode,
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
        products2,
        products3,
        setproducts1,
        setproducts2,
        setproducts3,


      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
