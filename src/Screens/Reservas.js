import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '../Styles/Reservas.css';

// Importa el archivo CSS
export default function Reservas() {


  const [date, setDate] = useState(null);
  const [eventType, setEventType] = useState(null);
  const [numPeople, setNumPeople] = useState(null);
  const [musicType, setMusicType] = useState(null);
  const [food, setFood] = useState(null);
  const [security, setSecurity] = useState(null);
  const [address, setAddress]= useState(null);
  const [place, setPlace]= useState(null);

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

const handlePlaceChange = (e) => {

setPlace(e.target.value);
};

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const handleMusicTypeChange = (e) => {
    setMusicType(e.target.value);
  };

  const handleFoodChange = (e) => {
    setFood(e.target.value);
  };

  const handleSecurityChange = (e) => {
    setSecurity(e.target.value);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.value;
    setDate(selectedDate);
    console.log(`Fecha seleccionada: ${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleReservar = () => {
    const formData = {
      fecha: date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : 'No seleccionada',
      tipoEvento: eventType || 'No seleccionado',
      musica: musicType || 'No seleccionada',
      comida: food || 'No seleccionada',
      seguridad: security || 'No seleccionada',
      direccion: address || 'No ingresada',
      Lugar : place || "No ingresada",
    };
    console.log('Información de la reserva:', formData);
  };


  return (
    <div className="card flex justify-content-center">
      <div className="custom-calendar">
        <Calendar value={date} onChange={handleDateChange} inline showWeek />
      </div>
      <h2>Elige lo que mejor se acomode a lo que requieres:</h2>
      <div>
        <label><h2>Tipo de evento:</h2></label>
        <div>
          <input
            type="radio"
            value="social"
            checked={eventType === 'social'}
            onChange={handleEventTypeChange}
          />
          <label>Social (Boda, religioso, etc)</label>
        </div>
        <div>
          <input
            type="radio"
            value="cultural"
            checked={eventType === 'cultural'}
            onChange={handleEventTypeChange}
          />
          <label>Cultural</label>
        </div>
        <div>
          <input
            type="radio"
            value="academic"
            checked={eventType === 'academic'}
            onChange={handleEventTypeChange}
          />
          <label>Académico</label>
        </div>
      </div>


      {/* #######################*/}

      <div>
        <label><h2>Tipo de musica:</h2> </label>
        <div>
          <input
            type="radio"
            value="Clasica"
            checked={musicType === 'Clasica'}
            onChange={handleMusicTypeChange}
          />
          <label>Juvenil</label>
        </div>
        <div>
          <input
            type="radio"
            value="Juvenil"
            checked={musicType === 'Juvenil'}
            onChange={handleMusicTypeChange}
          />
          <label>ViejoTeca</label>
        </div>
        <div>
          <input
            type="radio"
            value="ViejoTeca"
            checked={musicType === 'ViejoTeca'}
            onChange={handleMusicTypeChange}
          />
          <label>Académico</label>
        </div>
      </div>

      {/* #######################*/}

      <div>
        <label><h2>Cantidad de personas:</h2> </label>
        <div>
          <input
            type="radio"
            value="-500"
            checked={numPeople === '-500'}
            onChange={handleNumPeopleChange}
          />
          <label>-500</label>
        </div>
        <div>
          <input
            type="radio"
            value="500 - 2000"
            checked={numPeople === '500 - 2000'}
            onChange={handleNumPeopleChange}
          />
          <label>500 - 2000</label>
        </div>
        <div>
          <input
            type="radio"
            value="+2000"
            checked={numPeople   === '+2000'}
            onChange={handleNumPeopleChange}
          />
          <label>+2000</label>
        </div>
      </div>

      {/* #######################*/}

      <div>
        <label><h2>Comida</h2> </label>
        <div>
          <input
            type="radio"
            value="Plato basico"
            checked={food === 'Plato basico'}
            onChange={handleFoodChange}
          />
          <label>Plato basico</label>
        </div>
        <div>
          <input
            type="radio"
            value="Plato fuerte"
            checked={food === 'Plato fuerte'}
            onChange={handleFoodChange}
          />
          <label>Plato fuerte</label>
        </div>
        <div>
          <input
            type="radio"
            value="Sin comida"
            checked={food   === 'Sin comida'}
            onChange={handleFoodChange}
          />
          <label>Sin comida</label>
        </div>
      </div>

      {/* #######################*/}

      <div>
        <label><h2>Seguridad</h2> </label>
        <div>
          <input
            type="radio"
            value="Sin seguridad"
            checked={security === 'Sin seguridad'}
            onChange={handleSecurityChange}
          />
          <label>Sin seguridad</label>
        </div>
        <div>
          <input
            type="radio"
            value="Seguridad basica"
            checked={security === 'Seguridad basica'}
            onChange={handleSecurityChange}
          />
          <label>Seguridad basica</label>
        </div>
        <div>
          <input
            type="radio"
            value="Alta Seguridad"
            checked={security   === 'Alta Seguridad'}
            onChange={handleSecurityChange}
          />
          <label>Alta Seguridad</label>
        </div>
      </div>

      {/* #######################*/}

{/* #######################*/}

<div>
        <label><h2>Tipo de lugar</h2> </label>
        <div>
          <input
            type="radio"
            value="Campestre"
            checked={place === 'Campestre'}
            onChange={handlePlaceChange}
          />
          <label>Campestre</label>
        </div>
        <div>
          <input
            type="radio"
            value="Abierto"
            checked={place === 'Abierto'}
            onChange={handlePlaceChange}
          />
          <label>Abierto</label>
        </div>
        <div>
          <input
            type="radio"
            value="Cerrado"
            checked={place   === 'Cerrado'}
            onChange={handlePlaceChange}
          />
          <label>Cerrado</label>
        </div>
      </div>



      <div>



        <label><h2>Direccion: </h2></label>
        
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>

      <button onClick={handleReservar}>Reservar</button>
    </div>
  );
}