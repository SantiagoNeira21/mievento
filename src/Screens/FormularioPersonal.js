import React, { useState } from "react";
import { savePersonal } from "../Peticiones/savePersonal"; // Importa la función para guardar el personal

export default function FormularioPersonal() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [contacto, setContacto] = useState("");
  const [ID, setID] = useState("");
  const [disponible, setDisponible] = useState(false);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleApellidoChange = (e) => setApellido(e.target.value);
  const handleCargoChange = (e) => setCargo(e.target.value);
  const handleContactoChange = (e) => setContacto(e.target.value);
  const handleIDChange = (e) => setID(e.target.value);
  const handleDisponibleChange = (e) => setDisponible(e.target.checked);

  const handleRegistrar = async () => {
    const nuevoRegistro = {
      ID,
      nombre,
      apellido,
      cargo,
      contacto,
      disponible,
    };

    console.log("Registrando:", nuevoRegistro); // Muestra el objeto en la consola

    try {
      const response = await savePersonal(nuevoRegistro);

      if (response.ok) {
        console.log("Personal guardado exitosamente");

        // Restablecer los campos del formulario
        setID("");
        setNombre("");
        setApellido("");
        setCargo("");
        setContacto("");
        setDisponible(false);
      } else {
        console.error("Error al registrar el personal:", response.status);
      }
    } catch (error) {
      console.error("Error al registrar el personal:", error);
    }
  };

  return (
    <div>
      <h2>Registrar Personal</h2>
      <div>
        <label>Cedula:</label>
        <input type="text" value={ID} onChange={handleIDChange} />
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={handleApellidoChange} />
      </div>
      <div>
        <label>Cargo:</label>
        <select value={cargo} onChange={handleCargoChange}>
          <option value="">Seleccione un cargo</option>
          <option value="Camarero">Camarero</option>
          <option value="Seguridad">Seguridad</option>
          <option value="DJ">DJ</option>
<option value="Bailarín">Bailarín</option>
<option value="Cantante">Cantante</option>
<option value="Cocinero">Cocinero</option>
<option value="Músico">Músico</option>
<option value="Mesero">Mesero</option>
<option value="Audio">Audio</option>
<option value="Todero">Todero</option>
<option value="Otro">Otro</option>
</select>
</div>
<div>
<label>Contacto:</label>
<input type="text" value={contacto} onChange={handleContactoChange} />
</div>
<div>
<label>Disponible:</label>
<input type="checkbox" checked={disponible} onChange={handleDisponibleChange} />
</div>
<button onClick={handleRegistrar}>Registrar</button>
</div>
);
}