import React from 'react'

function Tables({datas}) {
  return (
    <div className='table-container'>
      <h3>Users table</h3>
      <table className='table'>
        <thead className='table-header'>
          <tr>
           <th>Name</th>
           <th>Type</th>
           <th>Status</th>
           <th>Assign</th>           
           <th>OB</th>           
           <th>Date</th>           
           <th>Due Date</th>           
            
          </tr>
        </thead>
        <tbody className='table-body'>
          {
            datas.map((data)=>(
              <tr key={data.id}>
              {/* <td>{data.id}</td> */}
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.status}</td>
              <td>{data.assign}</td>
              <td>{data.ob}</td>
              <td>{data.date}</td>
              <td>{data.due_date}</td>
              </tr>
              
              ))
          }
          
         
          
        </tbody>
      </table>
    </div>
  )
}

export default Tables