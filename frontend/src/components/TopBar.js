import  React from 'react';
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'

import AppLink from './AppLink'
import { NavLink } from 'react-router-dom';


function TopBar() {
  
  const menus = [
    {title:'Dashboard', active:true, route:'/'},
    {title:'Users', active:false, route:'users'},        
    {title:'Maintenance', active:false, route:'maintenance'},    
    {title:'Devices', active:false, route:'device'},
    {title:'Department', active:false, route:'department'},
    {title:'Service', active:false, route:'service'},
]

  return (
  <>
    <div className='logo'>
      Logo
    </div>
    <nav className='navBar'>
      <ul>
     
      {menus.map((menu,index)=>(
        //  <AppLink key={index} icon={menu.icon} route={menu.route} title={menu.title} />
          <li key={index}><NavLink className='link' to={menu.route}> {menu.title}</NavLink></li>
       ))}
      </ul>
      <section >
      
       </section>
     

    </nav>
  </>

  )
}

export default TopBar