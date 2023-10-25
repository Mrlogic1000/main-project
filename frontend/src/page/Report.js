import React from 'react'
import MiniHeader from '../components/MiniHeader'

function Report() {
  return (
    <>
    <MiniHeader name='Report' page=' / Report'/>
    <div className='table-container'>
      <h3>Report</h3>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>Report</th>
            <th>Reporter</th>
            <th>Status</th>
            <th>Outlet</th>
            <th>Comments</th>
            <th>Date</th>
            <th>Image</th>


          </tr>
        </thead>
        <tbody className='table-body'>
          <tr>
            <td>Intercom is faulty</td>
            <td>Adewale</td>
            <td>Urgent</td>
            <td>Room</td>          
            <td>It is an urgent because there is a guest</td>
            <td>20-10-2023</td>
            <td>.....</td>
            
            </tr>
          <tr>
            <td>Intercom is faulty</td>
            <td>Adewale</td>
            <td>Urgent</td>
            <td>Room</td>          
            <td>It is an urgent because there is a guest</td>
            <td>20-10-2023</td>
            <td>.....</td>
            
            </tr>
          <tr>
            <td>Intercom is faulty</td>
            <td>Adewale</td>
            <td>Urgent</td>
            <td>Room</td>          
            <td>It is an urgent because there is a guest</td>
            <td>20-10-2023</td>
            <td>.....</td>
            
            </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Report