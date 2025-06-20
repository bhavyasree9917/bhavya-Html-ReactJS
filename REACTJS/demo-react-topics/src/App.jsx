import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'


import Parent1 from './Parent1'
import Clickcount from './Clickcount'
import Hovercount from './Hovercount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Parent/>  */}

{/* <Parent1/> */}
<Clickcount/>
<hr/>
<Hovercount/>
    </>
  )
}

export default App
