import React from 'react'
import { Outlet } from 'react-router-dom'
import MiniHeader from './MiniHeader'
import client from '../HTTPRequest'

function TaskLayout() {
  return (
   <>
         <Outlet/>

        
   </>
  )
}

export default TaskLayout

