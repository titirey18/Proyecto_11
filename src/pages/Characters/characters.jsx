import React, { useEffect, useState } from 'react'
import CharacterList from '../../components/Characterlist/Characterlist'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCharacters = [
          ...new Map(data.map((item) => [item.character, item])).values()
        ]
        setCharacters(uniqueCharacters)
        setLoading(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return <CharacterList characters={characters} loading={loading} />
}

export default Characters
