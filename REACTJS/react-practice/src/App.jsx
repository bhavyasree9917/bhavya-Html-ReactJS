import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Counter from './Counter'
import Greeting from './Greeting'
import Timer from './Timer'
import UserCard from './Usercard'
import Toggle from './Toggle'
import Inputfield from './Inputfield'
import Loginstatus from './Loginstatus'
import Parent from './Parent'
import MaxDistToClosest from './MaxDistance'
import MaxDistance from './MaxDistance'
import LoginStatus from './Loginstatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Welcome/>
  <Counter/>
  <Greeting/> */}
  {/* <Timer/> */}
   <UserCard/> 
  {/* <Toggle/>
  <Inputfield/>
  
        {/* <Parent/> */}
        {/* <MaxDistance/> */}
        <LoginStatus/>
    </>
  )
}

export default App
