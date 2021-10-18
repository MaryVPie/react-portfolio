import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
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
              <NavLink className="nav-link" to="/about">About Me</NavLink>
              <NavLink className="nav-link" to="/projects">Portfolio</NavLink>
              <NavLink className="nav-link" to="/contacts">Contact</NavLink>
              <NavLink className="nav-link" to="/resume">Resume</NavLink>
            </div>
          </div>
        </div>
    </nav>
    
</div>
  }
}

export default Header;