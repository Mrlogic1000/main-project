import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom'

function Modal({ children,title }) {
    return (

        <div className="modal-window">
            <div className='modal'>
                <div className="modal-header">
                    <h3>Task Form</h3>
                    <Link to={title} className='close'><AiOutlineClose/></Link>
                    
                    </div>
                <div className='form'>
                    {children}
                    
                </div>


            </div>
        </div>
    )
}

export default Modal