import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Fetch meals based on a search term
export const fetchMeals = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php`, {
      params: { s: searchTerm }
    });
    
    // Check if the response has meals data
    if (response.data.meals) {
      // Map through the meals and format the data
      const meals = response.data.meals.map(meal => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        recipe: meal.strInstructions
      }));

      return meals;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};
