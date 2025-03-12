import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecommerse from './E-commerce-cart/Ecommerse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Ecommerse/>
    </>
  )
}

export default App
