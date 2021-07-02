// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './painting_data';

// import useState Hook
import { useState } from 'react';

// Compontent Imports
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm';

function App() {

  // Initialize "color", "paintings", and "formView" states
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [color, colorSetter] = useState("red");
  const [formView, formViewSetter] = useState(false);

  // Create function to change Parent's "color" state (changeColor)
  // ...
  function changeColor() {
    if (color === "red") {
      colorSetter("blue");
    } else {
      colorSetter("red");
    }
  }

  // Breakout Activity #1: Create Callback Function to Toggle Between PaintingForm / PaintingsList (toggleForm)
  // ...

  function toggleForm() {
    formViewSetter(!formView);
  }


  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        // ...
        changeColor={changeColor}

        // Breakout Activity #2: Render PaintingForm or PaintingsList Components based upon toggleForm
        // ...
        toggleForm={toggleForm}
      />

      <hr />

      {/* Breakout Activity #2: Render PaintingForm or PaintingsList Components based upon toggleForm */}
      {/* ... */}
    
      {formView ? <PaintingForm /> : <PaintingsList paintings={paintings} /> }
      
    </div>
  );
}

export default App;
