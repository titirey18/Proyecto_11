import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails'

function Guesscharacter() {
  const { name } = useParams()
  const [characterData, setCharacterData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=50`)
      .then((response) => response.json())
      .then((data) => {
        const characterQuotes = data.filter((item) => item.character === name)
        setCharacterData(characterQuotes)
        setLoading(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [name])

  return (
    <CharacterDetails
      name={name}
      characterData={characterData}
      loading={loading}
    />
  )
}

export default Guesscharacter
