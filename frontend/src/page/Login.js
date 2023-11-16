import React from 'react'
import login from '../images/login5.png'
import { Form, redirect } from 'react-router-dom'
import {FaUser,FaLock} from 'react-icons/fa'
import client from '../HTTPRequest'

function Login() {
    return (
        <div className='login'>

            <div className="login-image">
                <img src={login} alt="" />

            </div>
            <div className="login-form">

               <div className="login-form-title">
                <h1>Welcome Back</h1>
                <p>Login to continue</p>
               </div>
               <Form method='post'>
               <div className='input-container'>
                <span className='input-icon'><FaUser/></span> 
                <input name='username' type="text" placeholder='muheez' /></div>
                <div className='input-container'>
                    <span className='input-icon'><FaLock/></span>
                    <input name='password' type="password" placeholder='........' /></div>
              <div className="btn-container">
              <button className='btn'>Login</button>
              </div>
               </Form>

            </div>
        </div>
    )
}

export default Login

export async function action({request}){
    const form = await request.formData()

    const user = {
        username: form.get('username'),
        password: form.get('password')
    }
    console.log(user)
    const result = await client.post('/login', user)
    if(result.status === 200) return redirect('/')

}