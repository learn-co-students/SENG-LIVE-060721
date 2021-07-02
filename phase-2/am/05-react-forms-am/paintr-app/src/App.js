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
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [formView, formViewSetter] = useState(false);

  // Create callback function to change Parent's "color" state (changeColor)
  function changeColor(newColor) {
    if (color === "red") {
      colorSetter("blue");
    } else {
      colorSetter("red");
    }
  }

  // Create callback function to toggle between PaintingForm and PaintingsList
  function toggleForm() {
    formViewSetter(!formView);
  }

  // Create callback function to change Parent's "paintings" state to be sorted by votes
  function sortPaintings() {
    
    // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
    let originalList = [...paintingsData];
    
    // .sort() "sorts" the elements of an array and returns the sorted array.
    const sortedList = originalList.sort((currentPainting, nextPainting) => {
      let votesCurrentPainting = currentPainting.votes;
      let votesNextPainting = nextPainting.votes;

      // Compare the two vote amounts. 
      // If comparison returns a value ≤ 0, leave a and b in the same order.
      // If comparison returns a value > than 0, sort b before a.

      if (votesCurrentPainting < votesNextPainting) return -1;
      if (votesCurrentPainting > votesNextPainting) return 1;
      return 0;
    });

    // Use "sortedList" to set array returned from .sort() as value for "paintings" state
    paintingsSetter(sortedList);
  }

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() and toggleForm() as props to NavBar
        changeColor={changeColor}
        toggleForm={toggleForm}
      />

      {/* AddsortPaintings click behavior */}
      <button onClick={sortPaintings}>Sort Paintings</button>
      <hr />
      
      {/* Pass sortPaintings to PaintingsList whenever it's rendered */}
      { formView ? <PaintingForm /> : <PaintingsList paintings={paintings} /> }
    </div>
  );
}

export default App;
