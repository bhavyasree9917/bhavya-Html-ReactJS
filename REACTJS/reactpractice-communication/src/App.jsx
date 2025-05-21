import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Title from './Title'
import Container from './Container'
import TodoApp from './TodoApp'
import Calculator from './Calculator'
import Grandparent from './GrandParent'
import ButtonPanel from './ButtonPanel'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Parent/> */}
{/* <Title/> */}
{/* <Container/> */}
{/* <TodoApp/> */}
{/* <Calculator/> */}
<Grandparent/>
{/* <ButtonPanel/> */}

    </>
  )
}

export default App
