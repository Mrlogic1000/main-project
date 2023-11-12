import React from 'react'
import client from '../HTTPRequest'
import Tables from '../components/Tables'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
// import { reportHead } from '../components/utilities'
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md'

function Report() {
  const navigate = useNavigate()

  const deteleItem = async (id) => {
    const num = Number(id)
    const response = await client.delete(`/reports/${num}`)
    if (response.status === 200) {
      navigate('/report')
    }

  }

  const reports = useLoaderData()
  // console.log(datas)


  const reportHead = [
    'Report',
    'Reporter',
    'Status',
    'Area',
    'Comments',
    'Date',
    'image'
  ]
  return (
    <>
      <Tables datas={reports}
        edit='/edit-report'
        link='create-report'
        heads={reportHead}
        title='Report'       >
        {
          reports?.map((report, index) => (
            <tr key={index} style={{ borderLeftColor: report.color }}>
              <td>{report.report}</td>
              <td>{report.reporter}</td>
              <td >{report.status}</td>
              <td>{report.area}</td>
              <td>{report.comments}</td>
              {/* <td>{report.image}</td> */}
              <td>{report.date}</td>              
              <td className='action'>
                <Link className='edit-btn' to={`${report.id}`}><MdOutlineEdit /></Link>
                <span className='del-btn' onClick={() => { deteleItem(report.id) }}><MdOutlineDeleteForever /></span>
              </td>
            </tr>

          ))
        }
      </Tables>

    </>
  )
}

export default Report

export async function loader() {
  const data = await client.get('/reports')
  return data.data
}