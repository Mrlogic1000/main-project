import React, { useState } from 'react'
import Modal from './Modal'
import { Form, redirect } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import client from '../HTTPRequest'
// import { action } from './CreateTask'




function EditTask() {
  const data = useLoaderData()
  const [task, setTAsk] = useState(data)
  // console.log(data)

  const handleSelected = (e)=>{
    setTAsk(e.target.value)
  }
   
    const types = [
      'Network',
      'CCTV',
      'Intercom',
      'Speaker',
      'Television',
      'Computer',
      'Software'
    ]
    const status =['Urgent','Pending','Approve','Done']
    const assigns = [
      {name:'MrTech',id:1},
      {name:'MrRobot',id:2},
      {name:'HiTech',id:3},
      {name:'IT',id:4}
    ]
  return (
    <Modal title='/task'>
      
    <Form method='post' >

      <div className='inline'>
        <div className='input-control'>
          <label className='label' htmlFor="type">Category</label>

          <select defaultValue={data?.type} name="type" id="type" onChange={handleSelected} required>            
            {types.map((type,index)=>(
              <option  key={index} value={type}>{type}</option>
            ))}
          </select>
          <input hidden name='id' onChange={handleSelected} value={data.id} type="number" placeholder='Title' />

        </div>     

      </div>
      <div className='inline'>
       

        <div className='input-control'>
          <label className='label' htmlFor="status">Status</label>

          <select defaultValue={data?.status} name="status" id="status" onChange={handleSelected} required>
            {status.map((state,index)=>(
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

      </div>

      <div className='inline'>
        <label className='label' htmlFor="title">Title</label>
        <input name='name' id='title' onChange={handleSelected} defaultValue={data.name} type="text" placeholder='Title' />
      </div>

      <div className='inline'>
        <div className='input-control'>
          <label className='label' htmlFor="assign">Assigned</label>

          <select defaultValue={data?.assign} name="assign" onChange={handleSelected} id="assign" required>           
            {assigns.map((assign,index)=>(
              <option  key={index} value={assign.name}>{assign.name}</option>
            ))}
          </select>
        </div>

        

      </div>
      <div className='inline'>
       

        <div className='input-control'>
          <label className='label' htmlFor="ob">OB</label>
          <select defaultValue={data?.ob} name="ob" onChange={handleSelected} id="ob" required> 
            {[...Array(30).keys()].map((n,index)=>(
              <option  key={index} value={n}>{n}</option>
            ))}
          </select>
        </div>

      </div>
      <button>Create</button>

    </Form>
  </Modal>
  )
}

export default EditTask

export async function loader({params}) {
  const id = params.id
  const data = await client.get(`/tasks/${id}`)
  return data.data
}

export async function action({ request }) {
  const form = await request.formData()

  const task = {
    id: form.get('id'),
    name: form.get('name'),
    type: form.get('type'),
    status: form.get('status'),
    assign: form.get('assign'),
    ob: form.get('ob')
  }
  const response = await client.put(`/tasks`, task)  
  if (response.status === 200) {
    return redirect('/task')
  }


}