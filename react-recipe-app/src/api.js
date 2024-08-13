// src/api.js
const API_URL = 'http://localhost:5001';

// Fetch users
export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

// Fetch a specific user by ID
export const fetchUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

// Add a new user
export const addUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Update user information
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Delete a user
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
};

// Fetch recipes by category
export const fetchRecipesByCategory = async (category) => {
  const response = await fetch(`${API_URL}/recipes/${category}`);
  return response.json();
};

// Add a new recipe
export const addRecipe = async (category, recipe) => {
  const response = await fetch(`${API_URL}/recipes/${category}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
  return response.json();
};

// Update a recipe
export const updateRecipe = async (category, id, recipe) => {
  const response = await fetch(`${API_URL}/recipes/${category}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
  return response.json();
};

// Delete a recipe
export const deleteRecipe = async (category, id) => {
  await fetch(`${API_URL}/recipes/${category}/${id}`, { method: 'DELETE' });
};
