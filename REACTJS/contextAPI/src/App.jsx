import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clickcounterdemo from './components/ClickCounterDemo'
import HoverCounterDemo from './components/HoverCounterDemo'
import MainComponent from './context-components/Maincomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Clickcounterdemo/>
 <hr/>
 <HoverCounterDemo/> */}
 <MainComponent/>

    </>
  )
}

export default App
