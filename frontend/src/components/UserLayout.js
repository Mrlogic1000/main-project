import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from './MainLayout'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'

function UserLayout() {
  const menus = [
    {icon:<MdOutlineDashboard/>, title:'All Users', active:true, route:''},   
    {icon:<FaUsers/>, title:'Profile', active:false, route:'profile'},        
    {icon:<FaTasks/>, title:'Personal Task', active:false, route:'task'},
    
   
]
  return (
    <>
    <MainLayout menus={menus}>

    <Outlet/>
    </MainLayout>
    </>
  )
}

export default UserLayout