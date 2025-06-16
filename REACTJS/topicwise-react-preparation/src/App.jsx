import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Clickcounter from './Clickcounter'
import Hovercounter from './Hovercounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Parent/>
     {/* <Clickcounter/>
  <hr/>
  <Hovercounter/> */}
    </>
  )
}

export default App
