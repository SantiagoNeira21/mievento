import React, { useState } from 'react';
import '../Styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { saveUsuarios } from '../Peticiones/saveUsuarios';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      number,
      email,
      password,
    };

    try {
      const isRegistered = await saveUsuarios(userData);

      if (isRegistered) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        console.log("Registrado existosamente como, " + name + " " + number + " " + email + " " + password);
        navigate('/home');
      } else {
        console.log("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <div className="menu">Menú</div>
        <h1>miEvento.Com</h1>
      </div>
      <div className="right-section">
        <h1>Registro</h1>
        <h3>Ingresa tu información</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Teléfono"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
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
        <button onClick={signup} className="register-btn">Entra</button>
        <p>
          ¿Ya tienes una cuenta?{' '}
          <a href="/">Ingresa aquí</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
