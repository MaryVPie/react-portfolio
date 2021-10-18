import React, { Component } from 'react';

class Navigation extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return     <div class="row ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mariia Pirogova</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              <a class="nav-link" href="#Skills">Skills</a>
              <a class="nav-link" href="#Projects">Projects</a>
              <a class="nav-link" href="#Contacts">Contacts</a>
            </div>
          </div>
        </div>
    </nav>
    
</div>
  }
}

export default Navigation;