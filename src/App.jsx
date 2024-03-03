import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [characterId, setCharacterId] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => response.json)
      .then(character => console.log(character))

    return () => console.log('cleanup')
  }, [characterId])


  const handleCharacterId = () => {
    setCharacterId(prevId => prevId + 1)
  }
  return (
    <>
      <div>
        <button onClick={handleCharacterId}>
          Fetch Character by ID of {characterId}
        </button>
      </div>
    </>
  )
}

export default App
