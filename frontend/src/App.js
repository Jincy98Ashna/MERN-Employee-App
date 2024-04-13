
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userlog' element={<UserLogin/>}/>
        <Route path='/adminlog' element={<AdminLogin/>}/>
        <Route path='/userdash' element={<UserDashboard/>}/>
        <Route path='/admindash' element={<AdminDashboard/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
