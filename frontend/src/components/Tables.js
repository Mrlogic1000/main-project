import React from 'react'

function Tables() {
  return (
    <div className='table-container'>
      <h3>Users table</h3>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr>
            <td>Mrlogic</td>
            <td>Adewale</td>
            <td>Mrlogic@gmail.com</td>
            <td>Admin</td>
            </tr>
          <tr>
            <td>Mrlogic</td>
            <td>Adewale</td>
            <td>Mrlogic@gmail.com</td>
            <td>Admin</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tables