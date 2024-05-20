import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { fetchReservations} from '../Peticiones/fetchReservations';
import { deleteReservation } from '../Peticiones/deleteReservation';
import { fetchUsers } from '../Peticiones/fetchUsers';
import "../Styles/UserDashboard.css";

const UserDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  const handleReservationDelete = async (reservationId) => {
    try {
      await deleteReservation(reservationId);
      setReservations(reservations.filter(reservation => reservation.id !== reservationId));
      console.log('Reserva eliminada exitosamente');
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
    }
  };

  const userName = localStorage.getItem('userName');
  const userLastName = localStorage.getItem('userLastName');

  return (
    <div>
      <Navbar/>
      <h1>Panel de Usuario</h1>
      

      <h2>Mis Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de Evento</th>
            <th>Música</th>
            <th>Comida</th>
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
              <td>{reservation.direccion}</td>
              <td>{reservation.lugar}</td>
              <td>
                <button onClick={() => handleReservationDelete(reservation.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Mi Perfil</h3>
      <h2>Hola, {userName} {userLastName}</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.nombre} {user.apellido}</h3>
            <p>Documento: {user.documento}</p>
            <p>Teléfono: {user.telefono}</p>
            <p>Correo Electrónico: {user.correo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;