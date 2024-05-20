import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from  './Screens/Home'
import Reservas from './Screens/Reservas';
import AdminDashboard from './Screens/AdminDashboard';
import FormularioPersonal from './Screens/FormularioPersonal';
import UserDashboard from './Screens/userDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/Home" element={<Home />} />
        <Route path="/Reservas" element={<Reservas/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard />}/>
        <Route path='/FormularioPersonal' element={<FormularioPersonal />}/>
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        <Route path = "/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;