import React from 'react'
import Modal from '../components/Modal'
import { Form, redirect, useLoaderData } from 'react-router-dom'
import client from '../HTTPRequest'

function EditDevice() {
    const device = useLoaderData()
    console.log(device)

    const status = ['Good', 'Faulty']
    const departments = ['Housekeeping','Server Room', 'Maintenance','Account','Room']
    const categories = [
        'Network',
        'CCTV',
        'Intercom',
        'Speaker',
        'Television',
        'Computer',
        'Software'
      ]
  return (
    <Modal title='/device'>
        <Form method='post' >  
        <div className='inline'>
            <div className="input-control">
              <input hidden name='id' type="number" defaultValue={device.id} />
            <label className='label' htmlFor="name">Device</label>
            <input type='text' defaultValue={device.name} name="name" id="name" placeholder='Device name' required/> 
            <input type='text' defaultValue={device.device_id} name="device_id"  id="device_id" placeholder='Device ID' required/>
                      
            </div>
            
            
          </div>
          {/* --------------------------------------------- */}
  
          

          {/* -------------------------------------? */}
          <div className='inline'>
            <div className='input-control'>
              <label className='label' htmlFor="status">Status</label>
  
              <select defaultValue={device.status} name="status" id="status" required>                
                {status.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <select name="installation" id="installation" defaultValue={device.installation} required>                
                {departments.map((department, index) => (
                  <option key={index} value={department}>{department}</option>
                ))}
              </select>
            </div>   
                  
  
          </div>
          {/* -------------------------------------------------- */}
        
       
  
          {/* ---------------------------------------------- */}
          <div className="inline">
          
            <div className='input-control'>
              <label className='label' htmlFor="categories">Category</label>
  
              <select name="categories" id="categories" defaultValue={device.categories} required>                
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div> 
        
  
        </div>
          {/* --------------------------------------------- */}
          <div className='inline'>
            <div className="input-control">
            <label className='label' htmlFor="network_address">Address</label>
            <input type='text' defaultValue={device.network_address} name="network_address" placeholder='Network Address' id="network_address" required/>            
            <input type='text' defaultValue={device.mac} name="mac" placeholder='MAC Address' id="mac" required/>  
            </div>
            
          </div>
          {/* ---------------------------------------------------- */}
          <div className='inline'>
           
          </div>
          {/* ----------------------------------------------------------- */}
  
          
          <div className="inline">
          <div className='input-control'>
              <label className='label' htmlFor="Description">Description</label>  
              <textarea defaultValue={device.description} name="description" id="Description"></textarea>
            </div>
  
          </div>
         
          <button>Update</button>
  
        </Form>
      </Modal>
  )
}

export default EditDevice

export async function action({request}) {
    const form = await request.formData()
    const devices = {
      id: form.get('id'),
        name:form.get('name'),
        device_id:form.get('device_id'),
        status:form.get('status'),
        installation:form.get('installation'),
        description:form.get('description'),
        categories:form.get('categories'),
        network_address:form.get('network_address'),
        mac:form.get('mac')
    }
    const response = await client.put('/devices', devices)
    if (response.status === 200) {
        return redirect('/device')
    }

}

export async function loader({ params }) {    const id = params.id

    const data = await client.get(`/devices/${id}`)
    return data.data
}