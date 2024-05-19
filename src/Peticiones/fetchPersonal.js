export const fetchPersonal = async () => {
    const url = 'http://localhost:8080/api/v1/administrador/getPersonal'; // Replace with your backend URL
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener el personal: ${response.status}`);
      }
      const personalData = await response.json();
      return personalData;
    } catch (error) {
      console.error('Error al obtener el personal:', error);
      return [];
    }
  };

  //funciona