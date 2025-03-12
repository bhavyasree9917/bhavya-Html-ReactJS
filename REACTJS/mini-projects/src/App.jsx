import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecommerse from './E-commerce-cart/Ecommerse'
import Socialmedia from './project2-socialmedia/socialmedia'
import Taskmanager from './project3-taskmanagementsyastem/taskmanager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Ecommerse/> */}
  {/* <Socialmedia/> */}
  <Taskmanager/>
    </>
  )
}

export default App
