import logo from './logo.svg';
import Markdown from 'react-markdown'
import './App.css';

const markdown = '# Hi, *Pluto*!'

function App() {
  return (
    <div className="App">
      <Markdown>{markdown}</Markdown>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
