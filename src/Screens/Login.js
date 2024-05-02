import React, {useState} from 'react';
import '../Styles/Login.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{

      console.log(userCredential);
    }).catch((error)=>{

      console.log(error);
    })
   
  }


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
          <input type="email"  placeholder="Correo electronico" value={email} onChange={(e) =>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password"  placeholder="Contraseña" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <button onClick={login} className="register-btn">Entra</button>
        <p>
          ¿No tienes una cuenta?{' '}
          <a href="./SignUp">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
