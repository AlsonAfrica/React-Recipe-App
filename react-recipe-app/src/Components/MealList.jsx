import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../Components/mealService';
import './MealList.css'; 
import SearchBarHome from './HomeSearchBar';  // Import SearchBarHome component

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const getMeals = async () => {
      setLoading(true);  // Start loading
      try {
        const mealsData = await fetchMeals(searchTerm);
        setMeals(mealsData);
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setLoading(false);  // End loading
      }
    };

    getMeals();
  }, [searchTerm]);  // Trigger the effect when searchTerm changes

  const handleImageClick = (meal) => {
    setSelectedMeal(meal); 
  };

  const handleCloseModal = () => {
    setSelectedMeal(null); 
  };

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update the search term
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SearchBarHome onSearch={handleSearch} />  {/* Include SearchBarHome and pass handleSearch */}
      <div className="meal-container">
        {meals.length > 0 ? (
          meals.map(meal => (
            <div key={meal.id} className="meal-item">
              <h2>{meal.name}</h2>
              <img 
                src={meal.image} 
                alt={meal.name} 
                className="meal-image"
                onClick={() => handleImageClick(meal)}
              />
            </div>
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
      {selectedMeal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedMeal.name}</h3>
            <p>{selectedMeal.recipe}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealList;
