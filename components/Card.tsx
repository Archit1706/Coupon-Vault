import React from 'react'

type Props = {}

const MerchantCard = (props: Props) => {

  return (
<div className="bg-white rounded-lg shadow-md p-4">
  <div className="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-green-500 mr-2">
      <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm10-6a2 2 0 11-4 0 2 2 0 014 0zM8 10a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd" />
    </svg>
    <h3 className="text-lg font-semibold text-gray-800">Active Coupon Code</h3>
  </div>
  <div className="flex justify-between items-center">
    <div className="text-gray-600">
      <span className="text-lg font-semibold">$20 off the entire order</span>
      <span className="block text-sm">Apply to whole cart</span>
    </div>
    <div className="bg-green-500 text-white rounded-lg py-2 px-4">
      <span className="text-lg font-semibold">$20.00</span>
    </div>
  </div>
  <div className="mt-4 flex justify-between items-center">
    <div className="text-gray-600">
      <span className="block">Redemption limit: unlimited</span>
      <span className="block">Redeemed quantity: 0</span>
      <span className="block">Timeframe: 03/10/2023 13:28:21</span>
    </div>
    <div className="text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
        <path fill-rule="evenodd" d="M3.7 9.2a.75.75 0 01.75.75v.53a6.47 6.47 0 0012.53 2.22c.181-.435.276-.906.276-1.38v-.53a.75.75 0 011.5 0v.53c0 1.265-.396 2.508-1.152 3.576A8.47 8.47 0 01.75 10.95v-.53a.75.75 0 01.75-.75zM10 16a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</div>
  )
}

export default MerchantCard