// src/components/MealList.js
import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../Components/mealService'; 
import SearchBarHome from './HomeSearchBar';

function MealList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getMeals = async () => {
      try {
        setLoading(true);
        const data = await fetchMeals(searchTerm);
        // Limit results to 20
        setMeals((data.meals || []).slice(0, 24));
      } catch (error) {
        setError('Failed to fetch meals');
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, [searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <SearchBarHome onChange={(value) => setSearchTerm(value)} />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px', 
        justifyContent: 'center' 
      }}>
        {meals.length > 0 ? (
          meals.map(meal => (
            <div key={meal.idMeal} style={{
              marginTop:"30px",  
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px', 
              textAlign: 'center'
            }}>
              <h2>{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}
              />
            </div>
          ))
        ) : (
          <div>No meals found</div>
        )}
      </div>
    </div>
  );
}

export default MealList;
