import logo from './logo.svg';
import './App.css';
import RowHeading5 from './components/RowHeading';
import Header from './components/Header';
import Footer from './components/Footer';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-primary">
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
      </header> */}
      <body class="container">
      <Header />
      <div class="row "> 
        <Summary/>
        <Skills/>
      </div>
      <RowHeading5/>
      <RowHeading5 text="My Successes" domId="Projects"/>
      <Projects/>
      <RowHeading5 text="Contacts" domId="Contacts"/>
      <Footer/>

      </body>
    </div>
  );
}

export default App;

