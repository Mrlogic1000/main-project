import React from 'react'
import { Link} from 'react-router-dom'

function Tables({datas,link,title,linkId}) {
  return (
    <div className='table-container'>
      <div className="table-header">
      <h3>Users table</h3>
      <Link className='link-btn' to={link}>{title}</Link>
      </div>
      <table className='table'>
        <thead className='thead'>
          <tr>
           <th>Name</th>
           <th>Type</th>
           <th>Status</th>
           <th>Assign</th>           
           <th>OB</th>           
           <th>Date</th>           
           <th>Due Date</th>           
           <th>View</th>           
            
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
              <td><Link to={`${data.id}`}>View</Link></td>
              </tr>
              
              ))
          }
          
         
          
        </tbody>
      </table>
    </div>
  )
}

export default Tables