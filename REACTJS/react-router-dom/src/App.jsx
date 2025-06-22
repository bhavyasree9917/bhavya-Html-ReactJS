import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter1/>
    <hr/>
    <Counter2/>
    </>
  )
}

export default App
