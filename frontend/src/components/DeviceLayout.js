import React from 'react'
import MiniHeader from './MiniHeader'
import { Outlet } from 'react-router-dom'

export default function DeviceLayout() {
  return (
    <>
    <MiniHeader name='Report' page='/report' />           
        <Outlet />

    
</>
  )
}
