import React, { useState } from 'react'
import Modal from './Modal'
import { Form, redirect } from 'react-router-dom'
import client from '../HTTPRequest'

function CreateTask() {
  const [selected, setSelected] = useState('')
  function handleSelected(event) {
    setSelected(event.target.value)
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
  const status = ['Urgent', 'Pending', 'Approve', 'Done']
  const assigns = [
    { name: 'MrTech', id: 1 },
    { name: 'MrRobot', id: 2 },
    { name: 'HiTech', id: 3 },
    { name: 'IT', id: 4 }
  ]
  return (
    <Modal title='/task'>
      <Form method='post' >

        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="name">Category</label>
            
            <select defaultValue="" name="type"  id="type" required>
              <option value="" disabled hidden>Choose Category</option>
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className='input-control'>
            <label className='label' htmlFor="type">Status</label>

            <select name="status" id="type" defaultValue="" required>
              <option value="" disabled hidden>Choose Status</option>
              {status.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

        </div>

        <div className='inline'>
          <label className='label' htmlFor="title">Title</label>
          <input name='name' type="text" placeholder='Title' />
        </div>

        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="assign">Assigned</label>

            <select defaultValue='' name="assign" id="type" required>
              <option value="" disabled  hidden>Choose Assign</option>
              {assigns.map((assign, index) => (
                <option key={index} value={assign.name}>{assign.name}</option>
              ))}
            </select>
          </div>

          <div className='input-control'>
            <label className='label' htmlFor="Assigned">OB</label>

            <select defaultValue='' name="ob" id="type" onChange={handleSelected} required>
              <option value="" disabled hidden>Choose OB</option>
              {[...Array(30).keys()].map((n, index) => (
                <option key={index} value={n}>{n}</option>
              ))}
            </select>
          </div>

        </div>
        <button>Create</button>

      </Form>
    </Modal>
  )



}

export default CreateTask
export async function action({ request }) {
  const form = await request.formData()

  const task = {
    name: form.get('name'),
    type: form.get('type'),
    status: form.get('status'),
    assign: form.get('assign'),
    ob: form.get('ob')
  }
  const response = await client.post('/tasks', task)
  if (response.status === 200) {
    return redirect('/task')
  }
 


}