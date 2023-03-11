import SkuCard from 'components/SkuCard'
import React from 'react'
import { prods } from './staticProducts'
type Props = {}

const SkuIds = (props: Props) => {
  return (
    <div className='p-2 space-y-5 ' >
      {prods.map((skue) => (
        <SkuCard key={skue.skuId} data={skue}/>
      ))}
    </div>
  )
}

export default SkuIds