import React from 'react'
import { Form, redirect, useLoaderData } from 'react-router-dom'
import Modal from './Modal'
import client from '../HTTPRequest'

function EditReport() {
    const data = useLoaderData()

    const areas = ['Nucleus', 'Gym', 'front office', 'Housekeeping', 'Vibe', 'Pacific', 'Room']
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
                    <input hidden defaultValue={data[0]?.id} name='id' type="number" placeholder='Report' />

                    <div className="input-control">
                        <label className='label' htmlFor="report">Report</label>
                        <select defaultValue={data[0]?.report} name="report" id="report" required>
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
                        <select defaultValue={data[0]?.reporter} name="reporter" id="reporter" required>
                            {reporters.map((reporter, index) => (
                                <option key={index} value={reporter.name}>{reporter.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* -------------------------------------? */}
                <div className='inline'>
                    <div className='input-control'>
                        <label className='label' htmlFor="area">Area</label>

                        <select defaultValue={data[0]?.area} name="area" id="area" required>
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

                        <select name="status" id="status" defaultValue={data[0]?.status} required>
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

                        <textarea defaultValue={data[0]?.comments} name="comments" id="comments"></textarea>
                    </div>

                </div>
                
                <button>Update</button>

            </Form>
        </Modal>
    )
}

export default EditReport
export async function loader({ params }) {
    const id = params.id

    const data = await client.get(`/reports/${id}`)
    return data.data
}


export async function action({ request }) {
    const form = await request.formData()   

    const report = {
        id: form.get('id'),
        report: form.get('report'),
        reporter: form.get('reporter'),
        status: form.get('status'),
        area: form.get('area'),
        comments: form.get('comments'),
        image: '',
        color: (form.get('status') == 'Urgent')?'red':'orange'
    }
    console.log(report)
    const response = await client.put('/reports', report)
    if (response.status === 200) {
        return redirect('/report')
    }



}