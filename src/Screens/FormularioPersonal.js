import React, { useState } from "react";
import { savePersonal } from "../Peticiones/savePersonal";

export default function FormularioPersonal() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [contacto, setContacto] = useState("");
  const [idPersonal, setidPersonal] = useState("");
  const [disponible, setDisponible] = useState(false);
  const [implementos, setImplementos] = useState("");
  const [instrumentoPrincipal, setInstrumentoPrincipal] = useState("");
  const [generoMusical, setGeneroMusical] = useState("");
  const [idArtista, setIdArtista] = useState("");
  const [generoArtistico, setGeneroArtistico] = useState("");
  const [estilo, setEstilo] = useState("");
  const [experienciaAños, setExperienciaAños] = useState("");
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validar nombre
    if (!nombre.trim()) {
      errors.nombre = "El nombre es requerido";
      isValid = false;
    }

    // Validar apellido
    if (!apellido.trim()) {
      errors.apellido = "El apellido es requerido";
      isValid = false;
    }

    // Validar cargo
    if (!cargo.trim()) {
      errors.cargo = "El cargo es requerido";
      isValid = false;
    }

    // Validar contacto
    if (!contacto.trim()) {
      errors.contacto = "El contacto es requerido";
      isValid = false;
    }

    // Validar cédula
    if (!idPersonal.trim()) {
      errors.idPersonal = "La cédula es requerida";
      isValid = false;
    }

    // Validaciones adicionales para Músico
    if (cargo === "Músico") {
      if (!instrumentoPrincipal.trim()) {
        errors.instrumentoPrincipal = "El instrumento principal es requerido";
        isValid = false;
      }

      if (!generoMusical.trim()) {
        errors.generoMusical = "El género musical es requerido";
        isValid = false;
      }
    }

    // Validaciones adicionales para Cantante, Bailarín, Músico y DJ
    if (
      cargo === "Cantante" ||
      cargo === "Bailarín" ||
      cargo === "Músico" ||
      cargo === "DJ"
    ) {
      if (!idArtista.trim()) {
        errors.idArtista = "El ID del artista es requerido";
        isValid = false;
      }

      if (!generoArtistico.trim()) {
        errors.generoArtistico = "El género artístico es requerido";
        isValid = false;
      }

      if (!estilo.trim()) {
        errors.estilo = "El estilo es requerido";
        isValid = false;
      }

      if (!experienciaAños.trim()) {
        errors.experienciaAños = "Los años de experiencia son requeridos";
        isValid = false;
      }
    }

    // Validaciones adicionales para Todero, Seguridad, Mesero, Audio y Camarero
    if (
      cargo === "Todero" ||
      cargo === "Seguridad" ||
      cargo === "Mesero" ||
      cargo === "Audio" ||
      cargo === "Camarero"
    ) {
      if (!implementos.trim()) {
        errors.implementos = "Los implementos son requeridos";
        isValid = false;
      }
    }

    // Validación adicional para Cocinero
    if (cargo === "Cocinero") {
      if (!estilo.trim()) {
        errors.estilo = "El estilo es requerido";
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  };

  const handleRegistrar = async () => {
    if (validateForm()) {
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

      console.log("Registrando:", nuevoRegistro);

      try {
        const response = await savePersonal(nuevoRegistro);

        if (response.ok) {
          console.log("Personal guardado exitosamente");

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
          setErrors({});
        } else {
          console.error("Error al registrar el personal:", response.status);
        }
      } catch (error) {
        console.error("Error al registrar el personal:", error);
      }
    }
  };

  return (
    <div>
      <h2>Registrar Personal</h2>
      <div>
        <label>Cédula:</label>
        <input type="text" value={idPersonal} onChange={handleIDChange} />
        {errors.idPersonal && <span>{errors.idPersonal}</span>}
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
        {errors.nombre && <span>{errors.nombre}</span>}
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={handleApellidoChange} />
        {errors.apellido && <span>{errors.apellido}</span>}
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
        {errors.cargo && <span>{errors.cargo}</span>}
      </div>
      <div>
        <label>Contacto:</label>
        <input type="text" value={contacto} onChange={handleContactoChange} />
        {errors.contacto && <span>{errors.contacto}</span>}
      </div>
      <div>
        <label>Disponible:</label>
        <input
          type="checkbox"
          checked={disponible}
          onChange={handleDisponibleChange}
        />
      </div>

      {/* Campos adicionales basados en el cargo */}
      {cargo === "Músico" && (
        <>
          <div>
            <label>Instrumento Principal:</label>
            <input
              type="text"
              value={instrumentoPrincipal}
              onChange={handleInstrumentoPrincipalChange}
            />
            {errors.instrumentoPrincipal && (
              <span>{errors.instrumentoPrincipal}</span>
            )}
          </div>
          <div>
            <label>Género Musical:</label>
            <input
              type="text"
              value={generoMusical}
              onChange={handleGeneroMusicalChange}
            />
            {errors.generoMusical && <span>{errors.generoMusical}</span>}
          </div>
        </>
      )}

      {(cargo === "Cantante" ||
        cargo === "Bailarín" ||
        cargo === "Músico" ||
        cargo === "DJ") && (
        <>
          <div>
            <label>ID Artista:</label>
            <input
              type="text"
              value={idArtista}
              onChange={handleIdArtistaChange}
            />
            {errors.idArtista && <span>{errors.idArtista}</span>}
          </div>
          <div>
            <label>Género Artístico:</label>
            <input
              type="text"
              value={generoArtistico}
              onChange={handleGeneroArtisticoChange}
            />
            {errors.generoArtistico && <span>{errors.generoArtistico}</span>}
          </div>
          <div>
            <label>Estilo:</label>
            <input type="text" value={estilo} onChange={handleEstiloChange} />
            {errors.estilo && <span>{errors.estilo}</span>}
          </div>
          <div>
            <label>Años de Experiencia:</label>
            <input
              type="number"
              value={experienciaAños}
              onChange={handleExperienciaAñosChange}
            />
            {errors.experienciaAños && <span>{errors.experienciaAños}</span>}
          </div>
        </>
      )}

      {(cargo === "Todero" ||
        cargo === "Seguridad" ||
        cargo === "Mesero" ||
        cargo === "Audio" ||
        cargo === "Camarero") && (
        <div>
          <label>Implementos:</label>
          <input
            type="text"
            value={implementos}
            onChange={handleImplementosChange}
          />
          {errors.implementos && <span>{errors.implementos}</span>}
        </div>
      )}

      {cargo === "Cocinero" && (
        <div>
          <label>Estilo:</label>
          <input type="text" value={estilo} onChange={handleEstiloChange} />
          {errors.estilo && <span>{errors.estilo}</span>}
        </div>
      )}

      <button onClick={handleRegistrar}>Registrar</button>
    </div>
  );
}