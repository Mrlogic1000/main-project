import React from 'react'
import { Link } from 'react-router-dom'






function MiniHeader({name,page}) {
 
  return (
    <header className='miniheader'>
       <h2>{name}</h2>
       <div><Link to='/' className='btn'>Dashboard</Link>/<strong>{name}</strong></div>

    </header>
  )
}

export default MiniHeader