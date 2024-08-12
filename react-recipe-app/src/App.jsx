import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import RecipeCard from './Components/RecipeCard'
import { HomePage } from './Components/HomePage'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LandingPage" element={<LandingPage/>} />
      </Routes>
    </Router>
  )
}

export default App