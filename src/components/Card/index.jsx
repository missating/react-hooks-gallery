import React from 'react'
import './card.scss'

const Gallery = ({ character }) => {
  return (
    <div className="card--container">
      <div className="card--container__flipper">
        <div className="card--container__image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card--container__content">
          <h2>{character.name}</h2>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery;