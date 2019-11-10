import React, { useEffect, useState } from 'react';
import Card from '../Card'

import './gallery.scss'

const API_URL = 'https://rickandmortyapi.com/api/character/';

const Gallery = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCharacters(response)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="gallery--container">
      {
        characters.results && characters.results.map(character =>
          <Card
            key={character.id}
            character={character}
          />
        )}
    </div>
  )
}

export default Gallery;
