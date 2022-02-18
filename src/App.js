import React, { useState, useEffect } from 'react';
import './App.css';

import Characters from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [showCharacters, setShowCharacters] = useState(false)
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer)
      console.log(charactersFromServer)
    }

    getCharacters()
  }, [])

  // Fetch Characters
  const fetchCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
