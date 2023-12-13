import React from 'react'
import { Outlet } from 'react-router-dom';


import AppLink from './AppLink'

function MainLayou({children,menus}) {

 
  return (
    <>
        <div className='pageLeft'>
        <section className='navLink'>
       {menus.map((menu,index)=>(
         <AppLink key={index} icon={menu.icon} route={menu.route} title={menu.title} />
       ))}
       </section>

        </div>
        <div className='pageRight'>
            {children}
        </div>
        
        </>
  )
}

export default MainLayou