// ToyCard Component Function

function ToyCard(props) {
    let toys = props.toys;

    // view passed toys props being passed from App.js
    // console.log(toys);

    return (
        <div>
            {/* iterate over toys props using map() */}
            {toys.map(toy => {
                return (
                    // add inline styles to format ToyCard components
                    <li key={toy.id} style={{ listStyleType: "none", textAlign: "center"}}>
                        <img 
                            src={toy.image} 
                            style={{     
                                width: "100px",
                                height: "100px",
                                backgroundSize: "cover"
                            }}
                        />
                        <p>Name: {toy.name}</p>
                        <p>Likes: {toy.likes}</p>
                    </li>
                );
            })}
        </div>
    );
}

// export ToyCard.js to be used within App.js
export default ToyCard;