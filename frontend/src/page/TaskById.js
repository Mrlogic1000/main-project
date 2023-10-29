import React from 'react'
import { useLoaderData } from 'react-router-dom'
import client from '../HTTPRequest'

function TaskById() {
    const data = useLoaderData()
    console.log(data)
  return (
    <>
    {data[0].id}
    </>
  )
}

export default TaskById

export async function loader({params}) {
    const id = params.id
    const data = await client.get(`/tasks/${id}`)
    return data.data
  }