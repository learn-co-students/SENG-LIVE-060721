import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';

// here, we import all of the Painting objects from "painting_data.js"
import painting_data from './painting_data'

function App() {
  return (
    <div>
      <NavBar
        color="blue"
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />
      <PaintingsList paintings={painting_data} />
    </div>
  );
}

export default App;
