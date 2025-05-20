import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Title from './Title'
import Container from './Container'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Parent/> */}
{/* <Title/> */}
<Container/>

    </>
  )
}

export default App
