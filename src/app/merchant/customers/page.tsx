import React from 'react'
import UserCard from 'components/UserCard'
import {users} from './customers'
type Props = {}


const Users = (props: Props) => {
  return (
    <div className='p-2 space-y-5' >
       {users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  )
}

export default Users