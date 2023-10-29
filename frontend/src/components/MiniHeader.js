import React from 'react'
import { Link } from 'react-router-dom'


function MiniHeader({name,page}) {
  return (
    <header className='mini-header'>
       <h2>{name}</h2>
       <div><Link to={page} className='btn'>{name}</Link>/<strong>{name}</strong></div>


    </header>
  )
}

export default MiniHeader