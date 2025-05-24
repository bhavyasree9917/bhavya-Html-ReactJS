import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Profile from './Profile'
import Clickcounter from './Clickcounter'
import Form from './Form'
import Clock from './Clock'
import Showhide from './Showhide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    {/* <Profile username="sree"/> */}
    {/* <Clickcounter/> */}
    {/* <Form/> */}
    {/* <Clock/> */}
    <Showhide/>
    </>
  )
}

export default App
