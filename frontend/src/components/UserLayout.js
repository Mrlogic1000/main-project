import React from 'react'
import MiniHeader from './MiniHeader'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
    <MiniHeader name='User' page='/users' />           
        <Outlet />

    
</>
  )
}

export default UserLayout