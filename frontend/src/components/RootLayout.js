import React from 'react'
import Headers from './Headers';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="app">

    <div className='app-body'>

      <SideBar/>

      <Headers/>
      <div className="content">
         <Outlet/>

        </div>

      

    </div>
  </div>
  )
}

export default RootLayout