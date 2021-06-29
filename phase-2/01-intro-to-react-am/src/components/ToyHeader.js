// ToyHeader Component Function

function ToyHeader(props) {
    
    // view props being passed from App.js
    // console.log(props);

    return (
        <div id={props.id}>
            <img
                src={props.src}
                alt={props.alt}
            />
        </div>
    );
}

// export ToyHeader.js to be used within App.js
export default ToyHeader;