import React from 'react'
import Link from 'next/link'
type Props = {}

const CreatePage = (props: Props) => {
  return (
    <div className='pt-20 dark:text-white'>
      <h1 className='text-4xl'>Choose Type To create Coupons</h1>
      <div className='flex justify-between pt-10 px-28'>
      <Link href='/create/staticcoupon'>
        <div>
          Create Static Coupon
          </div>
          </Link>
        <Link href='/create/campaign '>
        <div className=''>Create Dynamic Coupon</div>
        </Link>
      </div>
    </div>
  )
}

export default CreatePage