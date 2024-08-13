import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FlipCard from './RecipeCard';
import './HomePage.css';

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleFormSubmit = (data) => {
    setRecipes((prevRecipes) => [...prevRecipes, data]);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar onFormSubmit={handleFormSubmit} />
        <div className="Recipe-Cards">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {recipes.map((recipe, index) => (
              <FlipCard key={index} data={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
