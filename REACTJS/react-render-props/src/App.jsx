import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincd from './Maincd'
import Rendr from './Rendr'
import Mouseinput from './Mouseinput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Maincd/> */}
{/* <Rendr/> */}
<Mouseinput/>
    </>
  )
}

export default App
