import React from 'react'
import MiniHeader from './MiniHeader'
import { Outlet } from 'react-router-dom'

function ReportLayout() {
    return (
        <>
            <MiniHeader name='Report' page='/report' />           
                <Outlet />

            
        </>
    )
}

export default ReportLayout


