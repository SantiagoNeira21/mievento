import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from  './Screens/Home'
import Reservas from './Screens/Reservas';
import AdminDashboard from './Screens/AdminDashboard';
import FormularioPersonal from './Screens/FormularioPersonal';
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
        <Route path = "/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;