import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import '../CSS/UserDash.css';
import Navbar from './Navbar';

function UserDashBoard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
   
    <div className='bg'>
       <Navbar/>
      <br /><br />
      <Typography variant="h5" style={{fontFamily:'Times New Roman',fontWeight: 'bold'}}gutterBottom>
           List of Employees
      </Typography>
    <br />
      <table className='table-data'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th >ID</th>
            <th >Name</th>
            <th >Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDashBoard;
