import axios from 'axios';

const API_URL = 'https://thronesapi.com/api/v2/Characters';

// Obtener todos los personajes
export const getAllCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

// Obtener un personaje específico por ID
export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character ${id}:`, error);
    throw error;
  }
};