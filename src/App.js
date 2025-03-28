import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by Monica Wangui and is {""}
            <a
              href="https://github.com/Monica-G30/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
