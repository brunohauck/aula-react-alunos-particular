import './App.css';
import Login from './pages/login';
import SampleLogin from './pages/sampleLogin';

/*
function App() {
  return (
    <div className="App">
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
}*/
//  <Login />
// <SampleLogin />
function App() {
  var nome; 

  function setNome(name){
    nome = name 
  }
  return (
    <>
     <SampleLogin />
    </>
  );
}

export default App;
