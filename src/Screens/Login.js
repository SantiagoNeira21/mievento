import React, { useState } from 'react';
import '../Styles/Login.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {

    if (email === 'Admin' && password === '123456') {
      // Redirigir a la pantalla de AdminDashboard
      navigate('/AdminDashboard');
      return;
    }



    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Bienvenido, " + email, password);
        console.log(userCredential);
        navigate('/home'); // Redirigir a la pantalla de Home 
        localStorage.setItem('userName', email.split('@')[0]);
      })
      .catch((error) => {
        console.log("Lo sentimos, " + email, password + " no son correctos.");
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops... revisa correo y contrasena',
          text: 'Algo salió mal!',
          footer: '<a href>Por qué tengo este problema?</a>'
      });
      });
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <div className="menu">Menú</div>
        <h1>miEvento.Com</h1>
      </div>
      <div className="right-section">
        <h1>Inicia Sesión</h1>
        <h3>Ingresa tu información</h3>
        <div className="form-group">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} className="register-btn">
          Entra
        </button>
        <p>
          ¿No tienes una cuenta?{' '}
          <a href="./SignUp">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;