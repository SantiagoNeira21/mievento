import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { fetchReservations } from '../Peticiones/fetchReservations';
import { fetchPersonal } from '../Peticiones/fetchPersonal';
import { fetchUsers } from '../Peticiones/fetchUsers';
import "../Styles/AdminDashboard.css"

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [personal, setPersonal] = useState([]);
  const navigate = useNavigate();

  const handlePersonal = async () => {
    navigate('/FormularioPersonal');
  };

  useEffect(() => {
    const loadReservations = async () => {
      try {
        const reservationsData = await fetchReservations();
        setReservations(reservationsData);
      } catch (error) {
        console.error("Error al cargar las reservas:", error);
      }
    };

    loadReservations();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const loadPersonal = async () => {
      try {
        const personalData = await fetchPersonal();
        setPersonal(personalData);
      } catch (error) {
        console.error("Error al cargar el personal:", error);
      }
    };

    loadPersonal();
  }, []);

  const handleReservationUpdate = async (updatedReservation) => {
    try {
      // Call the update function here if needed
      console.log('Reserva actualizada exitosamente');
    } catch (error) {
      console.error('Error al actualizar la reserva:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <h1>Panel de Administración</h1>

      <h2>Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de Evento</th>
            <th>Música</th>
            <th>Comida</th>
            <th>Seguridad</th>
            <th>Dirección</th>
            <th>Lugar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.fecha}</td>
              <td>{reservation.tipoEvento}</td>
              <td>{reservation.musica}</td>
              <td>{reservation.comida}</td>
              <td>{reservation.seguridad}</td>
              <td>{reservation.direccion}</td>
              <td>{reservation.lugar}</td>
              <td>
                <button onClick={() => setSelectedReservation(reservation)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReservation && (
        <div>
          <h3>Editar Reserva</h3>
          {/* Formulario para editar la reserva seleccionada */}
          {/* Aquí puedes agregar los campos necesarios para editar los detalles de la reserva */}
          <button onClick={() => handleReservationUpdate(selectedReservation)}>
            Guardar Cambios
          </button>
        </div>
      )}

      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.documento}</td>
              <td>{user.telefono}</td>
              <td>{user.correo}</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Personal</h2>
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Contacto</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.cedula}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.cargo}</td>
              <td>{persona.contacto}</td>
              <td>{persona.disponible ? 'Sí' : 'No'}</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handlePersonal}>Agregar Personal</button>
    </div>
  );
};

export default AdminDashboard;
