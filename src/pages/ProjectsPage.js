import React, { Component } from 'react';
import Projects from '../components/Projects';
import PageHeading from '../components/PageHeading';

class ProjectsPage extends Component {
  
  render() {
 
    return <> 
    <PageHeading text="Portfolio" />
    <Projects/>
    </> 
  }
}

export default ProjectsPage;