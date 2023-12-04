import React from 'react'
import Headers from './TopBar';
import SideBar from './PageLeft';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (


    <main className='container'>
      
      <header className='topBar'>        
      <Headers />
      </header>      
        
        <div className="pageLeft"> 
        <SideBar />
        </div>

        <div className="pageRight">
          <Outlet />

        </div>
     



    </main >

  )
}

export default RootLayout