import React from 'react'
import Headers from './Headers';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="app">

    <div>

      <Headers/>
      <SideBar/>
      <div className="content">
         <Outlet/>

        </div>

      

    </div>
  </div>
  )
}

export default RootLayout