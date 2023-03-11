import React from "react";
import Link from "next/link";
type Props = {
  data: User;
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
  Customer_For: number;
  Age: number;
  Spent: number;
  Clusters: number;
}
const userCard = (props: Props) => {
  const data = props.data;
  const phone = 1233457689;
  function nanosecondsToDays(nanoseconds) {
    const seconds = nanoseconds / 1000000000;
    const days = seconds / 86400;
    return days;
  }
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden dark:bg-gray-800 card-zoom1">
      <div className="p-4">
        <Link href={`/merchant/customers/${data.id}`}>
          <h3 className="text-lg font-semibold mb-2 text-blue-500 ">
            {"Demo" + data.id}
          </h3>
        </Link>
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          {"demo" + data.id + "@gmail.com"}
        </p>
        <div className="mt-4 space-x-2 flex justify-between items-center">
          <div className="text-gray-600">
            <span className="block">Total Spent : Rs. {data.Spent} </span>
            <span className="block">Cluster No : {data.Clusters}</span>
            <span className="block">
              Customer Since: {nanosecondsToDays(data.Customer_For)} Days
            </span>
          </div>
          <div className="text-gray-600">
            <span className="block">
              Number of Deals Used: {data.NumDealsPurchases}
            </span>
            <span className="block">
              Customer Last Visited: {data.Recency} Days Ago
            </span>
            <span className="block">Customer Age: {data.Age} Years</span>
          </div>
          <div className="text-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default userCard;
