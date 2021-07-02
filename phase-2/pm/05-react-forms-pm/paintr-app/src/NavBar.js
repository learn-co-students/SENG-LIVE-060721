function NavBar(props) {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>

      {/* Call changeColor() / toggleForm() via onClick using props */}
      <button onClick={props.changeColor}>Change Color</button>
      <button onClick={props.toggleForm}>Show/Hide New Painting Form</button>
    </div>
  );
};

export default NavBar;

// () => props.changeColor("purple")

// function() {
//    props.changeColor("purple") 
// }