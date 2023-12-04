import React from 'react'
// import MiniHeader from '../components/MiniHeader'
import Tables from '../components/Tables'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'
import client from '../HTTPRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { STable,Tbody,THeader } from '../components/style/Table.style'


function Device() {
  const navigate = useNavigate()
  const devices = useLoaderData()
  const deteleItem = async (id) => {
    const num = Number(id)
    const response = await client.delete(`/devices/${num}`)
    if (response.status === 200) {
      navigate('/device')
    }

  }
  
  
  return (

    <section className='tb'>
      
     <section className='table_header' >
      <h3>Device</h3>
      {/* <Link className='link-btn' to='create-device'>New Device</Link> */}
      </section >
      <section className='table_body'>

      <table>       
        
           <thead className='thead'>
            <tr>
           <th>Name</th> 
           <th>ID</th> 
           <th>Description</th> 
           <th>IP</th> 
           <th>MAC</th> 
           <th>Category</th> 
           <th>Installed</th> 
           <th>Status</th> 
           <th>Action</th> 
  
            </tr>
          </thead>
          <tbody>
          {
            devices?.map((device) => (
              <tr key={device.id} style={{ borderLeftColor: devices.color }}>
                {/* <td><span className='status'>&nbsp;</span></td> */}
                <td data-cell="Name">{device.name}</td>
                <td data-cell='ID'>{device.device_id}</td>
                <td data-cell='Description' >{device.description}</td>
                <td data-cell='Network Address'>{device.network_address}</td>
                <td data-cell='MAC Addres'>{device.mac}</td>
                <td data-cell='Categories'>{device.categories}</td>
                <td data-cell='Installation'>{device.installation}</td>
                <td data-cell='Status'>{device.status}</td>
                <td data-cell='Action' className='action'>
                  <Link className='edit-btn' to={`${device.id}`}><MdOutlineEdit/></Link>
                  <span className='del-btn' onClick={() => { deteleItem(device.id) }}><MdOutlineDeleteForever /></span>
                </td>
              </tr>
  
            ))
          }
          </tbody>
        </table>
           </section>

    </section>
  )
}

export default Device

export async function loader() {
  const data = await client.get('/devices')
  console.log(data)
  return data.data
}