import React from 'react'
import Headers from '../components/Headers'
import SideBar from '../components/SideBar'

function Error() {
  return (
    <div className="app">

    <div className='app-body'>

      <SideBar/>

      <Headers/>
      <div className="content">
         <h1>Check the connection to the backend</h1>

        </div>

      

    </div>
  </div>
  )
}

export default Error