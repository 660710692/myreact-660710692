import logo from './logoglarp.jpg';
import './App.css';
import Hello from './Hello';
import JSXExamples from './components/JSXExamples.jsx';

function App() {
  return (
    <div className="App">
      <Hello />
      <h1>Welcome to My React App</h1>
      <br />
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          นี่คือหน้าเว็บของ <code>660710692</code>
        </p>
        <p>นี่คือส่วนของ JSX !</p>
        <JSXExamples />
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
