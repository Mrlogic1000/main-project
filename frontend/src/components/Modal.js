import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const ModalWindow = styled.div`
position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 20%;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  transition: all 1s;
  z-index: 20;
`
const ModalStyle =styled.div`
width: 50%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* padding: 15px;  */
  background-color: rgb(246, 246, 246);
`
function Modal({ children,title }) {
    return (

        <ModalWindow>
            <ModalStyle>
                <div className="modal-header">
                    <h3>Task Form</h3>
                    <Link to={title} className='close'><AiOutlineClose/></Link>
                    
                    </div>
                <div className='form'>
                    {children}
                    
                </div>


            </ModalStyle>
        </ModalWindow>
    )
}

export default Modal