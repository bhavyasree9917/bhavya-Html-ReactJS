import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h2>Hello I am from Header</h2>
      <Router>
        <nav>
        <Link to={''}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>
        <Link to={'projects'}>Projects</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>

      <h2>Hello I am from Footer</h2>

    </>
  )
}

export default App
