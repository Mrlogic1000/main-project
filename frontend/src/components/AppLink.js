import React from 'react'
import { NavLink } from 'react-router-dom'

function AppLink({title,icon,active,route}) {
  return (
    <div className="app-link">
    <NavLink to={route} className='link'><span className='icon'>{icon}</span>{title}</NavLink>
    </div>
  )
}

export default AppLink