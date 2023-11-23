import React from 'react'
import Avater from './Avaters';
import { StyleHeader,Logo } from './style/Header.style';
function Headers() {
  return (
    <StyleHeader>
    <Logo> <span className='logo'>M</span>
                <span><strong>CMS</strong>admin</span> </Logo>
    <Avater/>
  </StyleHeader>
  )
}

export default Headers