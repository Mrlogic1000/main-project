import React from 'react'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {MdOutlineReportOff,MdOutlineDashboard} from 'react-icons/md'

import AppLink from './AppLink'

function SideBar() {
    const menus = [
        {icon:<MdOutlineDashboard/>, title:'Dashboard', active:true, route:'/'},
        {icon:<FaUsers/>, title:'Users', active:false, route:'/users'},
        {icon:<FaTasks/>, title:'Task', active:false, route:'/task'},
        {icon:<MdOutlineReportOff/>, title:'Report', active:false, route:'/report'},
        {icon:<FaRegUser/>, title:'Profile', active:false, route:'/profile'},
    ]
  return (
    <div className="sidenav">
        <div className="sidenav-header">
            <div className="app-logo">
                <span className='logo'>M</span>
                <span><strong>CMS</strong>admin</span>
            </div>

        </div>
       {menus.map((menu,index)=>(
         <AppLink key={index} icon={menu.icon} route={menu.route} title={menu.title} active={menu.active}/>
       ))}
        
          
        </div>
  )
}

export default SideBar