import logo from './logo.svg';
import './App.css';
import RowHeading5 from './components/RowHeading';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    
    <Router>
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
            <div className="container">
            <Header />
            <br/>
            <Switch>
              <Route path="/about">
                <AboutMePage/>
              </Route>
              <Route path="/contacts">
                <ContactMePage />
              </Route>
              <Route path="/contactme">
                <ContactMePage />
              </Route>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/resume">
                <ResumePage />
              </Route>
              <Redirect from="/" to="/about">
                <AboutMePage/>
              </Redirect>
              <Route render={() => <Redirect to="/" />} />
            </Switch>

            <br/>
            <RowHeading5 text="Contacts" domId="Contacts"/>
            <Footer/>
            </div>
            
        </div>
        
    </Router>
 
  );
}

export default App;

