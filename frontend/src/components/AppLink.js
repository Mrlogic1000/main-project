import React from 'react'
import { Link } from 'react-router-dom'

function AppLink({title,icon,active,route}) {
  return (
    <div className={active?"app-link active":"app-link"}>
    <span className='icon'>{icon}</span><Link to={route} className='link' href="#">{title}</Link>
    </div>
  )
}

export default AppLink