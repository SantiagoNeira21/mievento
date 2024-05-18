
export const saveUsuarios = async (userData) => {
  const url = 'http://localhost:8080/api/v1/cliente/usuario/registro'; // Reemplaza con la URL correcta de tu backend

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
    // Aquí puedes procesar la respuesta del backend si es necesario
    // Retorna true para indicar que el registro fue exitoso
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return false; // Retorna false para indicar que hubo un error
  }
};