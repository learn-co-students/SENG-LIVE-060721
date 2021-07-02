// importing the useState Hook
import { useState } from 'react';

import Button from './Button';

const Painting = props => {
  
  // set state for "Add to Cart"
  // "isAdded" is a STATE that we've now created (True / False)
  // "setAdded" is a FUNCTION that's going to handle updates to the "isAdded" state
  // "useState(false)" is SETTING the INITIAL VALUE for our state

  // const [isAdded, setAdded] = useState(false);
  
  // set state for "♡"
  // const [isLiked, setLiked] = useState(false);

  // set isVisible state to handle displaying H2 vs. Painting info
  // const [isVisible, setVisibility] = useState(true);

  // function to toggle isVisible, passed to Painting.js as prop
  function visibilityHandler() {
    return setVisibility(!isVisible);
  }

  // initial conditional logic
  // if (!isAdded) {
  
    return (
      <div>
        { isVisible ? (
          <>
            <img src={props.painting.image} />
            <h4>
              "{props.painting.title}" by {props.painting.artist.name}
            </h4>
            <p>Year: {props.painting.date}</p>
            <p>
              Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
            </p>
          </>
        ) : (
          <>
            <h2>Added to Cart</h2>
          </>
        )}

        {/* <button onClick={() => setAdded(!isAdded)}>
          { isAdded ? "Remove From Cart" : "Add to Cart"}
        </button>
        <button onClick={() => setLiked(!isLiked)}>
          { isLiked ? '❤️' : '♡'}
        </button> */}
        
        
        <Button 
          // put necessary prop(s) here (i.e., name="cart")
          name="cart"
          visibilityHandler={visibilityHandler}
        />
        
        <Button 
          // put necessary prop(s) here (i.e., name="heart")
          name="heart"
        />
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       <h2>Added to Cart</h2>

  //       <button onClick={() => setAdded(!isAdded)}>Add to Cart</button>
  //       <button >♡</button>
  //     </div>
  //   );
  // }
};

export default Painting;
