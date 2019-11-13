import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Button from '../Button';

import './gallery.scss'

const API_URL = 'https://rickandmortyapi.com/api/character/'

const Gallery = () => {
  const [characters, setCharacters] = useState({});
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const previous = () => {
    const previousPage = page - 1;
    if (previousPage < 0) {
      return;
    }

    setPage(previousPage)
  }

  const next = () => {
    const nextPage = page + 1;
    if (nextPage > pages) {
      return;
    }

    setPage(nextPage)
  }

  useEffect(() => {
    fetch(`${API_URL}?page=${page}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCharacters(response)
        const pages = response.info.pages
        setPages(pages - 1);
        setDisabled(false);
      })
      .catch(error => console.log(error))
  }, [page])


  return (
    <div className="gallery--container">
      <div className="gallery--container__button--section">
        <Button name='previous' disabled={disabled || page === 1} onClick={previous} />
        <span>page {page ? page : "1"}</span>
        <Button name='next' disabled={disabled || page === pages} onClick={next} />
      </div>
      <div className="gallery--container__card--section">
        {
          characters.results && characters.results.map(character =>
            <Card
              key={character.id}
              character={character}
            />
          )}
      </div>
    </div>
  )
}

export default Gallery;
