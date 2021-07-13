import { useState, useEffect } from "react";

const initialText = () => localStorage.getItem("text"); 

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    localStorage.setItem("text", text);
    localStorage.setItem("count", count);
    
    console.log("Running side effect");
  }, [text, count]);
  // ✅ use the dependencies array so that the side effect only runs if the text changes

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
