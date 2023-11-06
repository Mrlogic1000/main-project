import React from 'react'
import { Link} from 'react-router-dom'

function Tables({children,link,title,heads}) {
  
  
  
  return (
    
    <div className='table-container'>
      <div className="table-header">
      <h3>{title}</h3>
      <Link className='link-btn' to={link}>New {title}</Link>
      </div>
      <table className='table'>
        <thead className='thead'>
          <tr>
          {heads.map((head,index)=>(
             <th key={index}>{head}</th>
          ))}            
          </tr>
        </thead>
        <tbody className='table-body'>    
        {children}         
          
        </tbody>
      </table>
    </div>
  )
}

export default Tables