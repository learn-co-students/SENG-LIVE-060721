import { useState, useEffect } from "react";

const initialText = () => (
  localStorage.getItem("text") || ""
  // some
  // other
  // behaviors
);

const initialCount = () => (
  parseInt(localStorage.getItem("count")) || 0
);

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    localStorage.setItem("text", text);
    localStorage.setItem("count", count);
    
    console.log("use effect triggered");
  }, [text, count]);
  // ✅ use the dependencies array so that the side effect only runs if the text changes

  console.log("Rendering component");

  const clearMemory = () => localStorage.clear();

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
      <button onClick={clearMemory}>Clear Memory</button>
    </div>
  );
}

export default App;
