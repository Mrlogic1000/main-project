import React from 'react'
import Tables from '../components/Tables'
import client from '../HTTPRequest'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { Button } from '@mui/material'

// const users = useLoaderData()

function Users() {
  const users = useLoaderData()
  console.log(users)
  const navigate = useNavigate()






  return (
    <>
      {/* <Tables datas={users}
        edit='/edit-user'
        link='create-user'
        heads={reportHead}
        title='User'       > */}
      {
        users?.map((user, index) => (
          <Card
            key={index}
            image={user.image}
            username={user.username}
            role={user.role}
            email={user.email}
            phone={user.phoneNumber}
            id={user.id}
          />


        ))
      }
      {/* </Tables> */}

      <Button variant="contained">Contained</Button>
    </>
  )
}

export default Users

export async function loader() {
  const data = await client.get('/users')
  return data.data
}