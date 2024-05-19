
export const saveUsuarios = async (userData) => {
  const url = 'http://localhost:8080/api/v1/cliente/usuario/registro'; // Replace with your backend URL

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
    }

    // Process the backend response if necessary
    console.log('Usuario registrado exitosamente');
    return true; // Return true to indicate the registration was successful
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return false; // Return false to indicate an error occurred
  }
};

//Ya funciona
