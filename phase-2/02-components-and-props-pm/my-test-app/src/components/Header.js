// Component Imports
import Title from './Title';
import Form from './Form';

function Header(props) {

    // optional refactoring
    let title = props.title;
    let content = props.content;
    let isLoggedIn = props.isLoggedIn;
    let myNumber = props.myNumber;

    // Ternary Operator
    // CONDITION ? IF TRUE : IF FALSE

    console.log(props);

    return (
        <div>
            {/* Nested Title / Form Components */}
            <Title
                title={title}
            />
            <Form />

            <p>{content}</p>
            <button>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </div>
    );

    // original conditional logic to dynamically render JSX

    // if (props.isLoggedIn) {
    //     // if logged in
    //     return (
    //         <div>
    //             <h1>{title}</h1>
    //             <p>{content}</p>
    //             <button>Log Out</button>
    //         </div>
    //     );
    // } else {
    //     // if logged out
    //     return (
    //         <div>
    //             <h1>{title}</h1>
    //             <p>{content}</p>
    //             <button>Log In</button>
    //         </div>
    //     );  
    // }      
}

export default Header;