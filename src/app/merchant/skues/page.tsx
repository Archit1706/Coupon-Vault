import SkuCard from 'components/SkuCard'
import React from 'react'
import { skues } from './skues'
type Props = {}

const SkuIds = (props: Props) => {
  return (
    <div className='p-2 space-y-5 flex flex-row overflow-scroll' >
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
        <SkuCard/>
    </div>
  )
}

export default SkuIds