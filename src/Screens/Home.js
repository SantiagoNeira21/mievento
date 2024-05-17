import React from 'react';
import '../Styles/Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <h1 className="Home-h1">Bienvenido a nuestra página de reservas de eventos</h1>
      <p className="Home-p">¡Encuentra y reserva los mejores eventos cerca de ti!</p>
    </div>
  );
};

export default Home;