import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Greeting from './Greeting'
import Profile from './Profile'
import Default from './default'
import Message from './Message'
import FocusInput from './FocusInput'
import PreviousValue from './PreviousValue'
import TodoApp from './TodoApp'
import MemoApp from './MemoApp'
import CallbackApp from './CallbackApp'
import FetchData from './FetchData'
import FetchStatus from './FetchStatus'
import PollData from './PollData'
import CancelFetch from './CancelFetch'
import FetchPost from './Fetchpost'
import Greeting1 from './Greeting1'
import Profile1 from './Profile1'
import Deafu from './Deafu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
      
{/* <Greeting name="John" /> */}
{/* <Profile name="Alice" age={28} /> */}
{/* <Default/> */}
{/* <Message count={3} /> */}
<Greeting1 name="sree"/>
<Profile1 name="pspk"age={21}/>
<Deafu/>







{/* <FocusInput/> */}
{/* <PreviousValue/> */}
{/* <TodoApp/> */}
{/* <MemoApp/> */}
{/* <CallbackApp/> */}
{/* <FetchData/> */}
{/* <FetchStatus/> */}
{/* <PollData/> */}
{/* <CancelFetch/> */}
<FetchPost/>
    </>
  )
}

export default App
