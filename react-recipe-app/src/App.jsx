import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/HomePage'
import Sidebar from './Components/Sidebar'
import RecipeCard from './Components/RecipeCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <RecipeApp/> */}
    <RecipeCard/>
    {/* <Sidebar/> */}
     {/* <Navbar/> */}
    </>
  )
}

export default App
