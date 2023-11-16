import React from 'react'
import Tables from '../components/Tables'
import client from '../HTTPRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'
// const users = useLoaderData()

function Users() {
 const users = useLoaderData()
 const navigate = useNavigate()

 const deteleItem = async (id) => {
  const num = Number(id)
  const response = await client.delete(`/users/${num}`)
  if (response.status === 200) {
    navigate('/users')
  }

}

 const reportHead = [
  'Username',
  // 'Password',
  'Code',
  'Email',
  'Phone Number',
  'Role',
  'Action',
  // 'Image'
  // 'Image'
  
]
 

  return (
    <>
     <Tables datas={users}
        edit='/edit-user'
        link='create-user'
        heads={reportHead}
        title='User'       >
        {
          users?.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td hidden>{user.password}</td>
              <td >{user.code}</td>              
              <td >{user.email}</td>              
              <td >{user.phoneNumber}</td>              
              <td >{user.role}</td>              
              {/* <td>{user.image}</td> */}
                  
              <td className='action'>
                <Link className='edit-btn' to={`${user.id}`}><MdOutlineEdit /></Link>
                <span className='del-btn' onClick={() => { deteleItem(user.id) }}><MdOutlineDeleteForever /></span>
              </td>
            </tr>

          ))
        }
      </Tables>
    </>
  )
}

export default Users

export async function loader(){
  const data = await client.get('/users')  
  return data.data
}