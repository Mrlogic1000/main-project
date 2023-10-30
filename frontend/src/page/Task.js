import React from 'react'
// import MiniHeader from '../components/MiniHeader'
// import axios from 'axios'
import client from '../HTTPRequest'
import { Navigate, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Tables from '../components/Tables'
// import Modal from '../components/Modal'
function Task() {
  const datas = useLoaderData()
  const navigate = useNavigate()

  const deteleItem = async (id)=>{
    const num = Number(id)
    // const response = await client.delete(`/tasks/${num}`)
    // console.log(response)
    // if(response.status===200){
    //   return redirect('/task')
    // }
    navigate('/task')

  }

  return (
    <>
      
      <Tables datas={datas} link='/create-task' title='Create Task' action={deteleItem}/>
      
    </>
  )
}

export default Task


export async function loader() {

  const data = await client.get('/tasks')
  return data.data
}
