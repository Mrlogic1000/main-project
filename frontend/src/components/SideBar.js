import React from 'react'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'

import AppLink from './AppLink'

function SideBar() {
    const menus = [
        {icon:<MdOutlineDashboard/>, title:'Dashboard', active:true, route:'/'},
        {icon:<FaUsers/>, title:'Users', active:false, route:'users'},
        // {icon:<FaUsers/>, title:'My Account', active:false,},
        {icon:<FaTasks/>, title:'Task', active:false, route:'task'},
        {icon:<MdOutlineReportOff/>, title:'Report', active:false, route:'report'},
        {icon:<FaRegUser/>, title:'Profile', active:false, route:'profile'},
        {icon:<MdDevicesOther/>, title:'Devices', active:false, route:'device'},
        {icon:<FcDepartment/>, title:'Department', active:false, route:'department'},
    ]
  return (
    <div className="sidenav">       
       {menus.map((menu,index)=>(
         <AppLink key={index} icon={menu.icon} route={menu.route} title={menu.title} active={menu.active}/>
       ))}
        
          
        </div>
  )
}

export default SideBar