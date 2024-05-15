import React,{useEffect, useState} from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);
  const navigate = useNavigate();

  const resrvasBTN = () => {


    navigate('/Reservas');
  }

  const loginBTN = () => {
    navigate('/Login');
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          miEvento.com
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Eventos
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reservas
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Hacer reservas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ver reservas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tendencias
              </a>
            </li>
          </ul>
          <div className="navbar-botones">
          {userName ? (
    <span>Bienvenido, {userName}</span>
  ) : (
    <button type="button" className="btn btn-outline-secondary" onClick={loginBTN}>
      Iniciar Sesión
    </button>
  )}
            <button type="button" class="btn2" onClick={resrvasBTN}>Reserva Ya!</button>  
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
