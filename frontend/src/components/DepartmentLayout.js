import React from 'react'
import MainLayout from './MainLayout'
import { Outlet } from 'react-router-dom'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'

function DepartmentLayout() {
    const menus = [
        {icon:<MdOutlineDashboard/>, title:'Room', active:true, route:' '},
        {icon:<FaUsers/>, title:'Outlets', active:false, route:'outlet'},        
       
       
    ]
  return (
    <>
    <MainLayout menus={menus}>

    <Outlet/>
    </MainLayout>
    </>
  )
}

export default DepartmentLayout