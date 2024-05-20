export const deleteReservation = async (reservationId) => {
    const url = `http://localhost:8080/api/v1/reserva/delete/{id}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar la reserva: ${response.status}`);
      }
      console.log('Reserva eliminada exitosamente');
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
      throw error;
    }
  };