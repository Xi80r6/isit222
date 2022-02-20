// Hi Tim
import ExternalLinkIcon from './external-link.svg';
import './App.css';
import moment from "moment";

function isIt222() {
  const month = moment().month()+1
  const date = moment().date()
  if (month === 2 && date === 22) {
    return "Yes, it is two twenty-two."
  }
  return "Nope, it is not two twenty-two. YET."
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">222</h1>
        <p style={{margin: 0}}>
          This was made by Bixby and Tim, and your question must be...Is it two twenty-two?
        </p>
        <h2>{isIt222()}</h2>
        <a
          className="App-link"
          href="http://corndog.io"
          target="_blank"
          rel="noopener noreferrer"
          >
          This is a yummy website, but it doesn't exactly have cookies!
        </a>
      </header>
      <footer>
        Created with 🤍 |&nbsp;
        <a
          className="App-link"
          href="https://github.com/Xi80r6/isit222"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github<img src={ExternalLinkIcon} alt="external link icon" height={16} aria-hidden/>
        </a>
      </footer>
    </div>
  );
}

export default App;
