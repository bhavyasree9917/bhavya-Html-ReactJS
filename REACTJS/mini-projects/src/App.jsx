import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecommerse from './E-commerce-cart/Ecommerse'


import Quizzapp from './project4-onlinequizzapp/Quizzapp'
import Socialmedia from './project2-socialmedia/Socialmedia'
import Profile from './project5-profilemanagement/Profile'
import Library from './project6-librarymanagement/Library'
import Digital from './project7-digitaladdress/Digital'

import Inventory from './project9-inventor-management/Inventory'
import Expensive from './project10-expensivetracker/Expensive'
import MovieTicket from './project8-movieticketbooking/MovieTicket'
import TaskManagement from './project3-taskmanagementsyastem/TaskManagement'
import Ecommerse1 from './E-commerce-cart/Ecommerse1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Ecommerse/>

  {/* <Quizzapp/> */}
  {/* <Socialmedia/> */}
  {/* <TaskManagement/> */}
  {/* <Profile/> */}
  {/* <Library/> */}
  {/* <Digital/> */}
 {/* <MovieTicket/> */}
  {/* <Inventory/> */}
  {/* <Expensive/> */}
  {/* <Ecommerse1/> */}

    </>
  )
}

export default App
