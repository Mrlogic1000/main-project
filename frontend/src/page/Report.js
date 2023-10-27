import React from 'react'
import client from '../HTTPRequest'
import MiniHeader from '../components/MiniHeader'
import Tables from '../components/Tables'
import { useLoaderData } from 'react-router-dom'

function Report() {
  const datas = useLoaderData()
  console.log(Object.keys(datas[0]))
  return (
    <>
    <MiniHeader name='Report' page=' / Report'/>
    <Tables datas={datas}/>
    
    </>
  )
}

export default Report

export async function loader(){
  const data = await client.get('/reports')
 return data.data
}