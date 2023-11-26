import React from 'react'
import MiniHeader from '../components/MiniHeader'
import { Form, redirect } from 'react-router-dom'
import client from '../HTTPRequest'

function CreateUser() {
  return (
    <>
         <MiniHeader name='Profile' page='/profile' />

<div className="profile">   
    <div className="profile-info">
        <Form method='post'>
            <div className='form-control'>
                <label htmlFor="username">Full Name</label>
                <input type="text" name='username' id='username'  placeholder='Adelakun Muheez' />
            </div>

            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input  name='email' type="email" id='email' placeholder='Mrlogic@gmail.com' />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input  name='password' type="password" id='password' placeholder='........' />
            </div>
            <div className='form-control'>
                <label htmlFor="phone">Phone</label>
                <input name='phoneNumber' id='phone' type="text" placeholder='07069344331' />
            </div>
            <div className='form-control'>
                <label htmlFor="code">Code</label>
                <input name='code' id='code' type="text" placeholder='4331' />
            </div>
            <div className='form-control'>
                <label htmlFor="role">Role</label>
                <input  name='role' id='role' type="text" placeholder='admin' />
            </div>
            <button className='btn'>Create</button>
        </Form>
    </div>


</div>
    </>
  )
}

export default CreateUser

export async function action({request}){

    const formdata = await request.formData()

    const user = {
        username: formdata.get('username'),
        email: formdata.get('email'),
        password: formdata.get('password'),
        phoneNumber: formdata.get('phoneNumber'),
        code: formdata.get('code'),
        role: formdata.get('role')
    }

    const result = await client.post('/users',user)
    if(result.status===200) return redirect('/users')


}