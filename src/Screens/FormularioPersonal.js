import React, { useState } from "react";
import { savePersonal } from "../Peticiones/savePersonal"; // Importa la función para guardar el personal

export default function FormularioPersonal() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [contacto, setContacto] = useState("");
  const [idPersonal, setidPersonal] = useState("");
  const [disponible, setDisponible] = useState(false);

  // Estados adicionales para los campos específicos
  const [implementos, setImplementos] = useState("");
  const [instrumentoPrincipal, setInstrumentoPrincipal] = useState("");
  const [generoMusical, setGeneroMusical] = useState("");
  const [idArtista, setIdArtista] = useState("");
  const [generoArtistico, setGeneroArtistico] = useState("");
  const [estilo, setEstilo] = useState("");
  const [experienciaAños, setExperienciaAños] = useState("");

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleApellidoChange = (e) => setApellido(e.target.value);
  const handleCargoChange = (e) => setCargo(e.target.value);
  const handleContactoChange = (e) => setContacto(e.target.value);
  const handleIDChange = (e) => setidPersonal(e.target.value);
  const handleDisponibleChange = (e) => setDisponible(e.target.checked);

  const handleImplementosChange = (e) => setImplementos(e.target.value);
  const handleInstrumentoPrincipalChange = (e) => setInstrumentoPrincipal(e.target.value);
  const handleGeneroMusicalChange = (e) => setGeneroMusical(e.target.value);
  const handleIdArtistaChange = (e) => setIdArtista(e.target.value);
  const handleGeneroArtisticoChange = (e) => setGeneroArtistico(e.target.value);
  const handleEstiloChange = (e) => setEstilo(e.target.value);
  const handleExperienciaAñosChange = (e) => setExperienciaAños(e.target.value);

  const handleRegistrar = async () => {
    const nuevoRegistro = {
      idPersonal,
      nombre,
      apellido,
      contacto,
      disponible,
      cargo,
      implementos,
      instrumentoPrincipal,
      generoMusical,
      idArtista,
      generoArtistico,
      estilo,
      experienciaAños,
    };

    console.log("Registrando:", nuevoRegistro); // Muestra el objeto en la consola

    try {
      const response = await savePersonal(nuevoRegistro);

      if (response.ok) {
        console.log("Personal guardado exitosamente");

        // Restablecer los campos del formulario
        setidPersonal("");
        setNombre("");
        setApellido("");
        setCargo("");
        setContacto("");
        setDisponible(false);
        setImplementos("");
        setInstrumentoPrincipal("");
        setGeneroMusical("");
        setIdArtista("");
        setGeneroArtistico("");
        setEstilo("");
        setExperienciaAños("");
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
        <input type="text" value={idPersonal} onChange={handleIDChange} />
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

      {/* Campos adicionales basados en el cargo */}
      {cargo === "Músico" && (
        <>
          <div>
            <label>Instrumento Principal:</label>
            <input type="text" value={instrumentoPrincipal} onChange={handleInstrumentoPrincipalChange} />
          </div>
          <div>
            <label>Género Musical:</label>
            <input type="text" value={generoMusical} onChange={handleGeneroMusicalChange} />
          </div>
        </>
      )}

      {(cargo === "Cantante" || cargo === "Bailarín" || cargo === "Músico" || cargo === "DJ") && (
        <>
          <div>
            <label>ID Artista:</label>
            <input type="text" value={idArtista} onChange={handleIdArtistaChange} />
          </div>
          <div>
            <label>Género Artístico:</label>
            <input type="text" value={generoArtistico} onChange={handleGeneroArtisticoChange} />
          </div>
          <div>
            <label>Estilo:</label>
            <input type="text" value={estilo} onChange={handleEstiloChange} />
          </div>
          <div>
            <label>Años de Experiencia:</label>
            <input type="number" value={experienciaAños} onChange={handleExperienciaAñosChange} />
          </div>
        </>
      )}

      {(cargo === "Todero" || cargo === "Seguridad"  || cargo === "Mesero"  || cargo === "Audio" || cargo === "Camarero" )&& (
        <div>
          <label>Implementos:</label>
          <input type="text" value={implementos} onChange={handleImplementosChange} />
        </div>
      )}

      {(cargo === "Cocinero")&& (
        <div>
        <label>Estilo:</label>
        <input type="text" value={estilo} onChange={handleEstiloChange} />
      </div>
      )}

      <button onClick={handleRegistrar}>Registrar</button>
    </div>
  );
}
