import React from 'react'
import MiniHeader from '../components/MiniHeader'
import axios from 'axios'
import client from '../HTTPRequest'
import { useLoaderData } from 'react-router-dom'
import Tables from '../components/Tables'
function Task() {
  const datas = useLoaderData()
  console.log(Object.keys(datas[0]))

  return (
    <>
    <MiniHeader name='Task' page=' / Task'/>
    <Tables datas={datas}/>
    <div className='modal'>

    </div>
    </>
  )
}

export default Task



export async function loader(){
  
const data = await client.get('/tasks')
 return data.data
}