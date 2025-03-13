import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecommerse from './E-commerce-cart/Ecommerse'

import Taskmanager from './project3-taskmanagementsyastem/taskmanager'
import Quizzapp from './project4-onlinequizzapp/Quizzapp'
import Socialmedia from './project2-socialmedia/Socialmedia'
import Profile from './project5-profilemanagement/Profile'
import Library from './project6-librarymanagement/Library'
import Digital from './project7-digitaladdress/Digital'
import Movie from './project8-movieticketbooking/Movie'
import Inventory from './project9-inventor-management/Inventory'
import Expensive from './project10-expensivetracker/Expensive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Ecommerse/> */}

  {/* <Taskmanager/> */}
  {/* <Quizzapp/> */}
  {/* <Socialmedia/> */}
  {/* <Profile/> */}
  {/* <Library/> */}
  {/* <Digital/> */}
  {/* <Movie/> */}
  <Inventory/>
  
  {/* <Expensive/> */}

    </>
  )
}

export default App
