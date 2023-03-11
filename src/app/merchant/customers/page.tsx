import React from 'react'
import UserCard from 'components/UserCard'
type Props = {}

const Users = (props: Props) => {
  return (
    <div className='p-2 space-y-5' >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
    </div>
  )
}

export default Users