import React from 'react'
import UsersHeader from '../components/UsersHeader'
import { Outlet } from 'react-router-dom'
import AdminPage from '../pages/AdminPage/AdminPage'

function UserLayout() {
  return (
    <div className='adminka'>
        <UsersHeader/>
         <AdminPage/>
        <Outlet/>
    </div>
  )
}

export default UserLayout
