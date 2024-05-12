import React from 'react';
import '../Styles/Home.css';
import Navbar from '../Components/Navbar/Navbar';

const Home = () => {
   
    return (
        <div  className="Home">
          <Navbar/>
          <h1 className="Home-h1">
             Bienvenido a nuestra página de reservas de eventos
            </h1>

          <p className="Home-p">

            ¡Encuentra y reserva los mejores eventos cerca de ti!
            
            </p>

          
        </div>
      );
}

export default Home;

