import Header from './components/Header';
import Character from './components/Character';

import characters from './data.js';
import { useState } from 'react';

const App = () => {

  const [ chars, changeChars ] = useState(characters)

  const [ likedChars, changeLikedChars ] = useState([])

  const like = (character) => {
    const newLikedChars = [...likedChars, character]
    changeLikedChars(newLikedChars)
  }

  const deleteChar = (character) => {
    const newLikedChars = likedChars.filter(char => char.name !== character.name)
    changeLikedChars(newLikedChars)
  }

  return (
    <div className="App">
      <Header name={'My'} />

      <div className="char-container">
        <h1> All Characters </h1>
        {
          chars.map(character => {
            return <Character key={character.created} character={character} changeLikedChars={like} deleteChar={deleteChar} />
          })
        }
      </div>

      <div className="char-container">
        <h1> Liked Characters </h1>
        {
          likedChars.map(character => {
            return <Character key={character.created} character={character} changeLikedChars={changeLikedChars} />
          })
        }
      </div>
    </div>
  );
}

export default App;
