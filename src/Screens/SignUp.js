import React,{useState} from 'react';
import '../Styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const SignUp = () => {
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[name, setName] = useState("");
  const[number, setNumber]= useState("");

  const signup =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        <h1>Registro</h1>
        <h3>Ingresa tu información</h3>
        <div className="form-group">
          <input type="name"  placeholder="Nombre" value={name} onChange={(e) =>setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="number"  placeholder="Telefono" value={number} onChange={(e) =>setNumber(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="email"  placeholder="Correo electronico" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password"  placeholder="Contraseña" value={password} onChange={(e) =>setPassword(e.target.value)}/>
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
