
import React from 'react';
import '../CSS/UserLogin.css';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const UserLogin = () => {

  // Function to handle login
  const handleLogin = () => {
    // Redirect to the user dashboard page
    // You can replace '/userdashboard' with the actual path to your user dashboard
    window.location.href = '/userdash';
  };

  return (
    <div className='login'>
      <Navbar/>
      <div className="container">
        <div className="typography" >
          <h1 style={{color:'#01411c'}}>Welcome to Our InnovateHub community!</h1>
          <p>Explore the latest updates and connect with your colleagues. Join the conversation! Connect with colleagues,<br /> share insights, and build meaningful relationships within our vibrant employee community.
          Let's embark <br />on this journey together, embracing change, fostering collaboration, and celebrating each other's <br /> Together, we'll shape a brighter future for our organization and for each other.</p>
        </div>
      
        <div className="login-form">
          <br /><br /><br /><br />
          <div className='input'>
            <br />
            <Typography variant="h6" color="initial" style={{fontFamily:' Georgia, serif',fontSize:'25px', color:'#01411cb9'}}>User Login</Typography>
            <TextField id="outlined-basic" label="Email" variant="standard" />
            <br /><br />
            <TextField id="outlined-basic" label="Password" variant="standard" />
            <br /><br /><br />
            {/* Call handleLogin function when the button is clicked */}
            <Button variant="contained" style={{backgroundColor:'#01411cb9'}} onClick={handleLogin}>Login</Button>  
            <br />
            <Typography variant="h6" color="initial" >  <Link to={'/adminlog'} style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Not a User? Admin Login</Link></Typography>
            <br /><br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
