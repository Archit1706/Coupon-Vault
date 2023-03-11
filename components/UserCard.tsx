import React from "react";

type Props = {
  data : User;
};
interface User {
  id: number;
  Income: number;
  Recency: number;
  Prod1: number;
  Prod2: number;
  Prod3: number;
  Prod4: number;
  Prod5: number;
  Prod6: number;
  NumDealsPurchases: number;
  NumWebPurchases: number;
  NumCatalogPurchases: number;
  NumStorePurchases: number;
  NumWebVisitsMonth: number;
  Customer_For: number,
  Age: number,
  Spent: number,
  Clusters: number
}
const userCard = (props: Props) => {
  const data = props.data;
  
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden dark:bg-gray-800 card-zoom1">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">{'demo'+data.id}</h3>
        <p className="text-gray-600 mb-2 dark:text-gray-300">{'demo'+data.id+'@gmail.com'}</p>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
        Total Spent: Rs.{data.Spent}
        </p>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          Recency: {data.Recency}
        </p>
        <div className="flex  justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 dark:bg-blue-700 dark:hover:bg-blue-800">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded dark:bg-red-700 dark:hover:bg-red-800">
            Delete
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default userCard;
