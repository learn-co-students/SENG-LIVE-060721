const Character = ({ character, setLikedChars }) => {

  const { name } = character

  return (
    <div className="char-card">
      <p> {name} </p>
      <button onClick={() => setLikedChars(character)}>
        Like
      </button>
      <button> Delete </button>
    </div>
  )
}
export default Character
