import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import RecipeCard from './Components/RecipeCard'
import { HomePage } from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    {/* <HomePage/> */}
    {/* <RecipeApp/> */}
    {/* <RecipeCard/> */}
    {/* <Sidebar/> */}
     {/* <Navbar/> */}
    </>
  )
}

export default App
