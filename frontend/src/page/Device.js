import React from 'react'
// import MiniHeader from '../components/MiniHeader'
import Tables from '../components/Tables'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'
import client from '../HTTPRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'


function Device() {
  const navigate = useNavigate()
  const devices = useLoaderData()  
  const deteleItem = async (id)=>{
    const num = Number(id)
    const response = await client.delete(`/devices/${num}`)   
    if(response.status===200){     
      navigate('/device')
    }

  }  
  const reportHead =[
    'Name',
    'ID',
    'Description',
    'IP',
    'MAC',
    'Category',
    'Installed',
    'Status',
]
  return (

    <>    
    <Tables 
       edit='/edit-device' 
       link='create-device' 
       heads ={reportHead}
       title='Devices' 
      >
        {
            devices?.map((device)=>(
              <tr key={device.id} style={{borderLeftColor:devices.color}}>
              {/* <td><span className='status'>&nbsp;</span></td> */}
              <td>{device.name}</td>
              <td>{device.device_id}</td>
              <td >{device.description}</td>
              <td>{device.network_address}</td>
              <td>{device.mac}</td>
              <td>{device.categories}</td>
              <td>{device.installation}</td>
              <td>{device.status}</td>
              <td className='action'>
              <Link className='edit-btn' to={`${device.id}`}><MdOutlineEdit/></Link>
              <span className='del-btn' onClick={()=>{deteleItem(device.id)}}><MdOutlineDeleteForever/></span>
              </td>      
              </tr>
              
              ))
          }
      </Tables>
    
    </>
  )
}

export default Device

export async function loader(){
  const data = await client.get('/devices')
  console.log(data)
 return data.data
}