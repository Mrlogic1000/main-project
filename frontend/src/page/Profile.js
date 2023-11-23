import React, { useState } from 'react'
import MiniHeader from '../components/MiniHeader'
import profile from '../images/profile1.jpg'
import client from '../HTTPRequest'
import { Form, redirect, useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function Profile() {
    const [file, setFile] = useState()
    const user = useLoaderData()
    console.log(user.image.data)

    const upLoadImage = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', e.target.files[0])       
        const result = await client.put(`/users/${user.id}`, formData)
      setFile(result.data)
       

    }
    return (

        <>
            <MiniHeader name='Profile' page='/profile' />

            <div className="profile">
                <div className="profile-data">

                    <div className="profile-image">
                        <h4 className='profile-title'>{user.username}</h4>

                        <label htmlFor="update"><img src={`data:image/png;base64,${user.image.data}`} alt="" /></label>
                        <input hidden onChange={upLoadImage} type="file" accept='image/jpeg image/png image/jpg' id='update' />
                        {/* <button onClick={upLoadImage}>Upload</button> */}

                    </div>

                </div>
                <div className="profile-info">
                    <Form method='post'>
                        <div className='form-control'>
                            <label htmlFor="Full Name">Full Name</label>
                            <input type="text" name='username' defaultValue={user.username} placeholder='Adelakun Muheez' />
                        </div>
                        <input hidden type="number" name='id' defaultValue={user.id} placeholder='Adelakun Muheez' />


                        <div className='form-control'>
                            <label htmlFor="Email">Email</label>
                            <input defaultValue={user.email} name='email' type="email" placeholder='Mrlogic@gmail.com' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <input defaultValue={user.password} name='password' type="password" placeholder='........' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phone">Phone</label>
                            <input defaultValue={user.phoneNumber} name='phoneNumber' type="text" placeholder='07069344331' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phone">Role</label>
                            <input defaultValue={user.role} name='role' type="text" placeholder='07069344331' />
                        </div>
                        <button className='btn'>Update</button>
                    </Form>
                </div>


            </div>
        </>
    )
}

export default Profile

export async function loader({ params }) {
    const id = params.id
    const result = await client.get(`/users/${id}`)
    return result.data
}


export async function action({ request }) {

    const form = await request.formData()
    const user = {
        id: form.get('id'),
        username: form.get('username'),
        password: form.get('password'),
        code: form.get('code'),
        email: form.get('email'),
        phoneNumber: form.get('phoneNumber'),
        role: form.get('role')
    }
    console.log(user)

    const result = await client.put(`/users`, user)
    if (result.status === 200) return redirect('/users')

}