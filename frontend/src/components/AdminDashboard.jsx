import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import '../CSS/AdminDash.css';
import Navbar from './Navbar';


const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setEmployees([...employees, data]);
      setFormData({ id: '', name: '', email: '' });
    })
    .catch(error => console.error('Error creating employee:', error));
  };

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setEmployees(employees.map(emp => (emp.id === formData.id ? data : emp)));
      setFormData({ id: '', name: '', email: '' });
    })
    .catch(error => console.error('Error updating employee:', error));
  };

  const handleDelete = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
    })
    .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div className='bg'>
         <Navbar/>
      <br /><br />
      <Typography variant="h5" style={{ fontFamily:'Times New Roman', fontWeight: 'bold' }} gutterBottom>
        List of Employees
      </Typography>
      <br />
      <table className='table-data'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>
                <button onClick={() => setFormData(employee)} className='btnedit'>Edit</button>
                <button onClick={() => handleDelete(employee.id)} className='btndelete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <button type="button" className='btncreate' onClick={formData.id ? handleUpdate : handleCreate}>
          {formData.id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default AdminDashboard;
