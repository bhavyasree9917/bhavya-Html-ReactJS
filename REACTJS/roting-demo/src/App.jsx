import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Electronics from './Electronics'
import Fashion from './fashion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path="Electronics" element={<Electronics/>}/>
      <Route path="Fashion" element={<Fashion/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
