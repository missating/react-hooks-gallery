import React from 'react'
import './card.css'

const Card = ({ images }) => {
  return (
    <div className="wrapper">
      {
        images.results && images.results.map((image) => (
          <div className="img-card" key={image.id}>
            <img src={image.image} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default Card;