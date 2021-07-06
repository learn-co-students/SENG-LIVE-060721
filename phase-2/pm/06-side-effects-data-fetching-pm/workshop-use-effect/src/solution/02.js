// To clear localstorage, use localStorage.clear();

import { useState, useEffect } from "react";

const initialText = () => localStorage.getItem("text") || "";
const initialCount = () => parseInt(localStorage.getItem("count")) || 0;

function App() {
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem("text", text);
    localStorage.setItem("count", count);
  }, [text, count]);

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
