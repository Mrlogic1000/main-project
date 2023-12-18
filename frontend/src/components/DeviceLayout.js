import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from './MainLayout'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'


function DeviceLayout() {
  const menus = [
    {icon:<FaUsers/>, title:'Network Device', active:false, route:' '},        
    {icon:<FaTasks/>, title:'Public Address', active:false, route:'publicaddres'},
    {icon:<FaTasks/>, title:'Intercoms', active:false, route:'intercoms'},   
    {icon:<FaTasks/>, title:'Saves', active:false, route:'saves'},   
   
    
   
]
  return (
    <>
    <MainLayout menus={menus}>

    <Outlet/>
    </MainLayout>
    </>
  )
}

export default DeviceLayout