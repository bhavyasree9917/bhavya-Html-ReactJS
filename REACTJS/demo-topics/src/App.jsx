import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import Parent from './Parent'
import Bhavya from './Bhavya'
import Parent1 from './Parent1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter1/>
    <Counter2/> */}
   
    <Parent1/>


    </>
  )
}

export default App
