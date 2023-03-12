"use client";
import React, { useState, useContext, createContext } from "react";
import { prods } from 'staticProducts';

// images

import apple from "assets/products/apple.jpeg";
import banana from "assets/products/banana.jpeg";
import bread from "assets/products/bread.jpeg";
import cheese from "assets/products/cheese.jpeg";
import lentils from "assets/products/lentils.jpeg";
import carrot from "assets/products/carrot.jpeg";
import eggs from "assets/products/eggs.jpeg";
import milk from "assets/products/milk.jpeg";
import potatoes from "assets/products/potatoes.jpeg";
import spinach from "assets/products/spinach.jpeg";
import rice from "assets/products/rice.jpeg";
import salmon from "assets/products/salmon.jpeg";
import tomatoes from "assets/products/tomatoes.jpeg";
import pasta from "assets/products/pasta.jpeg";
import onions from "assets/products/onions.jpeg";
import yogurt from "assets/products/yogurt.jpeg";
import peanutButter from "assets/products/peanutButter.jpeg";
import oranges from "assets/products/oranges.jpeg";
import greenPeas from "assets/products/greenPeas.jpeg";

// import Coupon from "@/types/Coupon";
// import Product from "@/types/Product";


export const AppContext = createContext();
// import { getCoupons, getCampaigns } from "./apis";


const AppProvider = ({ children }) => {

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


  const [products2Data, setProducts2Data] = useState([
    {
      skuId: 3,
      name: 'Milk',
      category: 'Dairy',
      description: 'A white liquid that is rich in calcium and used in many recipes.',
      price: 72,
      image: milk,
      quantity: 1,
    },
    {
      skuId: 4,
      name: 'Bread',
      category: 'Grains',
      description: 'A staple food made from flour, water, and yeast.',
      price: 30,
      image: bread,
      quantity: 1,
    },
    {
      skuId: 5,
      name: 'Lentils',
      category: 'Grains',
      description: 'A common poultry that is a good source of protein.',
      price: 97,
      image: lentils,
      quantity: 1,
    },
    {
      skuId: 6,
      name: 'Rice',
      category: 'Grains',
      description: 'A staple food made from the seeds of the rice plant.',
      price: 248,
      image: rice,
      quantity: 1,
    },
    {
      skuId: 10,
      name: 'Cheese',
      category: 'Dairy',
      description: 'A dairy product made from milk and often used in cooking and as a topping.',
      price: 129,
      image: cheese,
      quantity: 1,
    },
    {
      skuId: 13,
      name: 'Yogurt',
      category: 'Dairy',
      description: 'A fermented dairy product that is high in protein and good bacteria.',
      price: 60,
      image: yogurt,
      quantity: 1,
    }
  ]);

  const [products3Data, setProducts3Data] = useState(
    [
      {
        skuId: 7,
        name: 'Potatoes',
        category: 'Vegetables',
        description: 'A starchy root vegetable that is commonly used in many recipes.',
        price: 50,
        image: potatoes,
      },
      {
        skuId: 8,
        name: 'Tomatoes',
        category: 'Vegetables',
        description: 'A juicy, red fruit that is commonly used in many recipes.',
        price: 324,
        image: tomatoes,
        quantity: 1,
      },
      {
        skuId: 12,
        name: 'Carrots',
        category: 'Vegetables',
        description: 'A crunchy root vegetable that is high in vitamin A.',
        price: 20,
        image: carrot,
        quantity: 1,
      },
      {
        skuId: 14,
        name: 'Spinach',
        category: 'Vegetables',
        description: 'A leafy green vegetable that is high in iron and other nutrients.',
        price: 36,
        image: spinach,
        quantity: 1,
      },
      {
        skuId: 17,
        name: 'Onions',
        category: 'Vegetables',
        description: 'A pungent bulb vegetable that is commonly used in many recipes.',
        price: 67,
        image: onions,
        quantity: 1,
      },
      {
        skuId: 19,
        name: 'Green Peas',
        category: 'Vegetables',
        description: 'A variety of leafy greens that are commonly used in salads.',
        price: 31,
        image: greenPeas,
        quantity: 1,
      }
    ]
  );

  const [data, setData] = useState("Test Data");
  const BASE_URL = 'https://CouponVault.sidd065.repl.co';

  const [couponCode, setCouponCode] = useState("");
  const [couponValid, setCouponValid] = useState(false);

  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState([]);
  const getTotal = (products) => products.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const [price, setPrice] = useState(getTotal(products));
  const discouuntedPrice = price - discount;

  const [total, setTotal] = useState(0);

  const [coupons, setCoupons] = useState([]);

  const [campaigns, setCampaigns] = useState([]);

  const [paymentMode, setPaymentMode] = useState(1);

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const getCampaigns = () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch("https://CouponVault.sidd065.repl.co/api/campaign/list", requestOptions)
      .then(response => response.text())
      .then(result => setCampaigns(JSON.parse(result)))
      .catch(error => console.log('error', error));
  };
  getCampaigns();
  // console.log(campaigns);

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
        couponCode,
        setCouponCode,
        coupons,
        setCoupons,
        campaigns,
        setCampaigns,
        total,
        setTotal,
        paymentMode,
        setPaymentMode,
        selectedCampaign,
        setSelectedCampaign,
        products1Data,
        products2Data,
        products3Data,
        setProducts1Data,
        setProducts2Data,
        setProducts3Data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
