import React from 'react'
import './card.css'

const Gallery = ({ character }) => {
  return (
    <div className="card--container">
      <div className="card--container__image">
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  )
}

export default Gallery;