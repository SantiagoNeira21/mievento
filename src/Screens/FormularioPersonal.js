import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function FormularioPersonal() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [edad, setEdad] = useState("");
  const [tipoPersonal, setTipoPersonal] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCedulaChange = (e) => {
    setCedula(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleTipoPersonalChange = (e) => {
    setTipoPersonal(e.target.value);
  };

  const handleRegistrar = async () => {
    try {
      const personalCollectionRef = collection(db, "Personal");
      await addDoc(personalCollectionRef, {
        nombre,
        cedula,
        edad,
        tipoPersonal,
      });
      console.log("Personal registrado con éxito");
      // Restablecer los campos del formulario
      setNombre("");
      setCedula("");
      setEdad("");
      setTipoPersonal("");
    } catch (error) {
      console.error("Error al registrar el personal:", error);
    }
  };

  return (
    <div>
      <h2>Registrar Personal</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label>Cédula:</label>
        <input
          type="text"
          value={cedula}
          onChange={handleCedulaChange}
        />
      </div>
      <div>
        <label>Edad:</label>
        <input
          type="text"
          value={edad}
          onChange={handleEdadChange}
        />
      </div>
      <div>
        <label>Tipo de Personal:</label>
        <div>
          <input
            type="radio"
            value="bailarin"
            checked={tipoPersonal === "bailarin"}
            onChange={handleTipoPersonalChange}
          />
          <label>Bailarín</label>
        </div>
        <div>
          <input
            type="radio"
            value="cantante"
            checked={tipoPersonal === "cantante"}
            onChange={handleTipoPersonalChange}
          />
          <label>Cantante</label>
        </div>
        <div>
          <input
            type="radio"
            value="cocinero"
            checked={tipoPersonal === "cocinero"}
            onChange={handleTipoPersonalChange}
          />
          <label>Cocinero</label>
        </div>
        <div>
          <input
            type="radio"
            value="musico"
            checked={tipoPersonal === "musico"}
            onChange={handleTipoPersonalChange}
          />
          <label>Músico</label>
        </div>
        <div>
          <input
            type="radio"
            value="otro"
            checked={tipoPersonal === "otro"}
            onChange={handleTipoPersonalChange}
          />
          <label>Otro</label>
        </div>
      </div>
      <button onClick={handleRegistrar}>Registrar</button>
    </div>
  );
}