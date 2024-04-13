import React from 'react';
import '../CSS/AdminLogin.css';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className='adlogin'>
      <Navbar/>
      <div className="container">
        <div className="typography">
          <h2>Welcome back, Admin! Please log in to access the admin dashboard.</h2>
          <div className='inputbox'>
            <br />
            <Typography variant="h6" color="initial" style={{fontFamily:' Georgia, serif',fontSize:'25px', color:'#01411c'}}>Admin Login</Typography>
            <br /><br />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br /><br />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <br /><br /><br />
            {/* Redirect to admin dashboard page when the button is clicked */}
            <Button variant="contained" style={{backgroundColor:'#01411cb9'}} component={Link} to="/admindash">Login</Button>
            <br />
            <Typography variant="h6" color="initial" >
              <Link to={'/userlog'} style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Back to User Login</Link>
            </Typography>
            <br /><br /><br /><br />
          </div>
        </div>
        <br /><br /><br />
      </div>
    </div>
  );
}

export default AdminLogin;
