import React from 'react'
// import MiniHeader from '../components/MiniHeader'
// import axios from 'axios'
import client from '../HTTPRequest'
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom'
import Tables from '../components/Tables'
import { taskHead } from '../components/utilities'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'
// import Modal from '../components/Modal'
function Task() {
  const datas = useLoaderData()
  const navigate = useNavigate()

  const deteleItem = async (id)=>{
    const num = Number(id)
    const response = await client.delete(`/tasks/${num}`)
    console.log(response)
    if(response.status===200){     
      navigate('/task')
    }

  }  

  return (
    <>
      
      <Tables datas={datas}
       edit='/edit-task' 
       link='create-task' 
       heads ={taskHead}
       title='Task' 
      >
        {
            datas?.map((data)=>(
              <tr key={data.id}>
              {/* <td>{data.id}</td> */}
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.status}</td>
              <td>{data.assign}</td>
              <td>{data.ob}</td>
              <td>{data.date}</td>
              <td>{data.due_date}</td>
              <td className='action'>
              <Link className='edit-btn' to={`${data.id}`}><MdOutlineEdit/></Link>
              <span className='del-btn' onClick={()=>{deteleItem(data.id)}}><MdOutlineDeleteForever/></span>
              </td>      
              </tr>
              
              ))
          }
      </Tables>
      
    </>
  )
}

export default Task


export async function loader() {
  const data = await client.get('/tasks')
  return data.data
}
