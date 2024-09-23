import React from 'react'
import './CharacterDetails.css'

function CharacterDetails({ name, characterData, loading }) {
  if (loading) {
    return <p>Loading...</p>
  }

  if (!characterData || characterData.length === 0) {
    return <p>No se encontraron citas para {name}.</p>
  }

  return (
    <div className='character_guess'>
      <h1>{name}</h1>
      <img src={characterData[0].image} alt={name} />

      <ul>
        {characterData.map((quote, index) => (
          <li key={index}>"{quote.quote}"</li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterDetails
