'use client'
import { useRouter } from 'next/router';

type Props = {}

const Campains = ({params}:any) => {
  const id = params['bid'];
  console.log(id);
 
  return (
    <div>

    </div>
  )
}

export default Campains