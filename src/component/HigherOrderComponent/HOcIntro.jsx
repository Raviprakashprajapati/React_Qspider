import React from 'react'
import Users0 from './Users0'
import WithLoader from './WithLoader'

function HOcIntro() {

  const UserWithLoader = WithLoader(Users0)

  return (
    <div>
      <UserWithLoader/>
      
    </div>
  )
}

export default HOcIntro
