import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" >
      <Toolbar className='nav'>
       
        <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
        InnovateHub
        </Typography>
        <Button color="inherit" className='btn'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          </Button>

          <Button color="inherit" className='btn'>
          <Link to={'/userlog'} style={{textDecoration:'none',color:'white'}}>Login</Link>
          </Button>

          
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar