import React from 'react'
import Modal from '../components/Modal'
import { Form, redirect } from 'react-router-dom'
import client from '../HTTPRequest'

function CreateDevice() {
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
        <Modal title='/report'>
        <Form method='post' >
  
        <div className='inline'>
            <div className="input-control">
            <label className='label' htmlFor="name">Device</label>
            <input type='text' defaultValue='' name="name" id="name" placeholder='Device name' required/> 
            <input type='text' defaultValue="" name="device_id"  id="device_id" placeholder='Device ID' required/>
                      
            </div>
            
            
          </div>
          {/* --------------------------------------------- */}
  
          

          {/* -------------------------------------? */}
          <div className='inline'>
            <div className='input-control'>
              <label className='label' htmlFor="status">Status</label>
  
              <select defaultValue='' name="status" id="status" required>
                <option value="" disabled  hidden>Choose Status</option>
                {status.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <select name="installation" id="installation" defaultValue="" required>
                <option value="" disabled hidden>Choose installation</option>
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
  
              <select name="categories" id="categories" defaultValue="" required>
                <option value="" disabled hidden>Choose category</option>
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
            <input type='text' defaultValue='' name="network_address" placeholder='Network Address' id="network_address" required/>            
            <input type='text' defaultValue='' name="mac" placeholder='MAC Address' id="mac" required/>  
            </div>
            
          </div>
          {/* ---------------------------------------------------- */}
          <div className='inline'>
           
          </div>
          {/* ----------------------------------------------------------- */}
  
          
          <div className="inline">
          <div className='input-control'>
              <label className='label' htmlFor="Description">Description</label>
  
              <textarea name="description" id="Description"></textarea>
            </div>
  
          </div>
         
          <button>Create</button>
  
        </Form>
      </Modal>
    )
}

export default CreateDevice



export async function action({request}) {

    const form = await request.formData()
    const devices = {
        name:form.get('name'),
        device_id:form.get('device_id'),
        status:form.get('status'),
        installation:form.get('installation'),
        description:form.get('description'),
        categories:form.get('categories'),
        network_address:form.get('network_address'),
        mac:form.get('mac')
    }

    const result = await client.post('/devices',devices)    
    return redirect('/device')

}