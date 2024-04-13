import React from 'react';
import '../CSS/Home.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Home = () => {
 
  return (
   
    <div className='home'>
      <Navbar/>
      <br /><br /><br /><br /><br /><br />
      <div className='typo'>
      <h1>
      Celebrating your contributions! 
      </h1>
      </div>

      <div className='typo1'>
      <h3>Explore recognition programs and milestones <br /> to acknowledge and appreciate the dedication of our incredible team.</h3>
      </div>
      <br /><br />
      <Button variant="contained"  className='btn'style={{backgroundColor:'antiquewhite',  width:'20%' }} disableElevation>
        <Link to={'/userlog'} style={{textDecoration:'none',color:'black'}}>Get Started</Link>
      
    </Button>
      </div>
    
  )
}

export default Home