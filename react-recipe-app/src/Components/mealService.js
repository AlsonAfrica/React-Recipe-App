// src/services/mealService.js
import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php`, {
      params: { s: searchTerm }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};
