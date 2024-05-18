export const fetchUsers = async () => {
  const url = 'http://localhost:8080/api/v1/getUsers'; // Replace with your backend URL

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener los usuarios: ${response.status}`);
    }
    const usersData = await response.json();
    return usersData;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    return [];
  }
};