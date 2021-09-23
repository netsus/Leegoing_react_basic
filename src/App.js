import logo from './logo.svg';
import './App.css';

function Subject() {
  return(
    <header>
      <h1>WEB</h1>
      world wide web!
    </header>
  );

}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Subject></Subject>
    </div>
  );
}

export default App;
