import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return     <div className="row ">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mariia Pirogova</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/about">About Me</Link>
              <Link className="nav-link" to="/projects">Projects</Link>
              <Link className="nav-link" to="/contacts">Contacts</Link>
              <Link className="nav-link" to="/resume">Resume</Link>
            </div>
          </div>
        </div>
    </nav>
    
</div>
  }
}

export default Header;