import React, { Component } from 'react';
import RowHeading5 from '../components/RowHeading';
import Skills from '../components/Skills';

class ResumePage extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <> 
    <div className="row">
        <div className="col-12" >
          <h2> Resume</h2>
        </div>
    </div>
    {/* <RowHeading5 text="Resume"/> */}
    <div className="row py-2">
      <div className="col text-center">
          <a href="Mariia Pirogova.pdf" target="_blank"> 
              <br/> Downloadable PDF <i className="far fa-file-alt"></i></a>
          </div>
      </div>
      <div className="row">
        <div className="col-12" >
          <Skills/>
        </div>
      </div>
    </>
  }
}

export default ResumePage;