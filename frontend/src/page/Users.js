import React from 'react'
import Tables from '../components/Tables'
import MiniHeader from '../components/MiniHeader'
import axios from 'axios'
import client from '../HTTPRequest'
import { useLoaderData } from 'react-router-dom'
// const users = useLoaderData()

function Users() {
  // client.get('/tasks').then((data)=>{
  //   console.log(data)
  // })
  return (
    <>
     <MiniHeader name='User' page=' / Users'/>
        
         {/* <Tables/> */}
    </>
  )
}

export default Users

export async function loader(){
  const data = await client.get('/users')
  return data
}