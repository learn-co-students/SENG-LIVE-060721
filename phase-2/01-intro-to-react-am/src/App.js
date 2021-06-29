// Import ToyHeader Component via its path relative to App.js
import ToyHeader from "./components/ToyHeader";
import ToyCard from "./components/ToyCard";
import ToysData from "./toys";

/* 
Outline
- Take HTML from Toy Tales lab and turn it into JSX
  - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
  - What needs to change? What's the same?
- Refactor HTML into separate components
- JSX Syntax
- Pass in props

Exercise
- create a ToyCard component
- start by hard-coding the JSX in your component return statement
- then use props to make your component reusable
- you can copy/paste data from the toys.js file as props
- as a bonus, try importing data from the toys.js file
*/

function App() {

  // view imported data from toys.js
  // console.log(ToysData);

  return <div>

    {/* ToyHeader.js Component */}
    <ToyHeader 
      // props we're passing to / accessing within ToyHeader.js
      id="toy-header" 
      src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" 
      alt="toy-header"/>

    {/* Container.js (Component) */}
    <div className="container">
      
      {/* AddToyForm.js Component */}
      <form className="add-toy-form">
        <h3>Create a toy!</h3>

        {/* AddToyInput.js Component */}
        <input
          type="text"
          className="name"
          value=""
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />

        {/* AddToyInput.js Component */}
        <input
          type="text"
          className="image"
          value=""
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />

        {/* AddToyInput.js Component */}
        <input
          type="submit"
          name="submit"
          value="Create Toy"
          className="submit"
        />
      </form>
    </div>

    {/* AddToyButton.js Commponent */}
    <p style={{ textAlign: "center" }}>
      Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
    </p>

    {/* ToyCollection.js Component */}
    <div id="toy-collection">

      {/* invoke ToyCard Component and pass ToysData as prop */}
      <ToyCard toys={ToysData} />
    </div>
  </div>
}

export default App;
