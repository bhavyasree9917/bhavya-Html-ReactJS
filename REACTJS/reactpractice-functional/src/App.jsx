import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Profile from './Profile'
import ClickCounter from './Clickcounter'
import Form from './Form'
import Clock from './Clock'
import ShowHide from './ShowHide'
import Avatar from './Avatar'
import ColorChanger from './Colorchanger'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
     {/* <Profile/> */}
     {/* <ClickCounter/> */}
     {/* <Form/> */}
     {/* <Clock/> */}
     {/* <ShowHide/> */}
     {/* <Avatar/> */}
     {/* <ColorChanger/> */}
     <Todo/>
    </>
  )
}

export default App
