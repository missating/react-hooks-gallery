import React from 'react';
import Gallery from './components/Gallery';
import './App.scss';

const App = () => {

  return (
    <div className="app-container">
      <header className="app-container__header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
