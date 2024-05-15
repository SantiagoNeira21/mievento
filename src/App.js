import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from  './Screens/Home'
import Reservas from './Screens/Reservas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/Home" element={<Home />} />
        <Route path="/Reservas" element={<Reservas/>}/>
      </Routes>
    </Router>
  );
}

export default App;