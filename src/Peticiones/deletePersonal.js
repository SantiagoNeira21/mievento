export const deletePersonal = async (personalId) => {
    const url = `http://localhost:8080/api/v1/cliente/personal/delete/${personalId}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el personal: ${response.status}`);
      }
      console.log('Personal eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el personal:', error);
      throw error;
    }
  };
  