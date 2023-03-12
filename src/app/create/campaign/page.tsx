'use client'
import React,{useState} from "react";

type Props = {};

const CreateCampaign = (props: Props) => {
    const [name, setName] = useState("10% off all Fruits");
const [creationDate, setCreationDate] = useState("2023-03-11");
const [expiryDate, setExpiryDate] = useState("2023-03-21");
const [couponCount, setCouponCount] = useState(600);
const [discountType, setDiscountType] = useState("2");
const [discount, setDiscount] = useState(0);
const [discountPect, setDiscountPect] = useState(10);
const [discountItem, setDiscountItem] = useState(0);
const [freeItem, setFreeItem] = useState("");
const [skuIds, setSkuIds] = useState(["1", "11", "18"]);
const [conditions, setConditions] = useState("1");
const [redemption, setRedemption] = useState(203);
const [title, setTitle] = useState("10% off all Fruits");
const [desc, setDesc] = useState("Get 10% off all fruits in your cart above Rs.150");
const [format, setFormat] = useState("Fresh10-%*%");

const onSubmitHandler = () => {
    const a = {
        "name": name,
        "creationDate": creationDate,
        "expiryDate": expiryDate,
        "couponCount": couponCount,
        "discountType": discountType,
        "discount": discount,
        "discountPect": discountPect,
        "discountItem": discountItem,
        "freeItem": freeItem,
        "skuIds": skuIds,
        "conditions": conditions,
        "redemption": redemption,
        "title": title,
        "desc": desc,
        "format": format
    }
    fetch("https://CouponVault.sidd065.repl.co/api/campaign/create", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    fetch('')
    console.log(a);
}

  return (
    <div className="p-20">
        <h1 className="dark:text-white font-bold text-2xl">Create Capaign</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Name"
            required
            onChange={(e) => {setName(e.target.value)}}
          />
       </div>


        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="creationDate"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Creation Date"
            required
            onChange={(e) => {setCreationDate(e.target.value)}}
          />
         
        </div>


        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="expiryDate"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="expiryDate"
            required
            onChange={(e) => {setExpiryDate(e.target.value)}}
          />
        
        </div>


        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="coouponCount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Coupon Count"
              required
                onChange={(e) => {setCouponCount(e.target.value)}}
            />
          </div>

          <div className="relative z-0 w-full mb-6 group">
          <div className="relative mb-4">
              <label
                htmlFor="discountType"
                className="text-sm text-gray-600"
              >
                Discount Type
              </label>
              <select
                id="discountType"
                name="discountType"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
              >
                <option value="1">Flat Discount</option>
                <option value="2">Percentage Discount</option>
                <option value="3">Additional Quantity</option>
                <option value="4">Free Item</option>
              </select>
            </div>
          
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
            
              name="setDiscount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Discount in %"
              required
                onChange={(e) => {setDiscount(e.target.value)}}
            />
            
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="dicountItem"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Discount Value"
              required
                onChange={(e) => {setDiscountItem(e.target.value)}}
            />
            
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Free Item"
              onChange={(e) => {setFreeItem(e.target.value)}}
              required
            />
          
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="setSkuId"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set SKU IDs"
              required
                onChange={(e) => {setSkuIds(e.target.value.split(','))}}
            />
          
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="SetTitle"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Title"
              required
              onChange={(e) => {setTitle(e.target.value)}}  
            />
           
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="setDesc"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Discount Pectage "
              onChange={(e) => {setDesc(e.target.value)}}
              required
            />
          
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
             name="setCondition"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Conditions Most Influencial Attributes have been clustered as Cluster0-3"
              required
                onChange={(e) => {setConditions(e.target.value)}}

            />
            
          </div>
          <p>Most Influencial Attributes have been clustered as Cluster0-3</p>
          <p>payment.amount greater 500, item.quantity equal 2</p>
          
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="setFormat"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Set Format "
                onChange={(e) => {setFormat(e.target.value)}}

              required
            />
            <p># all chars and numbers,
$ upper chars,
% lower chars,
& only chars,
* only numbers,
Example : XU-Example-io11</p>
          
          </div>
        <div className="flex justify-center">

       
        </div>
      </form>
      <button
        onClick={onSubmitHandler}
          className="text-white justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
    </div>
  );
};

export default CreateCampaign;
