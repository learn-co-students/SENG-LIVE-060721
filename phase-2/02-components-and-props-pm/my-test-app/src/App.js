// import logo from './logo.svg';
import './App.css';

// Component Imports
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
      <div className="App">
        <br />
        <NavBar />
        <Header 
          title="Title Component"
          content="Content Prop"
          isLoggedIn={false}
        />
      </div>
  );
}

export default App;
