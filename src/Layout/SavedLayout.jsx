import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Saved/Header/Header'
function SavedLayout() {
  return (
    <div>
        <Header/>
      <Outlet/>
    </div>
  )
}

export default SavedLayout
