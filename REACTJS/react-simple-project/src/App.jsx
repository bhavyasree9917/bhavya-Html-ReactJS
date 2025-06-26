import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register2 from "./Register2";
import Login2 from "./Login2";
import Dashboard2 from "./Dashboard2";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register2 />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
