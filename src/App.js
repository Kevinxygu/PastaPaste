import logo from './logo.svg';
import './App.css';
import Interface from "./components/Interface.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Interface middleState="chunklist-empty"/>
      </header>
    </div>
  );
}

export default App;
