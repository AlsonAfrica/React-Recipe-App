import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../Components/mealService';
import './MealList.css'; // Import the CSS file for styling
import SearchBarHome from './HomeSearchBar';

const MealList = ({ searchTerm }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null); 

  useEffect(() => {
    const getMeals = async () => {
      try {
        const mealsData = await fetchMeals(searchTerm);
        setMeals(mealsData);
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, [searchTerm]);

  const handleImageClick = (meal) => {
    setSelectedMeal(meal); // Set the selected meal
  };

  const handleCloseModal = () => {
    setSelectedMeal(null); // Close the modal
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SearchBarHome /> {/* Assuming you have a search bar */}
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
