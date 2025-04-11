import React from 'react'
import UsersHeader from '../components/UsersHeader'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
        <UsersHeader/>
        <Outlet/>
      
    </div>
  )
}

export default UserLayout
