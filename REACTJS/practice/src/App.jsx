import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Hoc from './Hoc'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Parent/>
      {/* <Hoc/> */}
    </>
  )
}

export default App
