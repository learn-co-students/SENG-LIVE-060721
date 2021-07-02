import characters from './data.js';
import Header from './components/Header';
import Character from './components/Character';

import { useState } from 'react';

const App = () => {

  const [ chars, setChars ] = useState(characters)
  const [ likedChar, setLikedChars ] = useState([])

  const handleLike = (character) => {
    const newLikedChars = [...likedChar, character]
    setLikedChars(newLikedChars)
  }

  const allCharacters = chars.map(character => {
    return <Character key={character.created} character={character} setLikedChars={handleLike} />
  })

  const likedCharacters = likedChar.map(character => {
    return <Character key={character.created} character={character} />
  })

  return (
    <div className="App">
      <Header user="R2-D2" />
      <div className="char-container">
        <h1> All characters </h1>
        { allCharacters }
      </div>
      <div className="char-container">
        <h1> Liked characters </h1>
        { likedCharacters }
      </div>
    </div>
  );
}

export default App;
