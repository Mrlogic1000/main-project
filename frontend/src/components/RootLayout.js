import React from 'react'
import TopBar from './TopBar';

import { Outlet } from 'react-router-dom';
import { Box, Grid, styled, Paper } from '@mui/material';

function RootLayout() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (


    <div className='container' >


      <div className='topBar'>
        <TopBar />
      </div>





      <div className="page">

        
         
          <Outlet />
       

      </div>









    </div >

  )
}

export default RootLayout