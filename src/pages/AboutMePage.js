import React, { Component } from 'react';
import Summary from '../components/Summary';
import SkillSection from '../components/SkillSection';

class AboutMePage extends Component {
  
  render() {

    return <div className="row"> 
      <Summary/>
      <SkillSection/>
    </div>
  }
}

export default AboutMePage;