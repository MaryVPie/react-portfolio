import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import Skills from '../components/Skills';

const backendSet = [
  {
    id:2,
    name: "MySql",
    labelPercent: "15%",
    skillPercent: "80%"
  },
  {
    id:3,
    name: "Mongo",
    labelPercent: "15%",
    skillPercent: "80%"
  },
  {
    id:4,
    name: "Node.js",
    labelPercent: "15%",
    skillPercent: "80%"
  },
  {
    id:5,
    name: "GraphQL",
    labelPercent: "15%",
    skillPercent: "75%"
  }
];

class ResumePage extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <> 
    <PageHeading text="Resume" />
    {/* <RowHeading5 text="Resume"/> */}
    <div className="row py-2">
      <div className="col text-center">
          <a href="Mariia Pirogova.pdf" target="_blank"> 
              <br/> Downloadable PDF <i className="far fa-file-alt"></i></a>
          </div>
      </div>
      <div className="row">
        <div className="col-12" >
          <Skills skillsTitle="Front-end Skills"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12" >
          <Skills skillsSet={backendSet} skillsTitle="Back-end Skills"/>
        </div>
      </div>
    </>
  }
}

export default ResumePage;