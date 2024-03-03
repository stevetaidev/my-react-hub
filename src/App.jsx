import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [appState, setAppState] = useState({
    show: true,
    count: 1,
  })

  const handleShow = () => {
    // setShow(prevShow => !prevShow)
    setAppState(prev => {
      return {
        ...prev,
        show: !prev.show,
      }
    })
  }
  const handleCount = () => {
    setAppState(prev => {
      return {
        ...prev,
        count: prev.count + 1,
      }
    })
  }
  return (
    <>
      <div>
        {
          appState.show &&
          <a href='https://react.dev' target='blank'>
            <img src={reactLogo} alt='react logo' />
          </a>
        }
      </div>

      <div className='card'>
        <button onClick={handleShow}>Show/Hide React Logo</button>
      </div>
      <div>
        <button onClick={handleCount}>Count is {appState.count}</button>
      </div>
    </>
  )
}

export default App
