import React, { Component } from 'react';
import Projects from '../components/Projects';
import RowHeading5 from '../components/RowHeading';

class ProjectsPage extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <> 
    
    <RowHeading5 text="My Successes" domId="Projects"/>
    <Projects/>
    </> 
  }
}

export default ProjectsPage;