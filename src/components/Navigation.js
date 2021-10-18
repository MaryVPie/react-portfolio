import React, { Component } from 'react';

class Navigation extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return     <div className="row ">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mariia Pirogova</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <a className="nav-link" href="#Skills">Skills</a>
              <a className="nav-link" href="#Projects">Projects</a>
              <a className="nav-link" href="#Contacts">Contacts</a>
            </div>
          </div>
        </div>
    </nav>
    
</div>
  }
}

export default Navigation;