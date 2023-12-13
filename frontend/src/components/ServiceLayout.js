import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import MainLayout from './MainLayout'

function ServiceLayout() {
    const menus = [
        {icon:<MdOutlineDashboard/>, title:'Room Services', active:true, route:' '},
        {icon:<FaUsers/>, title:'Outlet Services', active:false, route:'outletservice'},        
      
       
    ]
      return (
        <>
        <MainLayout menus={menus}>
    
        <Outlet/>
        </MainLayout>
        </>
      )
    }

export default ServiceLayout