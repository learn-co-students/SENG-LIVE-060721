// Create ONE state that will keep track of whether
// a Button has been toggled, "isToggled"
import { useState } from 'react';

// function Button(props) {
const Button = (props) => {
    // set isToggled state using useState
    const [isToggled, setToggle] = useState(false);

    // function to handle visiblity of Painting info
    // via passed prop from Painting.js, "visiblity "
    function addToCart() {
        setToggle(!isToggled);
        props.handleVisibility();
        //
        //
        //
    }

    function likePainting() {
        setToggle(!isToggled);
        //
        //
        //
    }

    // props.name = "cart" / "heart"
    
    return (
        // <>...</> is shorthand for <React.Fragment></React.Fragment>
        <>
            {props.name === "cart" ? (
                <button onClick={addToCart}>
                    { isToggled ? "Remove From Cart" : "Add to Cart" }
                </button>
            ) : (
                <button onClick={likePainting}>
                    { isToggled ? '❤️' : '♡' }
                </button>
            )}
        </>
    )    
    
    // Rendering conditional logic outside of return statement

    // if (props.name === "cart") {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? "Added to Cart" : "Add to Cart" }
    //         </button>
    //     );
    // } else {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? '❤️' : '♡' }
    //         </button>
    //     );
    // }
};

export default Button;