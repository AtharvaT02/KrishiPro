import React from 'react'
import Background from './components/basics/Background';
import Signup from './components/basics/Signup';
import Login from './components/basics/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import {Link,NavLink} from 'react-router-dom';
import Dashboard from './components/basics/Dashboard';
import DashboardAuth from './components/basics/Dashboardwithauth';
const App = () => {
  return (
    <>
    
    <Routes>
      <Route exact path="/" element={<Signup/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/fetch_normal" element={<Dashboard/>}></Route>
      <Route exact path="/fetch_with_auth" element={<DashboardAuth/>}></Route>
    </Routes> 
    
    
    </>
    
  )
}

export default App