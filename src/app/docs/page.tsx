import CouponCard from 'components/CouponCard'
import React from 'react'

type Props = {}

const Docs = (props: Props) => {
  return (
    <div className='p-16 space-y-5' >
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
    </div>
  )
}

export default Docs