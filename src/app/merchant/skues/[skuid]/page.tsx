import React from 'react'
import {prods } from '../staticProducts'
type Props = {}

const Sku = ({params}) => {
  const id = params['skuid']-1;

  const sku = { ...prods[id]}
  const im = prods[id].image
  return (
    <div>
      <div className="flex flex-col items-center ">
        <img
          src={im.src}
          className="w-40 h-100 border-4 border-white rounded-full "
        />
        
      <h1 className='text-start'>
        <span  className='font-semibold'> Descriptions of the product : </span> {sku.description}
        </h1>
        
      </div>
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Product Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24">Name:</span>
                <span className="text-gray-700 ">{sku.name}</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24">Cost:</span>
                <span className="text-gray-700 ">Rs. {sku.price} </span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">category:</span>
                <span className="text-gray-700">{sku.category}</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Is Available for Offers? :</span>
                <span className="text-gray-700">{true ? 'Yes' : "No"}</span>
                <span className="text-gray-700 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24">Sku Id:</span>
                <span className="text-gray-700">{sku.skuId}</span>
                <span className="text-gray-700 "></span>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sku