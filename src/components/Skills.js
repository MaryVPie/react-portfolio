import React, { Component } from 'react';
import Skill from './Skill';
import skillSet from '../skillsSeed';

class Skills extends Component {
  render() {
    return <div className="card pt-3 border-0">
        <h5 className="card-title p-2" id="Skills">Skills</h5>
        {skillSet.map( ( skillInfo ) => (
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