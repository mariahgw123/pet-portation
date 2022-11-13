import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";

//tab in browser title
document.title = "Pet-Portation";
//tab in browser logo
document.logo = null;

function App() {
  return (
    <div className='App'>
      <Home />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
