import React from 'react'
import { Link } from 'react-router-dom'


function MiniHeader({name,page}) {
  return (
    <header className='mini-header'>
       <h2>{name}</h2>
       <div><Link to='/' className='btn'>Dashboard</Link><strong>{ page}</strong></div>


    </header>
  )
}

export default MiniHeader