import React from 'react'
import CouponCard from '../../../../components/CouponCard'
type Props = {}


interface Condition {
  parameter: string;
  compare: string;
  value: string | number | boolean;
}

interface Coupon {
  couponCode?: string;
  customerId?: string;
  creationDate: string;
  expiryDate: string;
  discountType: string;
  discountAmt?: number;
  discountPect?: number;
  discountItem?: number;
  freeItem?: string;
  skuIds: string[];
  conditions: Condition[];
  title: string;
  desc: string;
  enabled: boolean;
  redeemed?: boolean;
  userLimit?: number;
  campaign?: string;
  format: string;
  discount?: number;
}

const data:Coupon[] = [
  {
    "couponCode": "PAYTM500",
    "creationDate": "2023-03-11",
    "expiryDate": "2024-03-11",
    "discountType": "1",
    "discountAmt": 70,
    "discountPect": 0,
    "discountItem": 0,
    "freeItem": "",
    "enabled": true,
    "skuIds": ["1","4","6"],
    "conditions": [
      {
        "parameter": "payment.method",
        "compare": "equal",
        "value": "paytm"
      }
    ],
    "title": "Paytm Offer",
    "desc": "Get Flat Rs.70 off with Paytm",
    "userLimit": 4,
    "format": "PAYTM500",
  },
  {
    "customerId": "123",
    "creationDate": "2023-03-11",
    "expiryDate": "2023-04-11",
    "discountType": "1",
    "discount": 20,
    "discountPect": 0,
    "discountItem": 0,
    "freeItem": "",
    "skuIds": [],
    "conditions": [
      {
        "parameter": "customer.customer_For",
        "compare": "greater",
        "value": 365
      }
    ],
    "campaign": "640c7d435f1d16ba9301f2e1",
    "title": "Loyality Benefit",
    "desc": "20% off on whole cart",
    "enabled": true,
    "redeemed": false,
    "format": "YEAR20-$$$",
}

]
  


const Vouchers = (props: Props) => {
  return (
    <div className='p-2 space-y-5' >
        {data.map((item, index) => {
          return <CouponCard key={index} data={item} />
        })
        }
    </div>
  )
}

export default Vouchers