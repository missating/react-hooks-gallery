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
          <p>{character.name}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.status}</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery;