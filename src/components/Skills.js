import React, { Component } from 'react';
import Skill from './Skill';
import skillSet from '../skillsSeed';

class Skills extends Component {
  
  render() {
    let skillsTitle = this.props.skillsTitle ?? "Skills";
    console.log(this.props.skillsSet);
    let skills = this.props.skillsSet ?? skillSet;

    return <div className="card pt-3 border-0">
        <h5 className="card-title p-2" id="Skills">{skillsTitle}</h5>
        {skills.map( ( skillInfo ) => (
					<Skill 
                    key={skillInfo.id}
                    name={skillInfo.name}
                    labelPercent={skillInfo.labelPercent}
                    skillPercent={skillInfo.skillPercent} />
				) )}
    </div>
  }
}

export default Skills;