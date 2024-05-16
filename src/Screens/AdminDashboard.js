import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Importar la instancia de Firestore
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [personal, setPersonal] = useState([]);
  const navigate = useNavigate()

  const handlePersonal = async () => {
    
    navigate('/FormularioPersonal');
  };

  // Obtener reservas desde Firebase (el código para obtener las reservas queda igual)
  useEffect(() => {
    const fetchReservations = async () => {
      const querySnapshot = await getDocs(collection(db, 'reservations'));
      const reservationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservations(reservationsData);
    };

    fetchReservations();
  }, []);

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsCollectionRef = collection(db, 'reservas');
      const querySnapshot = await getDocs(reservationsCollectionRef);
      const reservationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservations(reservationsData);
    };

    fetchReservations();
  }, []);

  // Obtener usuarios desde Cloud Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollectionRef = collection(db, 'usuarios');
      const querySnapshot = await getDocs(usersCollectionRef);
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.data().email,
        name: doc.data().name,
        number: doc.data().number,
      }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPersonal = async () => {
      const personalCollectionRef = collection(db, 'Personal');
      const querySnapshot = await getDocs(personalCollectionRef);
      const personalData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        nombre: doc.data().nombre,
        cedula: doc.data().cedula,
        edad: doc.data().edad,
        tipoPersonal: doc.data().tipoPersonal,
      }));
      setPersonal(personalData);
    };
    fetchPersonal();
  }, []);


  const handleReservationUpdate = async (updatedReservation) => {
    try {
      const reservationRef = doc(db, 'reservations', updatedReservation.id);
      await updateDoc(reservationRef, updatedReservation);
      console.log('Reserva actualizada exitosamente');
    } catch (error) {
      console.error('Error al actualizar la reserva:', error);
    }
  };

  return (
    <div>
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
              <td>{reservation.Lugar}</td>
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
            <th>Correo Electrónico</th>
            <th>Número</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
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
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Edad</th>
            <th>Tipo de Personal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.nombre}</td>
              <td>{persona.cedula}</td>
              <td>{persona.edad}</td>
              <td>{persona.tipoPersonal}</td>
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