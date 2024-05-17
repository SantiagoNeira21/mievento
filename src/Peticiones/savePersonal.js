// src/Peticiones/savePersonal.js
export const savePersonal = async (nuevoRegistro) => {
    const url = 'http://localhost:8080/api/v1/personal/guardar'; // Reemplaza con la URL correcta de tu backend
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoRegistro)
      });
  
      if (!response.ok) {
        throw new Error(`Error al guardar el personal: ${response.status}`);
      }
  
      // Aquí puedes procesar la respuesta del backend si es necesario
      console.log('Personal guardado exitosamente');
    } catch (error) {
      console.error('Error al guardar el personal:', error);
    }
  };