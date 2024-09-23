import React from 'react'
import { Link } from 'react-router-dom'
import './CharacterList.css'

function CharacterList({ characters, loading }) {
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <main id='characters'>
      {characters.map((character, index) => (
        <div key={index} className='character-card'>
          <div className='hidden'>
            <h2>{character.character}</h2>
          </div>
          <Link to={`/personaje/${character.character}`}>
            <img src={character.image} alt={character.character} />
          </Link>
        </div>
      ))}
    </main>
  )
}

export default CharacterList
