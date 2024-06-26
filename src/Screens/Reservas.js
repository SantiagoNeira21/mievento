// Reservas.js
import React, { useState, useEffect } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '../Styles/Reservas.css';
import Navbar from '../Components/Navbar/Navbar';
import { saveReserva } from '../Peticiones/saveReserva';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Swal from 'sweetalert2';

export default function Reservas() {
  const [date, setDate] = useState(null);
  const [eventType, setEventType] = useState(null);
  const [numPeople, setNumPeople] = useState(null);
  const [musicType, setMusicType] = useState(null);
  const [food, setFood] = useState(null);
  const [address, setAddress] = useState(null);
  const [place, setPlace] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userData, setUserData] = useState({});

  const [mapPosition, setMapPosition] = useState(null);

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        const newLatLng = `${e.latlng.lat}, ${e.latlng.lng}`;
        setTimeout(() => {
          setMapPosition(newLatLng);
          map.flyTo(e.latlng, map.getZoom());
        }, 0);
      },
    });

    return mapPosition === null ? null : (
      <>
        <Marker position={mapPosition.split(', ').map(parseFloat)}></Marker>
        {setAddress(mapPosition)}
      </>
    );
  };
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(user);
    }
  }, []);
  const handleReservar = () => {
    const formattedDate = date
      ? `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      : "No seleccionada";
  
    const formData = {
      cliente: userData,
      lugar: place || "No ingresado",
      musica: musicType || "No seleccionada",
      comida: food || "No seleccionada",
      direccion: address || "No ingresada",
      fecha: formattedDate,
      metodoPago: "Tarjeta de crédito",
      evento: {
        type: eventType || "no-seleccionado",
        nombre: eventName || `${eventType || "Evento"} del ${date ? `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}` : "No seleccionada"}`,
        descripcion: eventDescription || `Un ${eventType || "evento"} en ${place || "un lugar no especificado"}`,
        fecha: formattedDate,
        horaInicio: startTime || "19:00",
        horaFin: endTime || "23:00",
        capacidadMaxima: numPeople ? parseInt(numPeople.split(" - ")[0]) : 0,
        tipoMusica: musicType ? musicType.toUpperCase() : "NO_SELECCIONADA",
        tipoComida: food === "Plato basico" ? "BASICO" : food === "Plato fuerte" ? "FUERTE" : "SIN_COMIDA",
        administrador: {
          documento: 123456789,
          nombre: "Ana",
          apellido: "Gómez",
          telefono: "3001234567",
          correo: "ana.gomez@example.com"
        }
      }
    };
  
    console.log(formData);
    saveReserva(formData)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Reserva realizada con éxito!',
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Algo salió mal!',
        text: 'Por favor, revisa los datos de la reserva.',
        footer: '<a href>¿Por qué tengo este problema?</a>'
      });
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Navbar/>
      <div className="custom-calendar">
      <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
      </div>
      <h2>Elige lo que mejor se acomode a lo que requieres:</h2>
      <div>
        <label><h2>Tipo de evento:</h2></label>
        <div>
          <input
            type="radio"
            value="QuinceAnos"
            checked={eventType === 'quinceAnos'}
            onChange={(e) => setEventType(e.target.value)}
          />
          <label>15 años</label>
        </div>
        <div>
          <input
            type="radio"
            value="Rumba"
            checked={eventType === 'Rumba'}
            onChange={(e) => setEventType(e.target.value)}
          />
          <label>Rumba</label>
        </div>
        <div>
          <input
            type="radio"
            value="Boda"
            checked={eventType === 'Boda'}
            onChange={(e) => setEventType(e.target.value)}
          />
          <label>Boda</label>
        </div>
      </div>

      <div>
        <label><h2>Tipo de musica:</h2></label>
        <div>
          <input
            type="radio"
            value="Urbana"
            checked={musicType === 'Urbana'}
            onChange={(e) => setMusicType(e.target.value)}
          />
          <label>Urbana</label>
        </div>
        <div>
          <input
            type="radio"
            value="Ochentas"
            checked={musicType === 'Ochentas'}
            onChange={(e) => setMusicType(e.target.value)}
          />
          <label>Ochentas</label>
        </div>
        <div>
          <input
            type="radio"
            value="Clasica"
            checked={musicType === 'Clasica'}
            onChange={(e) => setMusicType(e.target.value)}
          />
          <label>Clasica</label>
        </div>
      </div>

      <div>
        <label><h2>Cantidad de personas:</h2></label>
        <div>
          <input
            type="radio"
            value="-500"
            checked={numPeople === '-500'}
            onChange={(e) => setNumPeople(e.target.value)}
          />
          <label>-500</label>
        </div>
        <div>
          <input
            type="radio"
            value="500 - 2000"
            checked={numPeople === '500 - 2000'}
            onChange={(e) => setNumPeople(e.target.value)}
          />
          <label>500 - 2000</label>
        </div>
        <div>
          <input
            type="radio"
            value="+2000"
            checked={numPeople === '+2000'}
            onChange={(e) => setNumPeople(e.target.value)}
          />
          <label>+2000</label>
        </div>
      </div>

      <div>
        <label><h2>Comida</h2></label>
        <div>
          <input
            type="radio"
            value="Plato basico"
            checked={food === 'Plato basico'}
            onChange={(e) => setFood(e.target.value)}
          />
          <label>Plato basico</label>
        </div>
        <div>
          <input
            type="radio"
            value="Plato fuerte"
            checked={food === 'Plato fuerte'}
            onChange={(e) => setFood(e.target.value)}
          />
          <label>Plato fuerte</label>
        </div>
        <div>
          <input
            type="radio"
            value="Sin comida"
            checked={food === 'Sin comida'}
            onChange={(e) => setFood(e.target.value)}
          />
          <label>Sin comida</label>
        </div>
      </div>

      <div>
        <label><h2>Tipo de lugar</h2></label>
        <div>
          <input
            type="radio"
            value="Campestre"
            checked={place === 'Campestre'}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>Campestre</label>
        </div>
        <div>
          <input
            type="radio"
            value="Abierto"
            checked={place === 'Abierto'}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>Abierto</label>
        </div>
        <div>
          <input
            type="radio"
            value="Cerrado"
            checked={place === 'Cerrado'}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>Cerrado</label>
        </div>
      </div>

      <div>
        <label><h2>Dirección:</h2></label>

        <MapContainer center={[4.716, -74.027]} zoom={13} scrollWheelZoom={false} style={{ height: '250px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
        
      </div>

      <div>
        <label><h2>Nombre del evento:</h2></label>
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </div>

      <div>
        <label><h2>Descripción del evento:</h2></label>
        <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
      </div>

      <div>
        <label><h2>Hora de inicio:</h2></label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>

      <div>
        <label><h2>Hora de finalización:</h2></label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>

      <button onClick={handleReservar}>Reservar</button>
    </div>
  );
}
