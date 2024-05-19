

export const fetchReservations = async () => {
    const url = 'http://localhost:8080/api/v1/getReservations'; // Replace with your backend URL
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener las reservas: ${response.status}`);
      }
      const reservationsData = await response.json();
      return reservationsData;
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
      return [];
    }
  };