import React, { useState } from 'react'
import MiniHeader from '../components/MiniHeader'
// import profile from '../images/profile1.jpg'
import styled from 'styled-components'
import client from '../HTTPRequest'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { StyleAvarterWithIcon, StyleIcon } from '../components/style/Avarter.style'
import { StyleCard } from '../components/style/Cards'
import { Absoulute } from '../components/style/Position.style'
import { MdDelete } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im"

// import { useParams } from 'react-router-dom'

function Profile() {
    const [file, setFile] = useState()
    const [image, setImage] = useState(null)
    const user = useLoaderData()
    const navigate = useNavigate()
    console.log(user)

    const upLoadImage = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        const result = await client.put(`/users/${user.id}`, formData)
        navigate(`/users/${user.id}`)


    }
    const ProfileImageStyle = styled.div`
    
    `
    return (

        <>
            <MiniHeader name='Profile' page='/profile' />

            <div className="profile">
                <StyleCard width={'350px'}>



                    {image ? (<StyleAvarterWithIcon>
                        <img src={URL.createObjectURL(image)} alt="" />

                        <Absoulute bottom={'3.5em'} right={'3em'}>

                            <StyleIcon onClick={upLoadImage} size={'24px'} color={'white'} bg={'rgb(32,156,238)'} >
                                <ImCheckmark />
                            </StyleIcon>

                        </Absoulute>

                        <Absoulute bottom={'3.5em'} left={'3em'}>

                            <StyleIcon onClick={()=>{setImage(null)}} size={'22px'} color={'white'} bg={'red'} >
                                <MdDelete />
                            </StyleIcon>
                        </Absoulute>



                    </StyleAvarterWithIcon>) : (<StyleAvarterWithIcon>
                        <img src={`http://localhost:4000/${user.image}`} alt="" />

                        <Absoulute bottom={'3.5em'} right={'3em'}>
                            <label htmlFor="update">
                                <StyleIcon size={'22px'} color={'white'} bg={'rgb(32,156,238)'} >
                                    <FaCamera />
                                </StyleIcon>
                            </label>
                        </Absoulute>
                    </StyleAvarterWithIcon>)

                    }


                    <input hidden onChange={(e) => { setImage(e.target.files[0]) }} type="file" accept='image/jpeg image/png image/jpg' id='update' />
                    {/* <button onClick={upLoadImage}>Upload</button> */}

                </StyleCard>
                <div className="profile-info">
                    <Form method='post'>
                        <div className='form-control'>
                            <label htmlFor="Full Name">Full Name</label>
                            <input type="text" name='username' defaultValue={user?.username} placeholder='Adelakun Muheez' />
                        </div>
                        <input hidden type="number" name='id' defaultValue={user?.id} placeholder='Adelakun Muheez' />


                        <div className='form-control'>
                            <label htmlFor="Email">Email</label>
                            <input defaultValue={user?.email} name='email' type="email" placeholder='Mrlogic@gmail.com' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <input defaultValue={user?.password} name='password' type="password" placeholder='........' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phone">Phone</label>
                            <input defaultValue={user?.phoneNumber} name='phoneNumber' type="text" placeholder='07069344331' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phone">Role</label>
                            <input defaultValue={user?.role} name='role' type="text" placeholder='07069344331' />
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