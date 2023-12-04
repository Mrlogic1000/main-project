import React from 'react'
import {
    MdOutlineDeleteForever,
    MdOutlineEmail,
    MdOutlineEdit,
    MdOutlinePhoneAndroid
  } from 'react-icons/md'
  import client from '../HTTPRequest'
import { Link, Navigate } from 'react-router-dom'

function Card({image,username,role,email,phone,id}) {

    const deteleItem = async (id) => {
        const num = Number(id)
        const response = await client.delete(`/users/${num}`)
        if (response.status === 200) {
          Navigate('/users')
        }
    
      }
  return (
    <section className='card'>
    <div className='avarter'>
      <img src={`http://localhost:4000/${image}`} alt="" />
      <span>{username}</span>
      <p>{role}</p>
    </div>

    <div className='card-info'>
      <div>
       <div className='contact'> <MdOutlineEmail /><span>{email}</span></div>
        <p>Email</p>
      </div>
      <div>
      <div className='contact'><MdOutlinePhoneAndroid /><span>{phone}</span></div>
        <p>Phone </p>
      </div>



    </div>
    <div className='action'>
      <Link className='btn' to={`${id}`}><MdOutlineEdit /></Link>
      <span className='btn' onClick={() => { deteleItem(id) }}><MdOutlineDeleteForever /></span>
    </div>

  </section>
  )
}

export default Card