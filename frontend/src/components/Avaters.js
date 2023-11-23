import React from 'react'
import profile1 from '../images/profile1.jpg'
import { StyleAvarter } from './style/Avarter.style'

function Avater() {
  return (
    <StyleAvarter>        
        <img src={profile1}  alt="" />       
        <span className='title'>Stephen</span>
        
    </StyleAvarter>
  )
}

export default Avater