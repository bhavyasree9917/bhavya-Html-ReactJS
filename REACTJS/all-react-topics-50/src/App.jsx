import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Greeting from './Greeting'
import Profile from './Profile'
import Default from './default'
import Message from './Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
      
<Greeting name="John" />
<Profile name="Alice" age={28} />
<Default/>
<Message count={3} />
    </>
  )
}

export default App
