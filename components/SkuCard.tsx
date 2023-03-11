import React from "react";

type Props = {};

const SkuCard = (props: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="product-image.jpg" alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
        <div className="font-bold text-xl mb-2 mt-4">Price: $99.99</div>
        <div className="font-bold text-xl mb-2">SKU: 123456</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SkuCard;
