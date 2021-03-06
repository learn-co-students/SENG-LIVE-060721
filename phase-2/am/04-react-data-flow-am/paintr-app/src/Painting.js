import { useState } from 'react';

function Painting(props) {

  // Initialize "votes" state
  const [votes, votesSetter] = useState(props.painting.votes);

  // Breakout Activity #1: Create Callback Function to Add Votes (addVotes)
  // (Separation of Concerns)

  function addVote() {
    votesSetter(votes + 1);
  }

  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>a
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <div className="ui labeled button" tabIndex="0">

      {/* Breakout Activity #1: Call addVotes() via onClick */}
        <div className="ui red button" onClick={addVote}>
          <i className="heart icon"></i> Add Vote
        </div>
        <a className="ui basic red left pointing label">
          {votes}
        </a>
      </div>
    </div>
  );
};

export default Painting;
