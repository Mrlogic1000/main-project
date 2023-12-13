import React from 'react'
import { Outlet } from 'react-router-dom'
import MiniHeader from './MiniHeader'
import client from '../HTTPRequest'
import MainLayout from './MainLayout'
import {FaTasks,FaUsers,FaRegUser} from 'react-icons/fa'
import {FcDepartment} from 'react-icons/fc'
import {MdOutlineReportOff,MdOutlineDashboard,MdDevicesOther} from 'react-icons/md'

function TaskLayout() {
  const menus = [
    {icon:<MdOutlineDashboard/>, title:'Dashboard', active:true, route:'/'},
    {icon:<FaUsers/>, title:'Users', active:false, route:'users'},        
    {icon:<FaTasks/>, title:'Task', active:false, route:'task'},
    {icon:<MdOutlineReportOff/>, title:'Report', active:false, route:'report'},
   
]
  return (
    <>
    <MainLayout menus={menus}>

    <Outlet/>
    </MainLayout>
    </>
  )
}

export default TaskLayout

