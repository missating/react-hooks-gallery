import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

const API_URL = 'https://rickandmortyapi.com/api/character/?page=3';

function App() {
  const [images, setImages] = useState({});

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setImages(response)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Card images={images} />
    </div>
  );
}

export default App;
