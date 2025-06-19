import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Hoc from './Hoc'
import Clickcount from './Clickcount'
import Hovercount from './Hovercount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Parent/> */}
<Clickcount/>
<hr/>
<Hovercount/>
    </>
  )
}

export default App
