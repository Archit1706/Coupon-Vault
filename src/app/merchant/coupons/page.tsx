import React from 'react'
import CouponCard from '../../../../components/CouponCard'
type Props = {}

const Vouchers = (props: Props) => {
  return (
    <div className='p-2 space-y-5' >
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
    </div>
  )
}

export default Vouchers