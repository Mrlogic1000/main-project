import React from 'react'
import profile1 from '../images/profile1.jpg'

function Avater() {
  return (
    <div className='avater-box'>
        <div className="circular-avarter">
            <img src={profile1}  alt="" />       
            
        </div>
        <strong className='title'>Stephen</strong>
        
    </div>
  )
}

export default Avater