import React, { useState } from 'react'
import { Form, redirect, useLoaderData } from 'react-router-dom'
import client from '../HTTPRequest'
import Modal from '../components/Modal'

function CreateReport() {
    const data = useLoaderData()
    const [selected, setSelected] = useState('')
  function handleSelected(event) {
    setSelected(event.target.value)
  }
    const areas = ['Nucleus', 'Gym', 'front office', 'Housekeeping', 'Vibe','Pacific', 'Room']
    const categories = [
      'Network',
      'CCTV',
      'Intercom',
      'Speaker',
      'Television',
      'Computer',
      'Software'
    ]
    const status = ['Urgent', 'Non-urgent']
    const reporters = [
      { name: 'MrTech', id: 1 },
      { name: 'MrRobot', id: 2 },
      { name: 'HiTech', id: 3 },
      { name: 'IT', id: 4 }
    ]
  return (
    <Modal title='/report'>
      <Form method='post' >

      <div className='inline'>
          <div className="input-control">
          <label className='label' htmlFor="report">Report</label>
          <select defaultValue='' name="report" id="report" required>
          <option value="" disabled hidden>Choose Report</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
          </div>
        </div>
        {/* --------------------------------------------- */}

        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="reporter">Reporter</label>
            
            <select defaultValue="" name="reporter"  id="reporter" required>
              <option value="" disabled hidden>Choose Reporter</option>
              {reporters.map((reporter, index) => (
                <option key={index} value={reporter.name}>{reporter.name}</option>
              ))}
            </select>
          </div>         
        </div>
        {/* -------------------------------------? */}
        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="Area">Area</label>

            <select defaultValue='' name="area" id="area" required>
              <option value="" disabled  hidden>Choose Area</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
          </div>          

        </div>
        {/* -------------------------------------------------- */}
      <div className="inline">
      <div className='input-control'>
            <label className='label' htmlFor="status">Status</label>

            <select name="status" id="status" defaultValue="" required>
              <option value="" disabled hidden>Choose Status</option>
              {status.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

      </div>
      {/* ------------------------------------------------------------------------- */}

        

        
        <div className="inline">
        <div className='input-control'>
            <label className='label' htmlFor="comments">Comments</label>

            <textarea name="comments" id="comments"></textarea>
          </div>

        </div>
       
        <button>Create</button>

      </Form>
    </Modal>
 
  )
}

export default CreateReport

export async function action({ request }) {
  const form = await request.formData()

  const report = {
    report: form.get('report'),
    reporter: form.get('reporter'),
    status: form.get('status'),
    area: form.get('area'),
    comments: form.get('comments'),
    image:'',
    color: form.get('status') === 'Urgent'?'red':'orange'
  }
  console.log(report)
  const response = await client.post('/reports', report)
  if (response.status === 200) {
    return redirect('/report')
  }
 


}