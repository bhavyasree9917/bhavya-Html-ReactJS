import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Greeting from './Greeting'
import Profile from './Profile'
import Default from './Default'
import Message from './Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Welcome/>
     <Greeting name="sree" /> 
     <Profile name="bhavi" age={21} /> 
     <Default/>
     <Message/>
    </>
  )
}

export default App
