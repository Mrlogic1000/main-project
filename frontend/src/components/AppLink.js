import React from 'react'
import { NavLink } from 'react-router-dom'

function AppLink({title,icon,active,route}) {
  return (
   
    <NavLink to={route} className='link'>
      <h4 className='icon'>{icon}</h4>
      <h4 className='title'>{title}</h4>
      </NavLink>
   
  )
}

export default AppLink