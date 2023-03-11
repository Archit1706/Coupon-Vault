'use client'
import React,{useState} from "react";
import Link from "next/link";

type Props = {
  data : Product;
};


interface Product {
  skuId: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image: any,
}
const SkuCard = (props: Props) => {
  const product = props.data;
  
  

  return (
    <div className="bg-white shadow-md rounded-md flex flex-row overflow-hidden dark:bg-gray-800 card-zoom1 justify-between">
      <img
        className="w-[150px] h-[200px] object-cover"
        src={product.image.src}
        alt={`Product ${product.name}`}
      />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">Product Name: {product.name}</div>
        <p className="text-gray-700 text-base">
          Category: {product.category}
        </p>
        {/* <p className="text-gray-700 text-base">Cost: Rs. {product.cost}</p>
        <p className="text-gray-700 text-base">SkuId : {product.skuId}</p> */}
      </div>
      <div className="">
        <Link href={`/merchant/skues/${product.skuId}`} >

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l" >View More</button>
        </Link>
      </div>
    </div>
  );
};

export default SkuCard;
