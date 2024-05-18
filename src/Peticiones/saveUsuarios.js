
export const saveUsuarios = async (userData) => {
<<<<<<< HEAD
  const url = 'http://localhost:8080/api/v1/cliente/usuario/registro'; // Replace with your backend URL
=======
  const url = 'http://localhost:8080/api/v1/cliente/usuario/registro'; // Reemplaza con la URL correcta de tu backend
>>>>>>> aff167d9cbc308f98e04394f2a04ee4c26cf3879

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`Error al registrar el usuario: ${response.status}`);
    } else{
      console.log('Usuario registrado exitosamente');
      return true; 
    }
<<<<<<< HEAD

    // Process the backend response if necessary
    console.log('Usuario registrado exitosamente');
    return true; // Return true to indicate the registration was successful
=======
    // Aquí puedes procesar la respuesta del backend si es necesario
    // Retorna true para indicar que el registro fue exitoso
>>>>>>> aff167d9cbc308f98e04394f2a04ee4c26cf3879
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return false; // Return false to indicate an error occurred
  }
};
