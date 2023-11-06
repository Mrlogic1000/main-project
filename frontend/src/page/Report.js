import React from 'react'
import client from '../HTTPRequest'
import Tables from '../components/Tables'
import { Link,useLoaderData, useNavigate } from 'react-router-dom'
// import { reportHead } from '../components/utilities'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'

function Report() {
  const navigate = useNavigate()

  const deteleItem = async (id)=>{
    const num = Number(id)
    const response = await client.delete(`/reports/${num}`)   
    if(response.status===200){     
      navigate('/report')
    }

  }  
  const datas = useLoaderData()
  
  
  const reportHead =[
    'Report',
    'Reporter',
    'Status',
    'Area',
    'Comments',
    'Date',
    'image'
]
  return (
    <>    
    <Tables datas={datas}
       edit='/edit-report' 
       link='create-report' 
       heads ={reportHead}
       title='Report' 
      >
        {
            datas?.map((data)=>(
              <tr key={data.id} style={{borderLeftColor:data.color}}>
              {/* <td><span className='status'>&nbsp;</span></td> */}
              <td>{data.report}</td>
              <td>{data.reporter}</td>
              <td >{data.status}</td>
              <td>{data.area}</td>
              <td>{data.comments}</td>
              <td>{data.date}</td>
              <td>{data.image}</td>
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

export default Report

export async function loader(){
  const data = await client.get('/reports')
 return data.data
}