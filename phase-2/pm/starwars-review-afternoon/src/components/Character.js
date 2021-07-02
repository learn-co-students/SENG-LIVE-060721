const Character = ({ character, changeLikedChars, deleteChar }) => {
  const { name } = character

  return (
    <div className="char-card">
      <p>
        { name }
      </p>
      <button onClick={() => changeLikedChars(character)}> Like </button>
      <button onClick={() => deleteChar(character)}> Delete </button>
    </div>
  )
}

export default Character
