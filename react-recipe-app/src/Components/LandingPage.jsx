import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FlipCard from './RecipeCard';
import './HomePage.css';
import axios from 'axios';

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  // Function to handle form submission and add new recipes
  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5001/recipes', data);
      setRecipes((prevRecipes) => [...prevRecipes, response.data]);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  // Function to handle saving updates to a recipe
  const handleSave = async (updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5001/recipes/${updatedData.id}`, updatedData);
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.id === updatedData.id ? response.data : recipe))
      );
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  // Function to handle deleting a recipe
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/recipes/${id}`);
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className='wrapper-page'style={{ backgroundColor: 'chocolate', }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar onFormSubmit={handleFormSubmit} />
        <div className="Recipe-Cards" style={{ flexGrow: 1, padding: '16px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {recipes.map((recipe) => (
              <FlipCard
                key={recipe.id}
                data={recipe}
                onSave={handleSave}
                onDelete={() => handleDelete(recipe.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

