export const saveReserva = async (formData) => {
    const url = 'http://localhost:8080/api/v1/cliente/reserva/guardar'; // URL de tu backend Java para guardar reservas
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      
      if (!response.ok) {
        throw new Error('Error al guardar la reserva');
      }
  
      console.log('Reserva guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
    }
  };